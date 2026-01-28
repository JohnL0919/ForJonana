interface LoadingMessageProps {
  message: string;
  dots: string;
}

export function LoadingMessage({ message, dots }: LoadingMessageProps) {
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold text-gray-800 min-h-12 flex items-center justify-center">
        <span className="animate-fade-in">
          {message}
          <span className="text-emerald-500 font-mono">{dots}</span>
        </span>
      </div>
      
      <div className="text-sm text-gray-500 italic">
        "Good things come to those who wait... and I am glad we waited for us"
      </div>
    </div>
  );
}