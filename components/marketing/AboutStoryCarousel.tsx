"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/components/landing/ui";

type AboutStoryCarouselProps = {
  images: { src: string; alt: string }[];
};

export function AboutStoryCarousel({ images }: AboutStoryCarouselProps) {
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
  }, [onScroll]);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelectorAll<HTMLElement>("[data-slide]")[index];
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(index);
  };

  if (images.length === 0) return null;

  return (
    <section className="about-story-carousel" aria-label="Editorial gallery">
      <div
        ref={trackRef}
        className="carousel-track carousel-track--about-story"
        aria-roledescription="carousel"
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            data-slide
            className={cn(
              "carousel-slide carousel-slide--about-story",
              active === index && "is-active",
            )}
          >
            <figure
              className="about-story-carousel__frame"
              aria-hidden={active !== index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="about-editorial-image"
                sizes="(max-width: 860px) 88vw, 800px"
                quality={90}
                priority={index === 0}
              />
            </figure>
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div
          className="about-story-carousel__dots"
          role="tablist"
          aria-label="Gallery slides"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Slide ${index + 1}: ${image.alt}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "about-story-carousel__dot",
                active === index && "is-active",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
