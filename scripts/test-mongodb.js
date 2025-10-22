#!/usr/bin/env node

/**
 * Script para probar la conexión a MongoDB y ver las colecciones
 */

require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

async function testMongoDB() {
  console.log('\n🔍 Probando conexión a MongoDB...\n');

  // Validar variables de entorno
  if (!MONGODB_URI || !MONGODB_DB) {
    console.error('❌ Error: MONGODB_URI y MONGODB_DB deben estar configurados');
    console.log('\n💡 Crea un archivo .env con:');
    console.log('MONGODB_URI=tu_uri_de_mongodb');
    console.log('MONGODB_DB=your_database_name\n');
    process.exit(1);
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    // Conectar
    await client.connect();
    console.log('✅ Conectado a MongoDB exitosamente\n');

    const db = client.db(MONGODB_DB);

    // Listar todas las colecciones
    console.log('📚 Colecciones en la base de datos:\n');
    const collections = await db.listCollections().toArray();
    
    if (collections.length === 0) {
      console.log('⚠️  No hay colecciones creadas todavía');
      console.log('\n💡 Las colecciones se crearán automáticamente cuando:');
      console.log('   1. El webhook reciba el primer evento de Stripe');
      console.log('   2. Se complete el primer checkout\n');
      console.log('📝 Colecciones que se crearán:');
      console.log('   - users: Información de usuarios y suscripciones');
      console.log('   - stripe_events: Log de eventos procesados\n');
    } else {
      collections.forEach((collection, index) => {
        console.log(`   ${index + 1}. ${collection.name}`);
      });
      console.log('');

      // Contar documentos en cada colección
      console.log('📊 Documentos en cada colección:\n');
      for (const collection of collections) {
        const count = await db.collection(collection.name).countDocuments();
        console.log(`   ${collection.name}: ${count} documento(s)`);
      }
      console.log('');

      // Si existe la colección users, mostrar algunos datos
      if (collections.some(c => c.name === 'users')) {
        console.log('👥 Usuarios registrados:\n');
        const users = await db.collection('users').find({}).limit(5).toArray();
        
        if (users.length === 0) {
          console.log('   ⚠️  No hay usuarios todavía\n');
        } else {
          users.forEach((user, index) => {
            console.log(`   ${index + 1}. ${user.email || 'Sin email'}`);
            console.log(`      Customer ID: ${user.stripe_customer_id || 'N/A'}`);
            console.log(`      Estado: ${user.subscription_status || 'N/A'}`);
            console.log('');
          });
        }
      }

      // Si existe la colección stripe_events, mostrar últimos eventos
      if (collections.some(c => c.name === 'stripe_events')) {
        console.log('📬 Últimos eventos de Stripe:\n');
        const events = await db.collection('stripe_events')
          .find({})
          .sort({ received_at: -1 })
          .limit(5)
          .toArray();
        
        if (events.length === 0) {
          console.log('   ⚠️  No hay eventos procesados todavía\n');
        } else {
          events.forEach((event, index) => {
            const date = new Date(event.received_at).toLocaleString('es-MX');
            console.log(`   ${index + 1}. ${event.event_type}`);
            console.log(`      ID: ${event.event_id}`);
            console.log(`      Fecha: ${date}`);
            console.log('');
          });
        }
      }
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('✅ Prueba completada exitosamente\n');

  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:\n');
    console.error(`   ${error.message}\n`);
    
    if (error.message.includes('authentication')) {
      console.log('💡 Verifica que el MONGODB_URI tenga las credenciales correctas');
    } else if (error.message.includes('ENOTFOUND') || error.message.includes('ETIMEDOUT')) {
      console.log('💡 Verifica que la URL del servidor MongoDB sea correcta');
    }
    
    console.log('');
    process.exit(1);
  } finally {
    await client.close();
  }
}

testMongoDB();

