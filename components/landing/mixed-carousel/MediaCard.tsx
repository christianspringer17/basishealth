"use client";

import Image from "next/image";
import { VideoMedia } from "@/components/landing/VideoMedia";
import type { LifeUnlockedMediaItem } from "@/lib/content/life-unlocked-carousel";

const playIcon = (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
    <path d="M8 5.14v13.72L19 12 8 5.14z" />
  </svg>
);

export function MediaCard({ item }: { item: LifeUnlockedMediaItem }) {
  const isVideo = item.mediaType === "video";

  return (
    <article className="life-unlocked-card life-unlocked-card--media">
      <div className="life-unlocked-media__frame">
        {isVideo ? (
          <VideoMedia
            poster={item.poster ?? item.src}
            videoSrc={item.src}
            alt={item.alt}
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 860px) 78vw, 360px"
          />
        )}
        <span className="life-unlocked-media__scrim" aria-hidden />
        <p className="life-unlocked-media__overlay">{item.overlay}</p>
        {isVideo && (
          <span className="life-unlocked-media__play" aria-hidden>
            {playIcon}
          </span>
        )}
      </div>
    </article>
  );
}
