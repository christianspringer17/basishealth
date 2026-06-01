"use client";

import { EXPECT_STEPS } from "@/lib/expect-steps";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExpectCarouselSlide } from "./ExpectCarouselSlide";
import { cn } from "./ui";

export function ExpectSection() {
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

  return (
    <section
      id="how-it-works"
      className="section-shell section-gap-lg w-full overflow-hidden"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-3 text-center md:col-span-16 md:col-start-5">
          <p className="text-h5 tracking-wide text-grey-7 uppercase">
            Your journey
          </p>
          <h2 className="text-h1-lg text-grey-9">What to expect</h2>
        </div>
      </div>

      <div
        ref={trackRef}
        className="carousel-track carousel-track--expect mt-12 w-full"
        aria-label="What to expect — step by step"
      >
        {EXPECT_STEPS.map((step, index) => (
          <div
            key={step.title}
            data-slide
            className={cn(
              "carousel-slide carousel-slide--expect",
              active === index && "is-active",
            )}
          >
            <ExpectCarouselSlide
              index={index}
              image={step.image}
              imageMobile={step.imageMobile}
              alt={step.alt}
              isActive={active === index}
            />
          </div>
        ))}
      </div>

      <div
        className="mt-10 flex items-center justify-center gap-2.5"
        role="tablist"
        aria-label="Steps"
      >
        {EXPECT_STEPS.map((step, index) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`${index + 1}. ${step.title}`}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500 ease-out",
              active === index
                ? "w-10 bg-[var(--grey-9)]"
                : "w-1.5 bg-[var(--grey-3)] hover:bg-[var(--grey-7)]",
            )}
          />
        ))}
      </div>

      <div className="site-container relative mt-12 min-h-[160px] w-full md:min-h-[140px]">
        {EXPECT_STEPS.map((step, index) => (
          <div
            key={step.title}
            className="mx-auto flex w-full max-w-[580px] flex-col items-center gap-3 px-horz text-center transition-opacity duration-500 ease-out"
            style={{
              opacity: active === index ? 1 : 0,
              position: active === index ? "relative" : "absolute",
              inset: active === index ? undefined : "0",
              pointerEvents: active === index ? "auto" : "none",
            }}
          >
            <p className="text-h5 tracking-wide text-grey-7">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-h4 font-semibold text-grey-9">{step.title}</p>
            <p className="text-body-lg text-pretty text-grey-7">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
