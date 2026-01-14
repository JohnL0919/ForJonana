"use client";

import { useEffect } from "react";
import { auth } from "@/lib/firebase";

interface FirebaseProviderProps {
  children: React.ReactNode;
}

export default function FirebaseProvider({ children }: FirebaseProviderProps) {
  useEffect(() => {
    // Initialize Firebase auth state persistence
    // This ensures auth state persists across page reloads
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
