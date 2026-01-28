"use client";
import BackgroundHearts from "@/components/BackgroundHearts";
import SubscriptionCard from "@/components/SubscriptionCard";
import SubscriptionSuccess from "@/components/SubscriptionSuccess";
import LoadingScreen from "@/components/LoadingScreen";
import EscapedButton from "@/components/EscapedButton";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import YouTubeBackgroundPlayer from "@/components/YouTubeBackgroundPlayer";
import { useNoButtonEscape } from "@/hooks/useNoButtonEscape";
import { useAppState } from "@/hooks/useAppState";
import { APP_CONFIG } from "@/config/app";

export default function Home() {
  const {
    state: noButtonState,
    escapeButton,
    resetState,
  } = useNoButtonEscape();
  const {
    showLandingPage,
    showLoadingScreen,
    showSuccessPage,
    handleYesClick,
    handleLoadingComplete,
    handleBackToCard,
  } = useAppState();

  const handleBackToCardWithReset = () => {
    handleBackToCard();
    resetState();
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 relative overflow-hidden">
      {/* YouTube Background Video */}
      <YouTubeBackgroundPlayer videoId={APP_CONFIG.youtubeVideoId} />

      <SpotifyPlayer playlistId={APP_CONFIG.spotifyPlaylistId} />
      <BackgroundHearts />

      {/* Show loading screen overlay when loading */}
      {showLoadingScreen && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <div className="flex min-h-screen items-center justify-center relative z-10">
        {showSuccessPage ? (
          <SubscriptionSuccess onClose={handleBackToCardWithReset} />
        ) : showLandingPage ? (
          <SubscriptionCard
            noButtonState={noButtonState}
            onNoButtonInteract={escapeButton}
            onYesClick={handleYesClick}
          />
        ) : null}
      </div>

      {showLandingPage && (
        <EscapedButton
          isVisible={noButtonState.isEscaping}
          isFullyEscaped={noButtonState.escaped}
          position={noButtonState.position}
          text={noButtonState.currentText}
          onInteract={escapeButton}
        />
      )}
    </div>
  );
}
