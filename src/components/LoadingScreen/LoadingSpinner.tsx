export function LoadingSpinner() {
  return (
    <div className="relative mb-6">
      <div className="w-20 h-20 mx-auto">
        <div className="w-full h-full border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">
          💚
        </div>
      </div>
    </div>
  );
}