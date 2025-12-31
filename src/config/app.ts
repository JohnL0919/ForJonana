import { AppConfig } from "@/types";

export const APP_CONFIG: AppConfig = {
  youtubeVideoId: "Mb_U9Egf4TU",
  spotifyPlaylistId: "6fmca7jyU1ljfQaiVXiQMP",
  noButtonTexts: [
    "No",
    "Are you sure?",
    "whaaattt wrong button",
    "BLEHHHHHHH",
    "Please? 🥺",
    "拜托",
    "Pretty please?",
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
  "24/7 emotional support",
  "Daily laughs and inside jokes",
  "Lifetime love guarantee",
  "Free upgrade to soulmate status",
] as const;
