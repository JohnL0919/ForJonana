interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="bg-emerald-100 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-200 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600 font-medium">
        {Math.floor(progress)}% Complete
      </div>
    </div>
  );
}