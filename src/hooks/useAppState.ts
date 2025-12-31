import { useState, useCallback } from "react";

export function useAppState() {
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const handleYesClick = useCallback(() => {
    setShowSuccessPage(true);
  }, []);

  const handleBackToCard = useCallback(() => {
    setShowSuccessPage(false);
  }, []);

  return {
    showSuccessPage,
    handleYesClick,
    handleBackToCard,
  };
}
