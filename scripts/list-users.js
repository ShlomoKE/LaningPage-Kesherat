/**
 * Script para listar todos los usuarios y su estado de suscripción
 * Uso: node scripts/list-users.js
 */

import { MongoClient } from 'mongodb';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:fkhVtuloTnOVZsjWOGIFEfwRAuNZjGRh@tramway.proxy.rlwy.net:23784';
const MONGODB_DB = process.env.MONGODB_DB || 'kesherat';

async function listUsers() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Conectado a MongoDB');
    
    const db = client.db(MONGODB_DB);
    const users = db.collection('users');
    
    const allUsers = await users.find({}).toArray();
    
    if (allUsers.length === 0) {
      console.log('\n📭 No hay usuarios registrados');
      return;
    }
    
    console.log(`\n📊 Total de usuarios: ${allUsers.length}`);
    console.log('━'.repeat(100));
    
    // Estadísticas
    const stats = {
      trialing: 0,
      active: 0,
      canceled: 0,
      past_due: 0,
      other: 0,
      withAccess: 0
    };
    
    allUsers.forEach(user => {
      const hasAccess = 
        (user.subscription_status === 'trialing' || user.subscription_status === 'active') &&
        user.current_period_end &&
        new Date() < new Date(user.current_period_end);
      
      if (hasAccess) stats.withAccess++;
      
      switch (user.subscription_status) {
        case 'trialing': stats.trialing++; break;
        case 'active': stats.active++; break;
        case 'canceled': stats.canceled++; break;
        case 'past_due': stats.past_due++; break;
        default: stats.other++; break;
      }
      
      const statusIcon = hasAccess ? '✅' : '❌';
      const trialIcon = user.is_trialing ? '🎁' : '  ';
      
      console.log(`${statusIcon} ${trialIcon} ${user.email.padEnd(35)} | ${(user.subscription_status || 'N/A').padEnd(15)} | ${user.stripe_customer_id || 'N/A'}`);
    });
    
    console.log('━'.repeat(100));
    console.log('\n📈 Estadísticas:');
    console.log(`  En prueba gratis: ${stats.trialing}`);
    console.log(`  Activos: ${stats.active}`);
    console.log(`  Cancelados: ${stats.canceled}`);
    console.log(`  Pago vencido: ${stats.past_due}`);
    console.log(`  Otros: ${stats.other}`);
    console.log(`  ─────────────────`);
    console.log(`  Con acceso: ${stats.withAccess}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await client.close();
    console.log('\n✅ Conexión cerrada');
  }
}

listUsers();

