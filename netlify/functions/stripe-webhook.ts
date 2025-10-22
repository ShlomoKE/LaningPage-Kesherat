import type { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { MongoClient } from 'mongodb';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia'
});

type DB = {
  init(): Promise<void>;
  alreadyProcessed(eventId: string): Promise<boolean>;
  markProcessed(eventId: string): Promise<void>;
  upsertUserByEmail(email: string, data: any): Promise<void>;
  updateByCustomerId(customerId: string, data: any): Promise<void>;
  close(): Promise<void>;
};

const normalizeStatus = (s: string) =>
  ({
    incomplete: 'incomplete',
    incomplete_expired: 'incomplete_expired',
    trialing: 'trialing',
    active: 'active',
    past_due: 'past_due',
    canceled: 'canceled',
    unpaid: 'unpaid',
    paused: 'paused'
  } as Record<string, string>)[s] || 'incomplete';

const toISO = (sec?: number | null) => (sec ? new Date(sec * 1000).toISOString() : null);

// MongoDB Driver
const mongoDriver = (): DB => {
  let client: MongoClient;
  let db: any;
  let users: any;
  let events: any;

  return {
    init: async () => {
      client = new MongoClient(process.env.MONGODB_URI!);
      await client.connect();
      db = client.db(process.env.MONGODB_DB!);
      users = db.collection('users');
      events = db.collection('stripe_events');
      
      // Create indexes
      await users.createIndex({ email: 1 }, { unique: true });
      await users.createIndex({ stripe_customer_id: 1 }, { unique: true, sparse: true });
      // Note: _id is already unique by default, no need to create index
    },
    
    alreadyProcessed: async (id) => {
      const found = await events.findOne({ _id: id });
      return !!found;
    },
    
    markProcessed: async (id) => {
      try {
        await events.insertOne({ _id: id, received_at: new Date() });
      } catch (err) {
        // Already exists, ignore
      }
    },
    
    upsertUserByEmail: async (email, data) => {
      await users.updateOne(
        { email: email.toLowerCase() },
        {
          $set: {
            email: email.toLowerCase(),
            stripe_customer_id: data.stripe_customer_id,
            subscription_status: data.subscription_status || 'incomplete',
            is_trialing: !!data.is_trialing,
            trial_start: data.trial_start ? new Date(data.trial_start) : null,
            trial_end: data.trial_end ? new Date(data.trial_end) : null,
            current_period_end: data.current_period_end ? new Date(data.current_period_end) : null,
            price_id: data.price_id || null,
            product_id: data.product_id || null,
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
            price_id: data.price_id || null,
            product_id: data.product_id || null,
            updated_at: new Date()
          }
        }
      );
    },
    
    close: async () => {
      if (client) {
        await client.close();
      }
    }
  };
};

// Main Handler
export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;
  
  if (!sig) {
    return { statusCode: 400, body: 'Missing stripe-signature header' };
  }

  let stripeEvent: Stripe.Event;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body!, sig, secret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return { 
      statusCode: 400, 
      body: `Webhook signature verification failed: ${err.message}` 
    };
  }

  const db = mongoDriver();

  try {
    await db.init();

    // Check if already processed (idempotency)
    if (await db.alreadyProcessed(stripeEvent.id)) {
      console.log(`Event ${stripeEvent.id} already processed`);
      await db.close();
      return { statusCode: 200, body: 'Already processed' };
    }

    console.log(`Processing event: ${stripeEvent.type} (${stripeEvent.id})`);

    // Handle different event types
    switch (stripeEvent.type) {
      case 'checkout.session.completed': {
        const session = stripeEvent.data.object as Stripe.Checkout.Session;
        const email = session.customer_details?.email || (session.metadata as any)?.app_user_email;
        const customerId = session.customer as string;
        
        if (email && customerId) {
          console.log(`Linking email ${email} to customer ${customerId}`);
          await db.upsertUserByEmail(email, {
            stripe_customer_id: customerId,
            subscription_status: 'incomplete',
            is_trialing: false
          });
        }
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = stripeEvent.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        
        const data = {
          subscription_status: normalizeStatus(subscription.status),
          is_trialing: subscription.status === 'trialing',
          trial_start: toISO((subscription as any).trial_start ?? null),
          trial_end: toISO((subscription as any).trial_end ?? null),
          current_period_end: toISO(subscription.current_period_end),
          price_id: subscription.items.data[0]?.price?.id || null,
          product_id: (subscription.items.data[0]?.price?.product as string) || null
        };
        
        console.log(`Updating subscription for customer ${customerId}:`, data);
        await db.updateByCustomerId(customerId, data);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = stripeEvent.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        
        console.log(`Payment failed for customer ${customerId}`);
        await db.updateByCustomerId(customerId, {
          subscription_status: 'past_due'
        });
        break;
      }

      case 'customer.updated': {
        const customer = stripeEvent.data.object as Stripe.Customer;
        const email = customer.email;
        
        if (email) {
          console.log(`Customer email updated: ${email}`);
          await db.upsertUserByEmail(email, {
            stripe_customer_id: customer.id
          });
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }

    // Mark event as processed
    await db.markProcessed(stripeEvent.id);
    await db.close();

    return { 
      statusCode: 200, 
      body: JSON.stringify({ received: true, eventId: stripeEvent.id }) 
    };

  } catch (err: any) {
    console.error('Error processing webhook:', err);
    await db.close();
    return { 
      statusCode: 500, 
      body: `Internal Error: ${err.message}` 
    };
  }
};

