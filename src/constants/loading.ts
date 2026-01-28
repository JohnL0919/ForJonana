export const LOADING_MESSAGES = [
  "Updating morning matcha making algorithms 🍵",
  "Processing your love subscription 💕",
  "Calibrating heart emoji frequency 💖",
  "Installing unlimited hugs package 🫂",
  "Upgrading to premium cuddles 🥰",
  "Syncing with the universe's love database 🌟",
  "Generating infinite compliments ✨",
  "Optimizing kiss delivery system 💋",
  "Configuring 24/7 emotional support 🛡️",
  "Activating soulmate mode 👫",
  "Installing dishwashing protocols 🧽",
  "Compiling flower delivery routes 🌸",
  "Loading toothpaste squeezing automation 🦷",
  "Finalizing gym partner compatibility 💪",
  "Almost there... preparing for maximum love! 🚀",
];

export const LOADING_CONFIG = {
  PROGRESS_UPDATE_INTERVAL: 200,
  MESSAGE_DISPLAY_DURATION: 1500,
  DOTS_ANIMATION_INTERVAL: 300,
  COMPLETION_DELAY: 500,
  HEART_COUNT: 20,
  BOUNCE_DOT_COUNT: 3,
} as const;

export interface HeartAnimation {
  left: number;
  top: number;
  delay: number;
  duration: number;
}