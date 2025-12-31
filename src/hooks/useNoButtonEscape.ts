import { useState, useCallback } from "react";
import { NoButtonState, Position } from "@/types";
import { APP_CONFIG } from "@/config/app";

const initialState: NoButtonState = {
  escaped: false,
  position: { x: 0, y: 0 },
  isEscaping: false,
  currentText: "No",
};

export function useNoButtonEscape() {
  const [state, setState] = useState<NoButtonState>(initialState);

  const generateRandomPosition = useCallback((): Position => {
    const isMobile = window.innerWidth < APP_CONFIG.mobileBreakpoint;
    const dimensions = isMobile 
      ? APP_CONFIG.buttonDimensions.mobile 
      : APP_CONFIG.buttonDimensions.desktop;
    const margin = isMobile 
      ? APP_CONFIG.margins.mobile 
      : APP_CONFIG.margins.desktop;

    const maxX = window.innerWidth - dimensions.width;
    const maxY = window.innerHeight - dimensions.height;
    const minX = margin;
    const minY = margin;

    return {
      x: Math.random() * (maxX - minX) + minX,
      y: Math.random() * (maxY - minY) + minY,
    };
  }, []);

  const getRandomText = useCallback((): string => {
    const randomIndex = Math.floor(Math.random() * APP_CONFIG.noButtonTexts.length);
    return APP_CONFIG.noButtonTexts[randomIndex];
  }, []);

  const escapeButton = useCallback(() => {
    const newPosition = generateRandomPosition();
    const newText = getRandomText();

    setState(prev => ({
      ...prev,
      position: newPosition,
      currentText: newText,
      isEscaping: true,
    }));

    // Small delay to allow the escaped button to fade in while original fades out
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        escaped: true,
      }));
    }, APP_CONFIG.escapeDelay);
  }, [generateRandomPosition, getRandomText]);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    escapeButton,
    resetState,
  };
}
