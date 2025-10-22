Perfecto. Aquí tienes un **PROMPT listo para copiar/pegar** a la IA/dev para que implemente el **webhook de Stripe** que, después de una suscripción (Payment Link o Checkout), **escriba/actualice el estatus** del usuario en **Postgres** o **Redis** o **MongoDB**, incluyendo si está en **prueba gratis**.

---

# 🚀 PROMPT (copia y pega tal cual)

Quiero que implementes un **webhook de Stripe** (Node.js + TypeScript) que reciba eventos de **suscripción** y actualice una base de datos con el **estatus real** del usuario. Debe soportar **una** de estas DB (elegible por env var): **POSTGRES** o **REDIS** o **MONGO**.

## 🎯 Objetivo funcional

* Al completar un pago de suscripción (Payment Link o Checkout), crear/actualizar el usuario en DB con:

  * `email`
  * `stripe_customer_id`
  * `subscription_status` (mapeado a nuestro dominio)
  * `is_trialing` (booleano)
  * `trial_start` y `trial_end` (ISO)
  * `current_period_end` (ISO)
  * `price_id`, `product_id`
  * `updated_at` (ISO now)
* Mantener **idempotencia** de webhooks.
* Verificar **firma** del webhook de Stripe.
* Compatible con **Netlify Functions** o **Express** (elige uno; por defecto Netlify).

## 📦 Entradas requeridas

Configura estas **environment variables**:

```
STRIPE_SECRET_KEY=sk_test_or_live
STRIPE_WEBHOOK_SECRET=whsec_...
DB_TYPE=POSTGRES|REDIS|MONGO

# Si POSTGRES:
DATABASE_URL=postgresql://user:pass@host:port/dbname

# Si REDIS:
REDIS_URL=redis://default:pass@host:port/0

# Si MONGO:
MONGODB_URI=mongodb+srv://user:pass@cluster/dbname
MONGODB_DB=appdb
```

## 🧱 Esquema recomendado

### Postgres (crear tablas si no existen)

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT UNIQUE,
  subscription_status TEXT CHECK (subscription_status IN (
    'incomplete','incomplete_expired','trialing','active','past_due','canceled','unpaid','paused'
  )) DEFAULT 'incomplete',
  is_trialing BOOLEAN DEFAULT FALSE,
  trial_start TIMESTAMPTZ,
  trial_end TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  product_id TEXT,
  price_id TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS stripe_events (
  id TEXT PRIMARY KEY,
  received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
```

### Redis (estructura de keys)

* `stripe:event:{event_id}` → string “1” (para idempotencia)
* `user:{email}` → **hash** con los campos de arriba
  (o key `user:byCustomer:{stripe_customer_id}` que guarde el email para lookup inverso)

### MongoDB

* Colección `users` con índice único en `email` y/o `stripe_customer_id`
* Colección `stripe_events` con `_id = event_id` para idempotencia

## 🔁 Eventos de Stripe a escuchar

* `checkout.session.completed` (para enlazar email ↔ customer)
* `customer.subscription.created`
* `customer.subscription.updated`
* `customer.subscription.deleted`
* `invoice.payment_failed`
* (opcional) `customer.updated` (sincronizar email si cambia)

## 🧠 Lógica de estatus y trial

* Mapea `subscription.status` a nuestro dominio:

  * `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`
  * Si usas `pause_collection`, trata como `paused`.
* **Trial**:

  * Si `subscription.status === 'trialing'` ⇒ `is_trialing = true`
  * Lee `subscription.trial_start` y `subscription.trial_end` (epoch segs) → guarda ISO.
* **Periodo**:

  * `current_period_end = toISO(subscription.current_period_end * 1000)`
* **Producto/Precio**:

  * `price_id = sub.items.data[0]?.price?.id`
  * `product_id = sub.items.data[0]?.price?.product`

## 🔐 Regla de acceso (que luego usará el backend)

* Un usuario **tiene acceso** si:

  * `subscription_status ∈ {'active','trialing'}` **y**
  * `now < current_period_end` **y** (opcional) si no está `paused`
* Todo lo demás → bloquear (HTTP 402 o equivalente).

## 🧩 Implementación (Node + TS)

* Usa `stripe` SDK con `apiVersion: '2023-10-16'` (o la más reciente).
* **Verifica firma** con `stripe.webhooks.constructEvent`.
* **Idempotencia**:

  * Postgres: tabla `stripe_events`.
  * Redis: setea `stripe:event:{id}` con NX (o `SETNX`) y exp de 30d.
  * Mongo: inserta doc en `stripe_events` con `_id = event.id`; si choca, ya procesado.

## 🧪 QA / Aceptación

* Simula con Stripe CLI:

  * `checkout.session.completed` → crea/actualiza `email + stripe_customer_id`.
  * `customer.subscription.created/updated`:

    * `trialing` → `is_trialing=true`, `trial_end` set.
    * `active` → `is_trialing=false`.
    * `canceled` → bloquear tras `current_period_end`.
  * `invoice.payment_failed` → `past_due`.
* Reprocesar el mismo `event.id` no debe duplicar ni cambiar nada (idempotente).

## 🛠️ Código base (Netlify Function, con 3 drivers DB)

Crea `/.netlify/functions/stripe-webhook.ts`:

```ts
import type { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { Client as PgClient } from 'pg';
import { createClient as createRedis } from 'redis';
import { MongoClient } from 'mongodb';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });
const DB_TYPE = process.env.DB_TYPE || 'POSTGRES';

type DB = {
  init(): Promise<void>;
  alreadyProcessed(eventId: string): Promise<boolean>;
  markProcessed(eventId: string): Promise<void>;
  upsertUserByEmail(email: string, data: any): Promise<void>;
  updateByCustomerId(customerId: string, data: any): Promise<void>;
};

const normalizeStatus = (s: string) =>
  ({
    incomplete:'incomplete',
    incomplete_expired:'incomplete_expired',
    trialing:'trialing',
    active:'active',
    past_due:'past_due',
    canceled:'canceled',
    unpaid:'unpaid',
    paused:'paused'
  } as Record<string,string>)[s] || 'incomplete';

const toISO = (sec?: number|null) => (sec ? new Date(sec * 1000).toISOString() : null);

// ---------- DB DRIVERS ----------
const pgDriver = (): DB => {
  let pg: PgClient;
  return {
    init: async () => {
      pg = new PgClient({ connectionString: process.env.DATABASE_URL });
      await pg.connect();
    },
    alreadyProcessed: async (id) => {
      const r = await pg.query('SELECT 1 FROM stripe_events WHERE id=$1', [id]);
      return r.rowCount > 0;
    },
    markProcessed: async (id) => {
      await pg.query('INSERT INTO stripe_events (id) VALUES ($1) ON CONFLICT DO NOTHING', [id]);
    },
    upsertUserByEmail: async (email, data) => {
      const fields = [
        'stripe_customer_id','subscription_status','is_trialing',
        'trial_start','trial_end','current_period_end','price_id','product_id'
      ];
      const params = [
        data.stripe_customer_id, data.subscription_status, data.is_trialing,
        data.trial_start, data.trial_end, data.current_period_end, data.price_id, data.product_id
      ];
      await pg.query(`
        INSERT INTO users (email, stripe_customer_id, subscription_status, is_trialing,
                           trial_start, trial_end, current_period_end, price_id, product_id, updated_at)
        VALUES ($9, $1, $2, $3, $4, $5, $6, $7, $8, NOW())
        ON CONFLICT (email)
        DO UPDATE SET stripe_customer_id=EXCLUDED.stripe_customer_id,
                      subscription_status=EXCLUDED.subscription_status,
                      is_trialing=EXCLUDED.is_trialing,
                      trial_start=EXCLUDED.trial_start,
                      trial_end=EXCLUDED.trial_end,
                      current_period_end=EXCLUDED.current_period_end,
                      price_id=EXCLUDED.price_id,
                      product_id=EXCLUDED.product_id,
                      updated_at=NOW()
      `, [...params, email]);
    },
    updateByCustomerId: async (customerId, data) => {
      await pg.query(`
        UPDATE users SET
          subscription_status=$1, is_trialing=$2, trial_start=$3, trial_end=$4,
          current_period_end=$5, price_id=$6, product_id=$7, updated_at=NOW()
        WHERE stripe_customer_id=$8
      `, [
        data.subscription_status, data.is_trialing, data.trial_start, data.trial_end,
        data.current_period_end, data.price_id, data.product_id, customerId
      ]);
    }
  };
};

const redisDriver = (): DB => {
  let redis: any;
  return {
    init: async () => {
      redis = createRedis({ url: process.env.REDIS_URL });
      await redis.connect();
    },
    alreadyProcessed: async (id) => {
      const key = `stripe:event:${id}`;
      const val = await redis.get(key);
      return !!val;
    },
    markProcessed: async (id) => {
      const key = `stripe:event:${id}`;
      // set NX with TTL 30d
      await redis.set(key, '1', { NX: true, EX: 60 * 60 * 24 * 30 });
    },
    upsertUserByEmail: async (email, data) => {
      const key = `user:${email.toLowerCase()}`;
      await redis.hSet(key, {
        email,
        stripe_customer_id: data.stripe_customer_id || '',
        subscription_status: data.subscription_status || 'incomplete',
        is_trialing: String(!!data.is_trialing),
        trial_start: data.trial_start || '',
        trial_end: data.trial_end || '',
        current_period_end: data.current_period_end || '',
        price_id: data.price_id || '',
        product_id: data.product_id || '',
        updated_at: new Date().toISOString()
      });
      // opcional: índice por customerId
      if (data.stripe_customer_id) {
        await redis.set(`user:byCustomer:${data.stripe_customer_id}`, email.toLowerCase());
      }
    },
    updateByCustomerId: async (customerId, data) => {
      const email = await redis.get(`user:byCustomer:${customerId}`);
      if (!email) return;
      const key = `user:${email}`;
      await redis.hSet(key, {
        subscription_status: data.subscription_status || 'incomplete',
        is_trialing: String(!!data.is_trialing),
        trial_start: data.trial_start || '',
        trial_end: data.trial_end || '',
        current_period_end: data.current_period_end || '',
        price_id: data.price_id || '',
        product_id: data.product_id || '',
        updated_at: new Date().toISOString()
      });
    }
  };
};

const mongoDriver = (): DB => {
  let client: MongoClient, db: any, users: any, events: any;
  return {
    init: async () => {
      client = new MongoClient(process.env.MONGODB_URI!);
      await client.connect();
      db = client.db(process.env.MONGODB_DB || 'appdb');
      users = db.collection('users');
      events = db.collection('stripe_events');
      await users.createIndex({ email: 1 }, { unique: true });
      await users.createIndex({ stripe_customer_id: 1 }, { unique: true, sparse: true });
      await events.createIndex({ _id: 1 }, { unique: true });
    },
    alreadyProcessed: async (id) => {
      const found = await events.findOne({ _id: id });
      return !!found;
    },
    markProcessed: async (id) => {
      try { await events.insertOne({ _id: id, received_at: new Date() }); } catch {}
    },
    upsertUserByEmail: async (email, data) => {
      await users.updateOne(
        { email: email.toLowerCase() },
        {
          $set: {
            email: email.toLowerCase(),
            stripe_customer_id: data.stripe_customer_id,
            subscription_status: data.subscription_status,
            is_trialing: !!data.is_trialing,
            trial_start: data.trial_start ? new Date(data.trial_start) : null,
            trial_end: data.trial_end ? new Date(data.trial_end) : null,
            current_period_end: data.current_period_end ? new Date(data.current_period_end) : null,
            price_id: data.price_id,
            product_id: data.product_id,
            updated_at: new Date()
          }
        },
        { upsert: true }
      );
    },
    updateByCustomerId: async (customerId, data) => {
      await users.updateOne(
        { stripe_customer_id: customerId },
        {
          $set: {
            subscription_status: data.subscription_status,
            is_trialing: !!data.is_trialing,
            trial_start: data.trial_start ? new Date(data.trial_start) : null,
            trial_end: data.trial_end ? new Date(data.trial_end) : null,
            current_period_end: data.current_period_end ? new Date(data.current_period_end) : null,
            price_id: data.price_id,
            product_id: data.product_id,
            updated_at: new Date()
          }
        }
      );
    }
  };
};

// ---------- MAIN HANDLER ----------
export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const sig = event.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;
  let e: Stripe.Event;

  try {
    e = stripe.webhooks.constructEvent(event.body!, sig!, secret);
  } catch (err: any) {
    return { statusCode: 400, body: `Webhook signature verification failed: ${err.message}` };
  }

  // choose DB
  const db: DB =
    DB_TYPE === 'REDIS' ? redisDriver() :
    DB_TYPE === 'MONGO' ? mongoDriver() :
    pgDriver();

  await db.init();

  if (await db.alreadyProcessed(e.id)) {
    return { statusCode: 200, body: 'Already processed' };
  }

  const upsertByEmail = async (email: string, data: any) =>
    db.upsertUserByEmail(email, data);

  const updateByCustomer = async (customerId: string, data: any) =>
    db.updateByCustomerId(customerId, data);

  try {
    switch (e.type) {
      case 'checkout.session.completed': {
        const s = e.data.object as Stripe.Checkout.Session;
        const email = s.customer_details?.email || (s.metadata as any)?.app_user_email;
        const customerId = s.customer as string;
        if (email && customerId) {
          await upsertByEmail(email, {
            stripe_customer_id: customerId,
            updated_at: new Date().toISOString()
          });
        }
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = e.data.object as Stripe.Subscription;
        const data = {
          subscription_status: normalizeStatus(sub.status),
          is_trialing: sub.status === 'trialing',
          trial_start: toISO((sub as any).trial_start ?? null),
          trial_end: toISO((sub as any).trial_end ?? null),
          current_period_end: toISO(sub.current_period_end),
          price_id: sub.items.data[0]?.price?.id || null,
          product_id: (sub.items.data[0]?.price?.product as string) || null
        };
        await updateByCustomer(sub.customer as string, data);
        break;
      }

      case 'invoice.payment_failed': {
        const inv = e.data.object as Stripe.Invoice;
        await updateByCustomer(inv.customer as string, {
          subscription_status: 'past_due'
        });
        break;
      }
    }

    await db.markProcessed(e.id);
    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    return { statusCode: 500, body: 'Internal Error' };
  }
};
```

## ✅ Cómo sabré si el usuario está en prueba gratis

* En tu DB verás:

  * `subscription_status = 'trialing'`
  * `is_trialing = true`
  * `trial_end` con fecha ISO (cuando termina la prueba)
* Para **permitir acceso**: `subscription_status ∈ {'trialing','active'}` y `now < current_period_end`.

## 🔗 Notas

* Esto funciona tanto si cobras con **Payment Links** como con **Checkout**; el webhook es igual.
* Si usas **Customer Portal**, Stripe enviará `updated/deleted` cuando el cliente cancele o cambie tarjeta; tu DB se sincroniza sola.

---

Con este PROMPT tienes todo: variables, tablas, eventos, lógica de trial y código base compatible con Postgres/Redis/Mongo. Si quieres, te genero el archivo listo con nombres de carpeta para tu repo Netlify.
