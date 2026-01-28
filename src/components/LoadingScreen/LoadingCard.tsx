import { LoadingSpinner } from "./LoadingSpinner";
import { ProgressBar } from "./ProgressBar";
import { LoadingMessage } from "./LoadingMessage";
import { LoadingIndicators } from "./LoadingIndicators";

interface LoadingCardProps {
  progress: number;
  currentMessage: string;
  dots: string;
}

export function LoadingCard({ progress, currentMessage, dots }: LoadingCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md mx-4 text-center border border-white/50">
      <LoadingSpinner />
      <ProgressBar progress={progress} />
      <LoadingMessage message={currentMessage} dots={dots} />
      <LoadingIndicators />
    </div>
  );
}