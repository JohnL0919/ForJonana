"use client";

import { useEffect } from "react";
import { auth, getFirebaseError } from "@/lib/firebase";

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps) {
  useEffect(() => {
    // Check if Firebase initialization failed
    const firebaseError = getFirebaseError();
    if (firebaseError) {
      console.error("Firebase failed to initialize:", firebaseError);
      console.log("App will continue without Firebase features");
      return;
    }

    // Only initialize auth listener on client side when auth is available
    if (!auth) {
      console.log("Firebase auth not available (likely SSR or init failed)");
      return;
    }

    try {
      // Initialize Firebase auth state persistence
      const unsubscribe = auth.onAuthStateChanged((user) => {
        // You can add auth state logic here if needed
        if (user) {
          console.log("User is signed in:", user.uid);
        } else {
          console.log("User is signed out");
        }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    } catch (error) {
      console.error("Failed to set up auth listener:", error);
    }
  }, []);

  return <>{children}</>;
}
