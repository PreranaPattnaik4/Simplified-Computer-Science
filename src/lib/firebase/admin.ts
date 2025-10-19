import admin from 'firebase-admin';

// Check if the app is already initialized to prevent errors on hot reloads
if (!admin.apps.length) {
  try {
    // In a Firebase or Google Cloud environment (like App Hosting),
    // GOOGLE_APPLICATION_CREDENTIALS will be set automatically.
    // For local development, you need to set up a service account.
    // 1. Go to Project Settings > Service accounts in Firebase console.
    // 2. Generate a new private key, which downloads a JSON file.
    // 3. Set environment variables in your .env.local file:
    //    FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
    //    FIREBASE_CLIENT_EMAIL="firebase-adminsdk-..."
    //    NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
    
    const serviceAccount = {
        projectId: process.env.GCLOUD_PROJECT || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace escaped newlines from environment variable
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    };

    if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } else if (process.env.NODE_ENV === 'production') {
        // Fallback to default credentials in a production GCP environment
        admin.initializeApp();
    } else {
        // In dev, if credentials are not set, we don't initialize.
        // This will cause errors downstream, but it prevents the app from crashing on start.
        console.warn('Firebase Admin SDK not initialized. Missing credentials.');
    }
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}

// Only export db if an app is initialized
let db;
if (admin.apps.length > 0) {
  db = admin.firestore();
} else {
  db = null;
}

export { db };
