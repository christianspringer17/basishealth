"use client";

import { MEDIA } from "@/lib/media";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn, MediaFrame } from "./ui";

const steps = [
  {
    title: "Share your goals and health context",
    body: "Tell us what you are working toward—energy, recovery, metabolism, sleep, or long-term vitality—and the context that matters for your care.",
  },
  {
    title: "Complete intake and eligibility review",
    body: "A structured intake helps licensed providers determine whether Athene Health is appropriate for you, based on eligibility and medical history.",
  },
  {
    title: "Receive a personalized protocol",
    body: "Where medically appropriate, your protocol is personalized to your goals and health context—not a generic template.",
  },
  {
    title: "Track progress and adjust over time",
    body: "Ongoing check-ins are designed to support thoughtful adjustments as your goals, biomarkers, and context evolve.",
  },
];

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
      className="flex w-full flex-col items-center section-gap-md overflow-hidden section-shell w-full"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
          <h2 className="text-h3 leading-100 text-accent-5">What to expect</h2>
        </div>
      </div>

      <div ref={trackRef} className="carousel-track w-full px-horz">
        {steps.map((step, index) => (
          <div
            key={step.title}
            data-slide
            className="carousel-slide flex flex-col gap-5"
          >
            <MediaFrame
              src={MEDIA.steps[index]}
              alt=""
              aspect="card"
              rounded="lg"
            />
          </div>
        ))}
      </div>

      <div
        className="flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Steps"
      >
        {steps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={step.title}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === index
                ? "w-8 bg-[var(--accent-button)]"
                : "w-1.5 bg-[var(--grey-3)] hover:bg-[var(--grey-7)]",
            )}
          />
        ))}
      </div>

      <div className="site-container relative min-h-[130px] w-full">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="mx-auto flex w-full max-w-[550px] flex-col items-center gap-1 px-horz text-center transition-opacity duration-500 ease-out"
            style={{
              opacity: active === index ? 1 : 0,
              position: active === index ? "relative" : "absolute",
              inset: active === index ? undefined : "0",
              pointerEvents: active === index ? "auto" : "none",
            }}
          >
            <p className="text-h4 text-grey-9">{step.title}</p>
            <p className="text-body-lg text-grey-7 text-pretty">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
