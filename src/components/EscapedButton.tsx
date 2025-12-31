import { EscapedButtonProps } from "@/types";

export default function EscapedButton({
  isVisible,
  isFullyEscaped,
  position,
  text,
  onInteract,
}: EscapedButtonProps) {
  if (!isVisible) return null;

  return (
    <button
      className={`fixed bg-gray-200 hover:bg-gray-300 active:bg-gray-300 text-gray-700 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-300 ease-out z-50 whitespace-nowrap text-sm sm:text-base ${
        isFullyEscaped ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={onInteract}
      onTouchStart={onInteract}
      onClick={onInteract}
    >
      {text}
    </button>
  );
}
