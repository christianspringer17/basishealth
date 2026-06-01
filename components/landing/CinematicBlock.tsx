"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MEDIA } from "@/lib/media";
import { cn } from "./ui";

const PLACEHOLDER = MEDIA.placeholder;

type CinematicBlockProps = {
  poster: string;
  videoSrc: string;
  alt: string;
  aspect?: "cinema" | "portrait";
  rounded?: "lg" | "2xl";
  showControls?: boolean;
  priority?: boolean;
};

export function CinematicBlock({
  poster,
  videoSrc,
  alt,
  aspect = "cinema",
  rounded = "2xl",
  showControls = false,
  priority = false,
}: CinematicBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(poster || PLACEHOLDER);

  const aspectClass =
    aspect === "portrait"
      ? "aspect-[0.75] md:aspect-[1.78]"
      : "aspect-[0.75] md:aspect-[16/9]";

  useEffect(() => {
    setPosterSrc(poster || PLACEHOLDER);
    setVideoReady(false);
    setVideoFailed(false);
    setPlaying(false);
  }, [poster, videoSrc]);

  const toggle = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        v.muted = true;
        await v.play();
        setPlaying(true);
        setVideoReady(true);
      } else {
        v.pause();
        setPlaying(false);
      }
    } catch {
      setPlaying(false);
    }
  };

  const showVideo = !videoFailed && Boolean(videoSrc);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[var(--grey-2)]",
        aspectClass,
        rounded === "2xl" ? "rounded-basal-2xl" : "rounded-basal-lg",
      )}
    >
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover transition-opacity duration-700",
          showVideo && videoReady ? "opacity-0" : "opacity-100",
        )}
        sizes="(max-width: 860px) 90vw, 70vw"
        onError={() => {
          if (posterSrc !== PLACEHOLDER) setPosterSrc(PLACEHOLDER);
        }}
      />
      {showVideo && (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          onPlaying={() => {
            setVideoReady(true);
            setPlaying(true);
          }}
          onPause={() => setPlaying(false)}
          onError={() => setVideoFailed(true)}
        />
      )}
      {showControls && (
        <div className="absolute bottom-10 left-1/2 z-[3] flex -translate-x-1/2 gap-3 md:bottom-12">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
          >
            {playing ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
