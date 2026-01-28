"use client";
import { useLoadingState } from "@/hooks/useLoadingState";
import { BackgroundHearts } from "./LoadingScreen/BackgroundHearts";
import { LoadingCard } from "./LoadingScreen/LoadingCard";
import { CornerDecorations } from "./LoadingScreen/CornerDecorations";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const {
    progress,
    dots,
    heartAnimations,
    currentMessageText,
  } = useLoadingState(onComplete);

  return (
    <div className="fixed inset-0 bg-linear-to-br from-emerald-100 via-lime-50 to-green-100 flex items-center justify-center z-50">
      <BackgroundHearts heartAnimations={heartAnimations} />
      <LoadingCard 
        progress={progress} 
        currentMessage={currentMessageText}
        dots={dots}
      />
      <CornerDecorations />
    </div>
  );
}
