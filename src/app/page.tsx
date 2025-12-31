"use client";
import { useState } from "react";

export default function Home() {
  const [noButtonEscaped, setNoButtonEscaped] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonEscaping, setIsButtonEscaping] = useState(false);
  const [currentNoText, setCurrentNoText] = useState("No");

  const noButtonTexts = [
    "No",
    "Are you sure?",
    "whaaattt wrong button",
    "BLEHHHHHHH",
    "Please? 🥺",
    "拜托",
    "Pretty please?",
  ];

  const moveNoButton = () => {
    // Generate random position within viewport (responsive for mobile)
    const isMobile = window.innerWidth < 768;
    const buttonWidth = isMobile ? 160 : 200;
    const buttonHeight = isMobile ? 60 : 80;
    const margin = isMobile ? 10 : 20;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const minX = margin;
    const minY = margin;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    // Pick a random text from the array
    const randomIndex = Math.floor(Math.random() * noButtonTexts.length);
    const newText = noButtonTexts[randomIndex];

    setNoButtonPosition({ x: newX, y: newY });
    setCurrentNoText(newText);
    setIsButtonEscaping(true);

    // Small delay to allow the escaped button to fade in while original fades out
    setTimeout(() => {
      setNoButtonEscaped(true);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-lime-50 to-emerald-100 p-2 sm:p-4 relative overflow-hidden">
      {/* Decorative Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          {
            top: "top-20",
            left: "left-20",
            color: "text-lime-300",
            size: "text-2xl",
            delay: "",
          },
          {
            top: "top-40",
            right: "right-32",
            color: "text-emerald-400",
            size: "text-xl",
            delay: "",
          },
          {
            bottom: "bottom-32",
            left: "left-16",
            color: "text-lime-300",
            size: "text-lg",
            delay: "delay-1000",
          },
          {
            bottom: "bottom-20",
            right: "right-20",
            color: "text-emerald-400",
            size: "text-2xl",
            delay: "delay-500",
          },
          {
            top: "top-1/2",
            left: "left-8",
            color: "text-lime-300",
            size: "text-base",
            delay: "delay-700",
          },
          {
            top: "top-1/3",
            right: "right-8",
            color: "text-emerald-400",
            size: "text-lg",
            delay: "delay-300",
          },
          {
            top: "top-16",
            left: "left-1/2",
            color: "text-lime-300",
            size: "text-sm",
            delay: "delay-200",
          },
          {
            top: "top-60",
            left: "left-12",
            color: "text-emerald-400",
            size: "text-xs",
            delay: "delay-800",
          },
          {
            bottom: "bottom-40",
            right: "right-12",
            color: "text-lime-300",
            size: "text-sm",
            delay: "delay-400",
          },
          {
            top: "top-1/4",
            left: "left-20",
            color: "text-emerald-400",
            size: "text-lg",
            delay: "delay-1200",
          },
          {
            bottom: "bottom-1/3",
            right: "right-24",
            color: "text-lime-300",
            size: "text-xl",
            delay: "delay-600",
          },
          {
            top: "top-3/4",
            left: "left-1/3",
            color: "text-emerald-400",
            size: "text-base",
            delay: "delay-900",
          },
          {
            bottom: "bottom-16",
            left: "left-1/2",
            color: "text-lime-300",
            size: "text-xs",
            delay: "delay-1100",
          },
          {
            top: "top-32",
            right: "right-16",
            color: "text-emerald-400",
            size: "text-sm",
            delay: "delay-300",
          },
          {
            bottom: "bottom-60",
            left: "left-32",
            color: "text-lime-300",
            size: "text-lg",
            delay: "delay-800",
          },
          {
            top: "top-2/3",
            right: "right-1/3",
            color: "text-emerald-400",
            size: "text-base",
            delay: "delay-500",
          },
          {
            bottom: "bottom-24",
            right: "right-1/2",
            color: "text-lime-300",
            size: "text-sm",
            delay: "delay-1000",
          },
          {
            top: "top-48",
            left: "left-1/4",
            color: "text-emerald-400",
            size: "text-xs",
            delay: "delay-400",
          },
        ].map((heart, index) => (
          <div
            key={index}
            className={`absolute ${heart.top || heart.bottom} ${
              heart.left || heart.right
            } ${heart.color} ${heart.size} animate-bounce ${heart.delay}`}
          >
            🍌
          </div>
        ))}
      </div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-md w-full mx-2 sm:mx-4 border border-lime-200 transition-all duration-300 ease-in-out">
          {/* Top Heart Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">
              Relationship
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600">
              Subscription
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Your subscription is about to expire...
          </p>

          {/* Question */}
          <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Would you like to renew?
          </h3>

          {/* Features */}
          <p className="text-center text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
            Premium features include: unlimited hugs, daily laughs, and lifetime
            love
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base">
              Yes! 💕
            </button>
            {!noButtonEscaped && (
              <button
                className={`w-full bg-gray-200 hover:bg-gray-300 active:bg-gray-300 text-gray-700 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-300 text-sm sm:text-base ${
                  isButtonEscaping
                    ? "opacity-0 scale-95 pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
              >
                {currentNoText}
              </button>
            )}
          </div>

          {/* Escaped No Button */}
          {isButtonEscaping && (
            <button
              className={`fixed bg-gray-200 hover:bg-gray-300 active:bg-gray-300 text-gray-700 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-2xl transition-all duration-300 ease-out z-50 whitespace-nowrap text-sm sm:text-base ${
                noButtonEscaped ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
            >
              {currentNoText}
            </button>
          )}

          {/* Decorative corner hearts */}
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-emerald-400 text-lg sm:text-xl">
            🍌
          </div>
          <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 text-emerald-400 text-lg sm:text-xl">
            🍌
          </div>
        </div>
      </div>
    </div>
  );
}
