# 🎯 Resumen de Integración de Stripe

## 📋 Información de Configuración

### Credenciales de Stripe
```
Secret Key: (configurar en Netlify como STRIPE_SECRET_KEY)
Webhook Secret: (obtener de Stripe Dashboard y configurar como STRIPE_WEBHOOK_SECRET)
```

### Credenciales de MongoDB
```
URI: (configurar en Netlify como MONGODB_URI)
Base de datos: (configurar en Netlify como MONGODB_DB)
```

### Payment Link
```
URL: Configurado en el botón "7 Días Gratis"
Prueba gratis: 7 días
```

## 🚀 Pasos para Desplegar

### 1. Configurar Variables de Entorno en Netlify

Ve a: **Site settings > Environment variables** y agrega:

```bash
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
MONGODB_URI=mongodb://username:password@host:port
MONGODB_DB=your_database_name
```

### 2. Configurar Webhook en Stripe

1. Ve a: https://dashboard.stripe.com/webhooks
2. Clic en "Add endpoint"
3. URL: `https://TU-SITIO.netlify.app/.netlify/functions/stripe-webhook`
4. Eventos a escuchar:
   - ✅ `checkout.session.completed`
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.payment_failed`
   - ✅ `customer.updated`
5. Copia el "Signing secret" (whsec_...) y agrégalo como `STRIPE_WEBHOOK_SECRET`

### 3. Desplegar en Netlify

```bash
git add .
git commit -m "Add Stripe webhook integration"
git push
```

Netlify automáticamente:
- Instalará las dependencias
- Compilará la función del webhook
- La desplegará en `/.netlify/functions/stripe-webhook`

## 🧪 Probar la Integración

### Opción 1: Prueba Real
1. Haz clic en el botón "7 Días Gratis" en tu sitio
2. Completa el checkout con una tarjeta de prueba: `4242 4242 4242 4242`
3. Verifica en MongoDB que se creó el usuario

### Opción 2: Stripe CLI (Local)
```bash
# Instalar Stripe CLI
stripe login

# Escuchar webhooks
stripe listen --forward-to https://TU-SITIO.netlify.app/.netlify/functions/stripe-webhook

# Simular eventos
stripe trigger checkout.session.completed
stripe trigger customer.subscription.created
```

## 📊 Verificar Usuarios

### Listar todos los usuarios
```bash
npm run list-users
```

### Verificar un usuario específico
```bash
npm run check-user usuario@ejemplo.com
```

### Consulta directa en MongoDB
```javascript
// Conectar a MongoDB
use your_database_name

// Ver todos los usuarios
db.users.find().pretty()

// Buscar usuario por email
db.users.findOne({ email: "usuario@ejemplo.com" })

// Ver eventos procesados
db.stripe_events.find().sort({ received_at: -1 }).limit(10)
```

## 🔐 Lógica de Acceso

Un usuario tiene acceso si cumple AMBAS condiciones:

1. **Estado válido**: `subscription_status` es `'trialing'` o `'active'`
2. **Periodo vigente**: `current_period_end` es mayor que la fecha actual

```javascript
const hasAccess = 
  (user.subscription_status === 'trialing' || user.subscription_status === 'active') &&
  new Date() < new Date(user.current_period_end);
```

## 📈 Flujo de Prueba Gratis

```
1. Usuario → Clic en "7 Días Gratis"
   ↓
2. Stripe → Checkout con trial de 7 días
   ↓
3. Usuario → Completa checkout
   ↓
4. Webhook → checkout.session.completed
   - Crea usuario con email + customer_id
   ↓
5. Webhook → customer.subscription.created
   - subscription_status: 'trialing'
   - is_trialing: true
   - trial_end: +7 días
   ↓
6. Usuario → Tiene acceso por 7 días
   ↓
7. Día 8 → Stripe cobra automáticamente
   ↓
8. Webhook → customer.subscription.updated
   - subscription_status: 'active'
   - is_trialing: false
   ↓
9. Usuario → Continúa con acceso (ahora pagando)
```

## 🛠️ Archivos Creados

```
netlify/
  └── functions/
      └── stripe-webhook.ts       # Función del webhook

scripts/
  ├── check-user-status.js        # Script para verificar usuario
  └── list-users.js               # Script para listar usuarios

.env.example                      # Ejemplo de variables de entorno
netlify.toml                      # Configuración de Netlify (actualizado)
WEBHOOK_SETUP.md                  # Documentación detallada
STRIPE_INTEGRATION_SUMMARY.md     # Este archivo
```

## 📝 Estructura de Datos

### Usuario en MongoDB
```javascript
{
  email: "usuario@ejemplo.com",
  stripe_customer_id: "cus_ABC123",
  subscription_status: "trialing",
  is_trialing: true,
  trial_start: ISODate("2024-01-01T00:00:00Z"),
  trial_end: ISODate("2024-01-08T00:00:00Z"),
  current_period_end: ISODate("2024-02-01T00:00:00Z"),
  price_id: "price_XYZ789",
  product_id: "prod_DEF456",
  updated_at: ISODate("2024-01-01T00:00:00Z")
}
```

## 🚨 Solución de Problemas

### El webhook no recibe eventos
- ✅ Verifica que la URL del webhook en Stripe sea correcta
- ✅ Confirma que los eventos estén seleccionados
- ✅ Revisa los logs en Netlify Functions

### Error de autenticación en MongoDB
- ✅ Verifica las credenciales en las variables de entorno
- ✅ Confirma que la IP de Netlify esté permitida en MongoDB

### Usuario no se actualiza
- ✅ Revisa los logs del webhook en Netlify
- ✅ Verifica que el evento llegó a Stripe (Dashboard > Webhooks > Logs)
- ✅ Confirma que el `STRIPE_WEBHOOK_SECRET` sea correcto

## 📞 Próximos Pasos

1. ✅ Configurar variables de entorno en Netlify
2. ✅ Configurar webhook en Stripe Dashboard
3. ✅ Hacer un deploy
4. ✅ Probar con una compra de prueba
5. ✅ Verificar que el usuario se cree en MongoDB
6. ✅ Implementar verificación de acceso en tu backend/frontend

## 🔗 Enlaces Útiles

- [Stripe Dashboard](https://dashboard.stripe.com)
- [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
- [Netlify Functions Logs](https://app.netlify.com)
- [Stripe Testing Cards](https://stripe.com/docs/testing#cards)

