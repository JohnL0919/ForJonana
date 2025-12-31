"use client";
import { useState } from "react";

interface SpotifyPlayerProps {
  playlistId?: string; // Spotify playlist ID
}

export default function SpotifyPlayer({ playlistId = "37i9dQZF1DX0XUsuxWHRQd" }: SpotifyPlayerProps) {
  const [isVisible, setIsVisible] = useState(false);

  const togglePlayer = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      {/* Toggle Button */}
      <button
        onClick={togglePlayer}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
        title="Toggle Spotify Player"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </button>

      {/* Spotify Embed Player */}
      {isVisible && (
        <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-green-600">Sundays With Youu 🌌</h3>
            <button
              onClick={togglePlayer}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>
          
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="300"
            height="200"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
