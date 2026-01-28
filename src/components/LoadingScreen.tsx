"use client";
import { useEffect, useState } from "react";

const LOADING_MESSAGES = [
  "Updating morning matcha making algorithms... 🍵",
  "Processing your love subscription... 💕",
  "Calibrating heart emoji frequency... 💖",
  "Installing unlimited hugs package... 🫂",
  "Upgrading to premium cuddles... 🥰",
  "Syncing with the universe's love database... 🌟",
  "Generating infinite compliments... ✨",
  "Optimizing kiss delivery system... 💋",
  "Configuring 24/7 emotional support... 🛡️",
  "Activating soulmate mode... 👫",
  "Installing dishwashing protocols... 🧽",
  "Compiling flower delivery routes... 🌸",
  "Loading toothpaste squeezing automation... 🦷",
  "Finalizing gym partner compatibility... 💪",
  "Almost there... preparing for maximum love! 🚀",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");
  // Generate random values once when component is created
  const [heartAnimations] = useState(() =>
    [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    })),
  );

  useEffect(() => {
    // Progress bar animation - 10 second duration
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Small delay before calling onComplete
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 2 + 1; // Slower progress for 10-second duration
      });
    }, 200);

    // Message cycling - slower pace for readability
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) =>
        prev < LOADING_MESSAGES.length - 1 ? prev + 1 : prev,
      );
    }, 1500); // Show each message for 1 second for better readability

    // Dots animation
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-linear-to-br from-emerald-100 via-lime-50 to-green-100 flex items-center justify-center z-50">
      {/* Background animated hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {heartAnimations.map((heart, i) => (
          <div
            key={i}
            className="absolute text-emerald-300 animate-bounce opacity-20"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            💚
          </div>
        ))}
      </div>

      {/* Main loading card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md mx-4 text-center border border-white/50">
        {/* Loading spinner */}
        <div className="relative mb-6">
          <div className="w-20 h-20 mx-auto">
            <div className="w-full h-full border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">
              💚
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="bg-emerald-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-200 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600 font-medium">
            {Math.floor(Math.min(progress, 100))}% Complete
          </div>
        </div>

        {/* Loading message */}
        <div className="space-y-4">
          <div className="text-lg font-semibold text-gray-800 min-h-12 flex items-center justify-center">
            <span className="animate-fade-in">
              {LOADING_MESSAGES[currentMessage]}
              <span className="text-emerald-500 font-mono">{dots}</span>
            </span>
          </div>

          <div className="text-sm text-gray-500 italic">
            "Good things come to those who wait... and I am glad we waited for
            us"
          </div>
        </div>

        {/* Fun loading indicators */}
        <div className="mt-6 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "0.6s",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-4 right-4 text-4xl opacity-30 animate-pulse">
        ✨
      </div>
      <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-pulse">
        🌟
      </div>
    </div>
  );
}
