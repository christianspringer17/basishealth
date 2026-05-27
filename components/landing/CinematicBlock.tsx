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
  const [playing, setPlaying] = useState(true);
  const [posterSrc, setPosterSrc] = useState(poster || PLACEHOLDER);

  const attemptPlay = () => {
    const v = videoRef.current;
    if (!v || videoFailed) return;
    v.muted = true;
    v.load();
    v.play().catch(() => setPlaying(false));
  };

  const aspectClass =
    aspect === "portrait"
      ? "aspect-[0.75] md:aspect-[1.78]"
      : "aspect-[0.75] md:aspect-[16/9]";

  useEffect(() => {
    setPosterSrc(poster || PLACEHOLDER);
  }, [poster]);

  useEffect(() => {
    attemptPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoFailed, videoSrc]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const showVideo = !videoFailed && videoSrc;

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
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // eslint-disable-next-line react/no-unknown-property
          webkit-playsinline="true"
          poster={posterSrc}
          onLoadedMetadata={() => {
            setVideoReady(true);
            attemptPlay();
          }}
          onCanPlay={() => {
            setVideoReady(true);
            attemptPlay();
          }}
          onError={() => setVideoFailed(true)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
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
