"use client";
import { useState } from "react";
import BackgroundHearts from "@/components/BackgroundHearts";
import SubscriptionCard from "@/components/SubscriptionCard";
import EscapedButton from "@/components/EscapedButton";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import YouTubeBackgroundPlayer from "@/components/YouTubeBackgroundPlayer";

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
    <div className="min-h-screen p-2 sm:p-4 relative overflow-hidden">
      {/* YouTube Background Video */}
      <YouTubeBackgroundPlayer videoId="Mb_U9Egf4TU" />

      <SpotifyPlayer playlistId="6fmca7jyU1ljfQaiVXiQMP" />
      <BackgroundHearts />

      <div className="flex min-h-screen items-center justify-center relative z-10">
        <SubscriptionCard
          noButtonEscaped={noButtonEscaped}
          isButtonEscaping={isButtonEscaping}
          currentNoText={currentNoText}
          onNoButtonInteract={moveNoButton}
        />
      </div>

      <EscapedButton
        isVisible={isButtonEscaping}
        isFullyEscaped={noButtonEscaped}
        position={noButtonPosition}
        text={currentNoText}
        onInteract={moveNoButton}
      />
    </div>
  );
}
