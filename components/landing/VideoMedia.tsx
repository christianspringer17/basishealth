"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "./ui";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || failed) return;
    video.play().catch(() => {
      /* autoplay blocked — poster still visible */
    });
  }, [failed, ready]);

  const showVideo = !failed && videoSrc;

  return (
    <div className={cn("absolute inset-0", className)}>
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-cover transition-opacity duration-700",
          showVideo && ready ? "opacity-0" : "opacity-100",
        )}
        sizes="100vw"
      />
      {showVideo && (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
