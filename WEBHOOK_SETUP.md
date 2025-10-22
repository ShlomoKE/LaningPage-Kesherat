# Configuración del Webhook de Stripe

Este documento explica cómo configurar el webhook de Stripe para gestionar suscripciones y pruebas gratuitas.

## 🔧 Variables de Entorno

Configura estas variables en Netlify (Site settings > Environment variables):

```bash
# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# MongoDB
MONGODB_URI=mongodb://username:password@host:port
MONGODB_DB=your_database_name
```

## 📡 Configurar Webhook en Stripe

1. Ve a [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Haz clic en "Add endpoint"
3. URL del endpoint: `https://tu-sitio.netlify.app/.netlify/functions/stripe-webhook`
4. Selecciona estos eventos:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
   - `customer.updated`
5. Copia el "Signing secret" (whsec_...) y agrégalo como `STRIPE_WEBHOOK_SECRET`

## 🗄️ Estructura de la Base de Datos

### Colección: `users`

```javascript
{
  _id: ObjectId,
  email: "usuario@ejemplo.com",
  stripe_customer_id: "cus_...",
  subscription_status: "trialing" | "active" | "past_due" | "canceled" | "incomplete" | "unpaid",
  is_trialing: true | false,
  trial_start: ISODate("2024-01-01T00:00:00Z"),
  trial_end: ISODate("2024-01-08T00:00:00Z"),
  current_period_end: ISODate("2024-02-01T00:00:00Z"),
  price_id: "price_...",
  product_id: "prod_...",
  updated_at: ISODate("2024-01-01T00:00:00Z")
}
```

### Colección: `stripe_events`

```javascript
{
  _id: "evt_...",  // Stripe event ID
  received_at: ISODate("2024-01-01T00:00:00Z")
}
```

## 🔍 Verificar Acceso del Usuario

Un usuario tiene acceso si:

```javascript
subscription_status === 'trialing' || subscription_status === 'active'
```

Y además:

```javascript
new Date() < current_period_end
```

### Ejemplo de consulta:

```javascript
const user = await db.collection('users').findOne({ email: userEmail });

const hasAccess = 
  (user.subscription_status === 'trialing' || user.subscription_status === 'active') &&
  new Date() < new Date(user.current_period_end);
```

## 🧪 Probar el Webhook Localmente

1. Instala Stripe CLI:
   ```bash
   # Windows (con Scoop)
   scoop install stripe
   
   # macOS
   brew install stripe/stripe-cli/stripe
   ```

2. Inicia sesión:
   ```bash
   stripe login
   ```

3. Reenvía eventos a tu función local:
   ```bash
   stripe listen --forward-to localhost:8888/.netlify/functions/stripe-webhook
   ```

4. Copia el webhook secret que aparece y úsalo como `STRIPE_WEBHOOK_SECRET`

5. Simula eventos:
   ```bash
   # Simular checkout completado
   stripe trigger checkout.session.completed
   
   # Simular suscripción creada
   stripe trigger customer.subscription.created
   
   # Simular pago fallido
   stripe trigger invoice.payment_failed
   ```

## 📊 Eventos Manejados

| Evento | Acción |
|--------|--------|
| `checkout.session.completed` | Vincula email con customer_id de Stripe |
| `customer.subscription.created` | Crea registro de suscripción |
| `customer.subscription.updated` | Actualiza estado de suscripción (ej: de trialing a active) |
| `customer.subscription.deleted` | Marca suscripción como cancelada |
| `invoice.payment_failed` | Marca como past_due |
| `customer.updated` | Sincroniza cambios de email |

## 🎯 Flujo de Prueba Gratuita (7 días)

1. Usuario hace clic en "7 Días Gratis" → va a Stripe Payment Link
2. Stripe crea checkout session con trial de 7 días
3. Usuario completa el checkout
4. Webhook recibe `checkout.session.completed`:
   - Crea usuario con email y customer_id
5. Webhook recibe `customer.subscription.created`:
   - Actualiza usuario con:
     - `subscription_status: 'trialing'`
     - `is_trialing: true`
     - `trial_end: fecha 7 días después`
6. Después de 7 días, Stripe cobra automáticamente
7. Webhook recibe `customer.subscription.updated`:
   - Actualiza a `subscription_status: 'active'`
   - `is_trialing: false`

## 🔐 Seguridad

- ✅ Verifica firma del webhook con `stripe.webhooks.constructEvent`
- ✅ Idempotencia: eventos duplicados no causan problemas
- ✅ Logs de todos los eventos procesados
- ✅ Manejo de errores robusto

## 📝 Logs

Para ver los logs del webhook en Netlify:
1. Ve a tu sitio en Netlify
2. Functions > stripe-webhook
3. Revisa los logs en tiempo real

## 🚨 Troubleshooting

### Error: "Webhook signature verification failed"
- Verifica que `STRIPE_WEBHOOK_SECRET` sea correcto
- Asegúrate de usar el secret del webhook correcto (test vs live)

### Error: "MongoServerError: Authentication failed"
- Verifica las credenciales de MongoDB
- Asegúrate de que la IP de Netlify esté en la whitelist

### Usuario no se actualiza
- Revisa los logs del webhook
- Verifica que los eventos estén configurados en Stripe
- Confirma que el webhook esté activo

## 📚 Recursos

- [Stripe Webhooks Documentation](https://stripe.com/docs/webhooks)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/)

