/**
 * Script para verificar el estado de suscripción de un usuario
 * Uso: node scripts/check-user-status.js usuario@ejemplo.com
 */

import { MongoClient } from 'mongodb';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:fkhVtuloTnOVZsjWOGIFEfwRAuNZjGRh@tramway.proxy.rlwy.net:23784';
const MONGODB_DB = process.env.MONGODB_DB || 'kesherat';

async function checkUserStatus(email) {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Conectado a MongoDB');
    
    const db = client.db(MONGODB_DB);
    const users = db.collection('users');
    
    const user = await users.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      console.log(`❌ Usuario no encontrado: ${email}`);
      return;
    }
    
    console.log('\n📊 Información del Usuario:');
    console.log('━'.repeat(50));
    console.log(`Email: ${user.email}`);
    console.log(`Customer ID: ${user.stripe_customer_id || 'N/A'}`);
    console.log(`Estado: ${user.subscription_status || 'N/A'}`);
    console.log(`En prueba: ${user.is_trialing ? 'Sí' : 'No'}`);
    
    if (user.trial_start) {
      console.log(`Inicio de prueba: ${new Date(user.trial_start).toLocaleString()}`);
    }
    
    if (user.trial_end) {
      console.log(`Fin de prueba: ${new Date(user.trial_end).toLocaleString()}`);
    }
    
    if (user.current_period_end) {
      console.log(`Fin del periodo actual: ${new Date(user.current_period_end).toLocaleString()}`);
    }
    
    console.log(`Price ID: ${user.price_id || 'N/A'}`);
    console.log(`Product ID: ${user.product_id || 'N/A'}`);
    console.log(`Última actualización: ${new Date(user.updated_at).toLocaleString()}`);
    
    // Verificar acceso
    const hasAccess = 
      (user.subscription_status === 'trialing' || user.subscription_status === 'active') &&
      user.current_period_end &&
      new Date() < new Date(user.current_period_end);
    
    console.log('\n🔐 Estado de Acceso:');
    console.log('━'.repeat(50));
    console.log(hasAccess ? '✅ TIENE ACCESO' : '❌ SIN ACCESO');
    
    if (!hasAccess) {
      if (user.subscription_status !== 'trialing' && user.subscription_status !== 'active') {
        console.log(`Razón: Estado de suscripción es "${user.subscription_status}"`);
      } else if (!user.current_period_end || new Date() >= new Date(user.current_period_end)) {
        console.log('Razón: Periodo de suscripción expirado');
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.close();
    console.log('\n✅ Conexión cerrada');
  }
}

// Obtener email de los argumentos
const email = process.argv[2];

if (!email) {
  console.log('Uso: node scripts/check-user-status.js usuario@ejemplo.com');
  process.exit(1);
}

checkUserStatus(email);

