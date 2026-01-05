import { AppConfig } from "@/types";

export const APP_CONFIG: AppConfig = {
  youtubeVideoId: "Mb_U9Egf4TU",
  spotifyPlaylistId: "6fmca7jyU1ljfQaiVXiQMP",
  relationshipStartDate: "2025-04-06T00:00:00", // Officially became boyfriend & girlfriend! 💕
  noButtonTexts: [
    "Not taking no for an answer",
    "我不要",
    "BLEHHHHHHH",
    "Please? 🥺",
    "拜托~",
    "為什麼~ 為什麼~ 為什麼~",
  ],
  buttonDimensions: {
    mobile: { width: 160, height: 60 },
    desktop: { width: 200, height: 80 },
  },
  margins: {
    mobile: 10,
    desktop: 20,
  },
  mobileBreakpoint: 768,
  escapeDelay: 150,
};

export const PREMIUM_BENEFITS = [
  "Unlimited hugs & kisses",
  "Unlimited words of affirmation",
  "24/7 emotional support",
  "Washing your dishes",
  "Buy you flowers and yummy food",
  "cook you yummy eggs",
  "Lifetime love guarantee",
  "Free upgrade to soulmate status (if you want)",
  "Make you matcha in the morning",
  "Be your gym partner",
  "Help you carry heavy things",
  "Wash your back for you",
  "Squeeze toothpaste for you",
] as const;
