# 🚀 Guía Rápida de Despliegue

## ⚡ Configuración en 5 Minutos

### 1️⃣ Variables de Entorno en Netlify

Ve a tu sitio en Netlify → **Site settings** → **Environment variables** → **Add a variable**

Agrega estas 4 variables:

| Variable | Valor |
|----------|-------|
| `STRIPE_SECRET_KEY` | `sk_live_...` (obtener de Stripe Dashboard) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` (obtener después de crear webhook) |
| `MONGODB_URI` | Tu URI de MongoDB |
| `MONGODB_DB` | Nombre de tu base de datos |

### 2️⃣ Desplegar el Código

```bash
git add .
git commit -m "Add Stripe webhook"
git push
```

Espera a que Netlify termine el deploy (1-2 minutos).

### 3️⃣ Configurar Webhook en Stripe

1. Ve a: https://dashboard.stripe.com/webhooks
2. Clic en **"Add endpoint"**
3. **Endpoint URL**: `https://TU-SITIO.netlify.app/.netlify/functions/stripe-webhook`
   - Reemplaza `TU-SITIO` con tu dominio de Netlify
4. **Events to send**: Selecciona estos 6 eventos:
   - ✅ `checkout.session.completed`
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.payment_failed`
   - ✅ `customer.updated`
5. Clic en **"Add endpoint"**
6. Copia el **"Signing secret"** (empieza con `whsec_...`)
7. Ve a Netlify → Environment variables → Edita `STRIPE_WEBHOOK_SECRET` y pega el valor
8. **Importante**: Haz un nuevo deploy en Netlify para que tome la nueva variable

### 4️⃣ Probar

1. Ve a tu sitio web
2. Haz clic en el botón **"7 Días Gratis"** del paquete Light
3. Usa esta tarjeta de prueba:
   - Número: `4242 4242 4242 4242`
   - Fecha: Cualquier fecha futura
   - CVC: Cualquier 3 dígitos
   - Email: Tu email real
4. Completa el checkout

### 5️⃣ Verificar

Opción A - Desde tu computadora:
```bash
npm run check-user tu-email@ejemplo.com
```

Opción B - En MongoDB directamente:
```javascript
use kesherat
db.users.findOne({ email: "tu-email@ejemplo.com" })
```

Deberías ver:
```javascript
{
  email: "tu-email@ejemplo.com",
  subscription_status: "trialing",
  is_trialing: true,
  trial_end: ISODate("...") // 7 días después
}
```

## ✅ ¡Listo!

Tu webhook está funcionando. Ahora cada vez que alguien:
- ✅ Complete un checkout → Se crea en la base de datos
- ✅ Inicie prueba gratis → `is_trialing: true`
- ✅ Termine la prueba → Se cobra automáticamente
- ✅ Cancele → `subscription_status: 'canceled'`

## 🔍 Ver Logs

Para ver qué está pasando con el webhook:

1. Ve a Netlify
2. **Functions** → **stripe-webhook**
3. Revisa los logs en tiempo real

## 🆘 Problemas Comunes

### "Webhook signature verification failed"
→ El `STRIPE_WEBHOOK_SECRET` está mal. Cópialo de nuevo desde Stripe.

### "No se crea el usuario"
→ Revisa los logs del webhook en Netlify. Probablemente el evento no está llegando.

### "Error de MongoDB"
→ Verifica que `MONGODB_URI` esté correcto en las variables de entorno.

## 📚 Más Información

- Ver todos los usuarios: `npm run list-users`
- Documentación completa: `WEBHOOK_SETUP.md`
- Resumen técnico: `STRIPE_INTEGRATION_SUMMARY.md`
- Template de variables: `env.template` (copia a `.env` para desarrollo local)

