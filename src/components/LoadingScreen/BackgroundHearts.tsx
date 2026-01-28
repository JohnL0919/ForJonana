import type { HeartAnimation } from "@/constants/loading";

interface BackgroundHeartsProps {
  heartAnimations: HeartAnimation[];
}

export function BackgroundHearts({ heartAnimations }: BackgroundHeartsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {heartAnimations.map((heart, i) => (
        <div
          key={i}
          className="absolute text-emerald-300 animate-bounce opacity-20"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          💚
        </div>
      ))}
    </div>
  );
}