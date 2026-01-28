// Shared UI Constants
export const CARD_STYLES = {
  borderRadius: "rounded-3xl",
  shadow: "shadow-2xl",
  background: "bg-white/80 backdrop-blur-lg",
  border: "border border-lime-200",
  transition: "transition-all duration-300 ease-in-out",
} as const;

export const EMERALD_THEME = {
  primary: "emerald-500",
  primaryHover: "emerald-600", 
  light: "emerald-100",
  text: "emerald-600",
  border: "lime-200",
} as const;

export const ANIMATION_DURATIONS = {
  fast: "duration-200",
  normal: "duration-300",
  slow: "duration-500",
} as const;

export const SPACING = {
  cardPadding: "p-6 sm:p-8 md:p-12",
  containerMargin: "mx-2 sm:mx-4",
} as const;