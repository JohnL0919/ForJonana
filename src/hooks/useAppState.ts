import { useState, useCallback } from "react";

type AppState = "landing" | "loading" | "success";

export function useAppState() {
  const [appState, setAppState] = useState<AppState>("landing");

  const handleYesClick = useCallback(() => {
    setAppState("loading");
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setAppState("success");
  }, []);

  const handleBackToCard = useCallback(() => {
    setAppState("landing");
  }, []);

  return {
    appState,
    showLandingPage: appState === "landing",
    showLoadingScreen: appState === "loading",
    showSuccessPage: appState === "success",
    handleYesClick,
    handleLoadingComplete,
    handleBackToCard,
  };
}
