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

  useEffect(() => {
    setPosterSrc(poster || PLACEHOLDER);
    setReady(false);
    setFailed(false);
  }, [poster, videoSrc]);

  const showVideo = !failed && Boolean(videoSrc);

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
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          onPlaying={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
