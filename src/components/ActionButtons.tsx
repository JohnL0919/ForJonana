interface ActionButtonsProps {
  noButtonEscaped: boolean;
  isButtonEscaping: boolean;
  currentNoText: string;
  onNoButtonInteract: () => void;
  onYesClick: () => void;
}

export default function ActionButtons({
  noButtonEscaped,
  isButtonEscaping,
  currentNoText,
  onNoButtonInteract,
  onYesClick,
}: ActionButtonsProps) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onYesClick}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base"
      >
        Yes! 💕
      </button>
      {!noButtonEscaped && (
        <button
          className={`w-full bg-gray-200 hover:bg-gray-300 active:bg-gray-300 text-gray-700 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-300 text-sm sm:text-base ${
            isButtonEscaping
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
          onMouseEnter={onNoButtonInteract}
          onTouchStart={onNoButtonInteract}
          onClick={onNoButtonInteract}
        >
          {currentNoText}
        </button>
      )}
    </div>
  );
}
