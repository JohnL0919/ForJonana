"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Start at 30% volume
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      const handleEnded = () => setIsPlaying(false);
      audioRef.current.addEventListener('ended', handleEnded);
      
      return () => {
        audioRef.current?.removeEventListener('ended', handleEnded);
      };
    }
  }, [volume]);

  return (
    <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-emerald-200 z-40">
      <div className="flex items-center gap-3">
        {/* Song Info */}
        <div className="hidden sm:block">
          <p className="text-xs font-medium text-emerald-600">Now Playing</p>
          <p className="text-sm text-gray-700">Dancing with my phone</p>
          <p className="text-xs text-gray-500">HYBS</p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1zM14 4a1 1 0 011 1v10a1 1 0 01-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Volume Control */}
        <div className="hidden sm:flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.686 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.686l3.697-3.793z" clipRule="evenodd" />
            <path d="M12 6.586l2.293-2.293a1 1 0 011.414 1.414L13.414 8l2.293 2.293a1 1 0 01-1.414 1.414L12 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 8 8.293 5.707a1 1 0 011.414-1.414L12 6.586z" />
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
            }}
          />
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        preload="metadata"
        loop
      >
        <source src="/audio/dancing-with-my-phone.mp3" type="audio/mpeg" />
        <source src="/audio/dancing-with-my-phone.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
