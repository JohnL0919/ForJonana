"use client";

import { useEffect } from "react";
import { auth } from "@/lib/firebase";

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps) {
  useEffect(() => {
    // Only initialize auth listener on client side when auth is available
    if (!auth) {
      console.log("Firebase auth not available (likely SSR)");
      return;
    }

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
  }, []);

  return <>{children}</>;
}
