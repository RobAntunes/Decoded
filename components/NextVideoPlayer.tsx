"use client";

import { memo, useEffect, useRef, useState } from "react";
import Player from "next-video";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";

interface NextVideoProps {
  autoplay?: boolean;
  playbackId: string;
  className?: string;
}

// Simple spinner component
const VideoSkeleton = () => (
  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function NextVideo({ autoplay, playbackId, className }: NextVideoProps) {
  const videoRef = useRef<HTMLElement>(null);
  const playerRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sound, setSound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.muted = !sound;
    }
  }, [sound]);

  // Handle video loaded event
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <section
      ref={videoRef}
      className="relative"
    >
      {/* Content */}
      <div
        ref={containerRef}
        className={`${className}
          mx-auto max-w-7xl
          transition-transform duration-75 ease-linear rounded-xl will-change-transform relative
        `}
      >
        <div className="w-full h-full z-50 overflow-hidden rounded-xl relative shadow-3xl drop-shadow-2xl">
          {isLoading && <VideoSkeleton />}
          <SoundButton sound={sound} setSound={setSound} />
          <Player
            ref={playerRef}
            title="Next"
            playbackId={playbackId}
            autoPlay={autoplay}
            loop
            className="z-50"
            muted={!sound}
            controls={false}
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>
    </section>
  );
}

export const SoundButton = memo(({ sound, setSound }: { sound: boolean, setSound: (state: boolean) => void }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSound(!sound);
  };

  return (
    <div className="group absolute top-2 left-2 flex items-center">
      <div className="z-[9991] flex items-center relative hover:bg-white bg-white/20 backdrop-blur-xl rounded-full w-[72px] h-[72px] transition-all duration-300 ease-in-out group-hover:w-40">
        <button
          className="absolute left-[8px] p-4 bg-white/90 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center"
          onClick={handleClick}
        >
          <div className="transition-transform duration-300 ease-in-out">
            {sound ? <SpeakerHigh className="w-6 h-6" /> : <SpeakerSlash className="w-6 h-6" />}
          </div>
        </button>
        <span className="font-urbanist font-semibold self-center absolute left-20 text-black/80 opacity-0 transition-all duration-300 whitespace-nowrap group-hover:opacity-100">
          {!sound ? "Listen" : "Mute"}
        </span>
      </div>
    </div>
  );
});

SoundButton.displayName = 'SoundButton';