import { LOADING_CONFIG } from "@/constants/loading";

export function LoadingIndicators() {
  return (
    <div className="mt-6 flex justify-center space-x-2">
      {Array.from({ length: LOADING_CONFIG.BOUNCE_DOT_COUNT }, (_, i) => (
        <div
          key={i}
          className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "0.6s",
          }}
        />
      ))}
    </div>
  );
}