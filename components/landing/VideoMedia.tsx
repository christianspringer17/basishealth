"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MEDIA } from "@/lib/media";
import { cn } from "./ui";

const PLACEHOLDER = MEDIA.placeholder;

type VideoMediaProps = {
  poster: string;
  videoSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function VideoMedia({
  poster,
  videoSrc,
  alt,
  className,
  priority = false,
}: VideoMediaProps) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [posterSrc, setPosterSrc] = useState(poster || PLACEHOLDER);
  const videoRef = useRef<HTMLVideoElement>(null);

  const attemptPlay = () => {
    const video = videoRef.current;
    if (!video || failed) return;
    // Some browsers require the muted property set before play() for autoplay.
    video.muted = true;
    // Ensure the element has started fetching media.
    video.load();
    video.play().catch(() => {
      /* autoplay blocked — poster still visible */
    });
  };

  useEffect(() => {
    setPosterSrc(poster || PLACEHOLDER);
  }, [poster]);

  useEffect(() => {
    attemptPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [failed, videoSrc]);

  const showVideo = !failed && videoSrc;

  return (
    <div className={cn("absolute inset-0 bg-[var(--grey-2)]", className)}>
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover object-center transition-opacity duration-700",
          showVideo && ready ? "opacity-0" : "opacity-100",
        )}
        sizes="100vw"
        onError={() => {
          if (posterSrc !== PLACEHOLDER) setPosterSrc(PLACEHOLDER);
        }}
      />
      {showVideo && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // iOS Safari sometimes needs this explicit attribute.
          // eslint-disable-next-line react/no-unknown-property
          webkit-playsinline="true"
          poster={posterSrc}
          onLoadedMetadata={() => {
            setReady(true);
            attemptPlay();
          }}
          onCanPlay={() => {
            setReady(true);
            attemptPlay();
          }}
          onPlaying={() => setReady(true)}
          onError={() => setFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
