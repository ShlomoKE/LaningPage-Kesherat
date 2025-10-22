# 🔧 Configuración del Webhook de Stripe

## Paso 1: Crear el Webhook en Stripe

1. **Ve a Stripe Dashboard**: https://dashboard.stripe.com/test/webhooks
2. **Clic en "Add endpoint"** (o "Agregar endpoint")

## Paso 2: Configurar la URL

**Endpoint URL:**
```
https://kesherat.netlify.app/.netlify/functions/stripe-webhook
```

## Paso 3: Seleccionar Eventos

Marca estos 6 eventos:

- ✅ `checkout.session.completed` - Cuando se completa un checkout
- ✅ `customer.subscription.created` - Cuando se crea una suscripción
- ✅ `customer.subscription.updated` - Cuando se actualiza una suscripción
- ✅ `customer.subscription.deleted` - Cuando se cancela una suscripción
- ✅ `invoice.payment_failed` - Cuando falla un pago
- ✅ `customer.updated` - Cuando se actualiza un cliente

## Paso 4: Obtener el Signing Secret

1. Después de crear el endpoint, verás un **"Signing secret"**
2. Empieza con `whsec_...`
3. **Cópialo**

## Paso 5: Agregar el Secret a Netlify

1. Ve a: https://app.netlify.com
2. Selecciona tu sitio "kesherat"
3. **Site settings** → **Environment variables**
4. Busca `STRIPE_WEBHOOK_SECRET`
5. **Edita** y pega el valor `whsec_...`
6. **Save**

## Paso 6: Hacer un Nuevo Deploy

Después de agregar la variable de entorno:

```bash
git commit --allow-empty -m "Trigger deploy for webhook secret"
git push
```

O en Netlify:
- **Deploys** → **Trigger deploy** → **Deploy site**

---

## 🧪 Probar el Webhook

### Opción 1: Hacer una compra de prueba

1. Ve a: https://kesherat.netlify.app
2. Clic en "7 Días Gratis" del paquete Light
3. Usa tarjeta de prueba:
   - Número: `4242 4242 4242 4242`
   - Fecha: `12/25`
   - CVC: `123`
   - Email: tu email real

### Opción 2: Enviar evento de prueba desde Stripe

1. Ve a: https://dashboard.stripe.com/test/webhooks
2. Selecciona tu webhook
3. **Send test webhook**
4. Selecciona `checkout.session.completed`
5. **Send test webhook**

---

## 🔍 Verificar que Funcionó

### En Netlify (Logs del webhook):

1. Ve a: https://app.netlify.com
2. **Functions** → **stripe-webhook**
3. Deberías ver logs como:

```
Processing event: checkout.session.completed (evt_ABC123...)
Linking email usuario@ejemplo.com to customer cus_XYZ789
```

### En MongoDB:

Ejecuta el script:

```bash
npm run list-users
```

Deberías ver:

```
✅ Conectado a MongoDB

📊 Total de usuarios: 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Usuario 1
Email: tu-email@ejemplo.com
Customer ID: cus_ABC123...
Estado: trialing
En prueba: Sí
...
```

### En Stripe Dashboard:

1. Ve a: https://dashboard.stripe.com/test/webhooks
2. Selecciona tu webhook
3. **Logs** tab
4. Deberías ver eventos con status `200 OK`

---

## 🚨 Si NO Funciona

### Problema 1: No hay eventos en los logs de Netlify

**Causa**: El webhook no está configurado en Stripe o la URL es incorrecta

**Solución**: Verifica que el webhook esté creado en Stripe con la URL correcta

### Problema 2: Error 401 o "Invalid signature"

**Causa**: El `STRIPE_WEBHOOK_SECRET` es incorrecto o no está configurado

**Solución**: 
1. Copia el signing secret de Stripe
2. Actualiza la variable en Netlify
3. Haz un nuevo deploy

### Problema 3: Error de MongoDB

**Causa**: Las credenciales de MongoDB son incorrectas

**Solución**: Verifica las variables:
- `MONGODB_URI`
- `MONGODB_DB`

### Problema 4: Eventos llegan pero no se guardan en MongoDB

**Causa**: Error en la lógica del webhook

**Solución**: Revisa los logs completos en Netlify Functions

---

## 📝 Notas Importantes

1. **MongoDB crea las colecciones automáticamente**: No necesitas crear `users` ni `stripe_events` manualmente
2. **Usa el modo TEST de Stripe**: Asegúrate de estar en https://dashboard.stripe.com/test/
3. **El webhook secret es diferente para cada endpoint**: Si creas un nuevo endpoint, obtendrás un nuevo secret
4. **Los eventos solo se envían después de configurar el webhook**: Eventos pasados no se reenvían automáticamente

---

## ✅ Checklist Final

- [ ] Webhook creado en Stripe Dashboard
- [ ] URL correcta: `https://kesherat.netlify.app/.netlify/functions/stripe-webhook`
- [ ] 6 eventos seleccionados
- [ ] `STRIPE_WEBHOOK_SECRET` configurado en Netlify
- [ ] Deploy realizado después de agregar el secret
- [ ] Prueba realizada (compra o test event)
- [ ] Logs verificados en Netlify Functions
- [ ] Datos verificados en MongoDB con `npm run list-users`

