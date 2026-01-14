"use client";
import { useEffect, useRef, useState } from "react";
import { YouTubeBackgroundPlayerProps } from "@/types";

// YouTube API Types
interface YTPlayerVars {
  autoplay?: number;
  controls?: number;
  disablekb?: number;
  enablejsapi?: number;
  fs?: number;
  iv_load_policy?: number;
  modestbranding?: number;
  playsinline?: number;
  rel?: number;
  showinfo?: number;
  start?: number;
  mute?: number;
  loop?: number;
  playlist?: string;
  origin?: string;
}

interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  unMute(): void;
  mute(): void;
  setVolume(volume: number): void;
  getVolume(): number;
  destroy(): void;
}

interface YTPlayerConstructor {
  new (
    elementId: HTMLElement,
    config: {
      height: string;
      width: string;
      videoId: string;
      playerVars: YTPlayerVars;
      events: {
        onReady?: (event: YTPlayerEvent) => void;
        onStateChange?: (event: YTPlayerEvent) => void;
        onError?: (event: YTPlayerEvent) => void;
      };
    }
  ): YTPlayer;
  PlayerState: {
    UNSTARTED: number;
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface YouTubeAPI {
  Player: YTPlayerConstructor;
  PlayerState: {
    UNSTARTED: number;
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: YouTubeAPI;
  }
}

export default function YouTubeBackgroundPlayer({
  videoId,
}: YouTubeBackgroundPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayerRef = useRef<YTPlayer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (window.YT) {
        initializePlayer();
        return;
      }

      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    };

    const initializePlayer = () => {
      if (!playerRef.current || !window.YT) return;

      try {
        ytPlayerRef.current = new window.YT.Player(playerRef.current, {
          height: "100%",
          width: "100%",
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            start: 0,
            mute: 0, // Start muted for better autoplay compatibility
            loop: 1,
            playlist: videoId, // Required for looping
            origin:
              typeof window !== "undefined"
                ? window.location.origin
                : undefined,
          },
          events: {
            onReady: (event: YTPlayerEvent) => {
              console.log("YouTube player ready");
              setIsLoading(false);
              setHasError(false);

              // Start playing immediately
              event.target.playVideo();

              // Try to unmute after a short delay
              setTimeout(() => {
                try {
                  event.target.unMute();
                  event.target.setVolume(30);
                  console.log("Video unmuted successfully");
                } catch {
                  console.log(
                    "Audio autoplay blocked, will require user interaction"
                  );
                }
              }, 1000);
            },
            onStateChange: (event: YTPlayerEvent) => {
              console.log("YouTube player state changed:", event.data);
              // Keep the video playing and looped
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
              // If paused, try to play again
              if (event.data === window.YT.PlayerState.PAUSED) {
                setTimeout(() => {
                  event.target.playVideo();
                }, 500);
              }
            },
            onError: (event: YTPlayerEvent) => {
              const errorMessages = {
                2: "Invalid video ID",
                5: "HTML5 player error",
                100: "Video not found or private",
                101: "Video owner doesn't allow embedding",
                150: "Video owner doesn't allow embedding",
              };
              const errorMsg =
                errorMessages[event.data as keyof typeof errorMessages] ||
                `Unknown error: ${event.data}`;
              console.error("YouTube player error:", errorMsg, event.data);
              setHasError(true);
              setIsLoading(false);
            },
          },
        });
      } catch (error) {
        console.error("Failed to initialize YouTube player:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadYouTubeAPI();

    return () => {
      // Cleanup YouTube player and API
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch (error) {
          console.log("Error destroying player:", error);
        }
        ytPlayerRef.current = null;
      }

      // Remove API callback to prevent conflicts on hot reload
      if (window.onYouTubeIframeAPIReady) {
        window.onYouTubeIframeAPIReady = () => {};
      }
    };
  }, [videoId]);

  return (
    <>
      {/* Background Video Layer */}
      <div
        className="fixed inset-0 w-screen h-screen overflow-hidden"
        style={{ zIndex: -1 }}
      >
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 bg-linear-to-br from-lime-50 to-emerald-100 flex items-center justify-center">
            <div className="text-emerald-600 font-medium">
              Loading background video...
            </div>
          </div>
        )}

        {/* Error state with fallback background */}
        {hasError && (
          <div className="absolute inset-0 bg-linear-to-br from-lime-50 to-emerald-100 flex items-center justify-center">
            <div className="text-red-500">
              Video unavailable - using fallback background
            </div>
          </div>
        )}

        {/* YouTube Player Container - Full Screen Background */}
        {!hasError && (
          <div className="absolute inset-0 w-full h-full bg-black">
            <div
              ref={playerRef}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "100vh",
                minWidth: "100%",
                minHeight: "100%",
                transform: "translate(-50%, -50%) scale(1.2)",
                transformOrigin: "center center",
              }}
            />
          </div>
        )}

        {/* Subtle overlay for content readability */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
      </div>

      {/* Floating Control Panel */}
      <div
        className="fixed bottom-4 right-4 z-50"
        style={{ pointerEvents: "auto" }}
      >
        <button
          onClick={() => {
            if (ytPlayerRef.current) {
              try {
                ytPlayerRef.current.unMute();
                ytPlayerRef.current.playVideo();
                ytPlayerRef.current.setVolume(30);
                console.log("Manually started video with audio");
              } catch (error) {
                console.log("Could not play video:", error);
              }
            }
          }}
          className="bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all shadow-lg border border-white/20"
        >
          🔊 Enable Audio
        </button>
      </div>
    </>
  );
}
