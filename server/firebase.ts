import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import config from '../firebase-applet-config.json';

let firestoreDb: ReturnType<typeof getFirestore> | null = null;

// Only attempt Firebase Admin initialization if credentials are explicitly configured in the environment
if (process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.FIREBASE_CONFIG) {
  try {
    if (!getApps().length) {
      initializeApp({
        projectId: config.projectId,
      });
    }
    
    // Use named database ID if available, otherwise default
    if (config.firestoreDatabaseId && config.firestoreDatabaseId !== '(default)') {
      firestoreDb = getFirestore(config.firestoreDatabaseId);
    } else {
      firestoreDb = getFirestore();
    }
  } catch (err) {
    // Silent fallback when running locally without GCP credentials
    firestoreDb = null;
  }
}

export { firestoreDb };

