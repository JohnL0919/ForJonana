// Position coordinates for escaped button
export interface Position {
  x: number;
  y: number;
}

// No button state management
export interface NoButtonState {
  escaped: boolean;
  position: Position;
  isEscaping: boolean;
  currentText: string;
}

// App configuration
export interface AppConfig {
  youtubeVideoId: string;
  spotifyPlaylistId: string;
  noButtonTexts: string[];
  buttonDimensions: {
    mobile: { width: number; height: number };
    desktop: { width: number; height: number };
  };
  margins: {
    mobile: number;
    desktop: number;
  };
  mobileBreakpoint: number;
  escapeDelay: number;
}

// Component props interfaces
export interface SubscriptionCardProps {
  noButtonState: NoButtonState;
  onNoButtonInteract: () => void;
  onYesClick: () => void;
}

export interface ActionButtonsProps {
  noButtonState: NoButtonState;
  onNoButtonInteract: () => void;
  onYesClick: () => void;
}

export interface EscapedButtonProps {
  isVisible: boolean;
  isFullyEscaped: boolean;
  position: Position;
  text: string;
  onInteract: () => void;
}

export interface SubscriptionSuccessProps {
  onClose?: () => void;
}

export interface YouTubeBackgroundPlayerProps {
  videoId: string;
}

export interface SpotifyPlayerProps {
  playlistId?: string;
}
