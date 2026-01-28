import { useEffect, useState } from "react";
import { LOADING_MESSAGES, LOADING_CONFIG, type HeartAnimation } from "@/constants/loading";

export function useLoadingState(onComplete: () => void) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");
  
  // Generate random heart animation values once
  const [heartAnimations] = useState<HeartAnimation[]>(() =>
    Array.from({ length: LOADING_CONFIG.HEART_COUNT }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }))
  );

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, LOADING_CONFIG.COMPLETION_DELAY);
          return 100;
        }
        return prev + Math.random() * 2 + 1;
      });
    }, LOADING_CONFIG.PROGRESS_UPDATE_INTERVAL);

    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) =>
        prev < LOADING_MESSAGES.length - 1 ? prev + 1 : prev
      );
    }, LOADING_CONFIG.MESSAGE_DISPLAY_DURATION);

    // Dots animation
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, LOADING_CONFIG.DOTS_ANIMATION_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, [onComplete]);

  return {
    currentMessage,
    progress: Math.min(progress, 100),
    dots,
    heartAnimations,
    currentMessageText: LOADING_MESSAGES[currentMessage],
  };
}