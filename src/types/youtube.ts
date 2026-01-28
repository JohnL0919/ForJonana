// YouTube API Types
export interface YTPlayerVars {
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

export interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}

export interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  unMute(): void;
  mute(): void;
  setVolume(volume: number): void;
  getVolume(): number;
  destroy(): void;
}

export interface YTPlayerConstructor {
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
      };
    }
  ): YTPlayer;
}

export interface YouTubeWindow extends Window {
  YT?: {
    Player: YTPlayerConstructor;
    PlayerState: {
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
    loaded: number;
  };
  onYouTubeIframeAPIReady?: () => void;
}

export const YT_PLAYER_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;