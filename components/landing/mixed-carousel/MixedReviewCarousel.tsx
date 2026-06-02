"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  LIFE_UNLOCKED_CAROUSEL,
  type LifeUnlockedCarouselItem,
} from "@/lib/content/life-unlocked-carousel";
import { cn } from "@/components/landing/ui";
import { MediaCard } from "./MediaCard";
import { ReviewCard } from "./ReviewCard";

function CarouselCard({ item }: { item: LifeUnlockedCarouselItem }) {
  if (item.type === "review") {
    return <ReviewCard item={item} />;
  }

  return <MediaCard item={item} />;
}

export function MixedReviewCarousel({
  items = LIFE_UNLOCKED_CAROUSEL,
}: {
  items?: LifeUnlockedCarouselItem[];
}) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>("[data-slide]");
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - slideCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, [onScroll, items.length]);

  return (
    <div
      ref={trackRef}
      className="carousel-track carousel-track--life-unlocked mt-12 w-full"
      aria-label="Life Unlocked — member reviews and care moments"
    >
      {items.map((item, index) => (
        <div
          key={`${item.type}-${index}`}
          data-slide
          className={cn(
            "carousel-slide carousel-slide--life-unlocked",
            active === index && "is-active",
          )}
        >
          <CarouselCard item={item} />
        </div>
      ))}
    </div>
  );
}
