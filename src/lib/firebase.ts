import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only on client side and only once with error handling
let app;
let firebaseError = null;

if (typeof window !== "undefined" && !getApps().length) {
  try {
    // Validate required config before initializing
    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
      throw new Error("Missing required Firebase configuration");
    }
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    firebaseError = error;
    app = null;
  }
}

// Initialize Firebase services only if app initialized successfully
export const db =
  typeof window !== "undefined" && app ? getFirestore(app) : null;
export const auth = typeof window !== "undefined" && app ? getAuth(app) : null;
export const analytics =
  typeof window !== "undefined" && app ? getAnalytics(app) : null;

// Export error state for debugging
export const getFirebaseError = () => firebaseError;

export default app;
