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

    admin.initializeApp({
      credential: serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey 
        ? admin.credential.cert(serviceAccount) 
        : admin.credential.applicationDefault(), // Fallback to default credentials in GCP environment
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
    // If initialization fails, we might not want to proceed.
    // For now, we'll log the error and let the app crash on db access,
    // which is the current behavior.
  }
}

export const db = admin.firestore();
