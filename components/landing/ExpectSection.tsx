"use client";

import { MEDIA } from "@/lib/media";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn, MediaFrame } from "./ui";

const steps = [
  {
    title: "Eligibility screening & clinician review",
    body: "Your intake gives clinicians foundational data to determine whether GLP-1 therapy is appropriate. Clinician approval always prioritizes your health—not convenience.",
  },
  {
    title: "Personalized GLP-1 protocol",
    body: "No two protocols look the same. We work with you to select therapy appropriate for your goals and biology, with specific care given to starting dose and titration.",
  },
  {
    title: "Ongoing adaptive care",
    body: "We monitor progress and adjust dosage as needed. Regular check-ins fine-tune treatment so your protocol evolves with your body—not against it.",
  },
  {
    title: "Metabolic literacy",
    body: "GLP–One is more than a prescription. Education and personalized counseling help you understand your metabolism so you can participate actively in recovery.",
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
      className="section-shell section-gap-md w-full overflow-hidden"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">What to expect</h2>
        </div>
      </div>

      <div ref={trackRef} className="carousel-track mt-10 w-full px-horz">
        {steps.map((step, index) => (
          <div key={step.title} data-slide className="carousel-slide flex flex-col gap-5">
            <MediaFrame src={MEDIA.steps[index]} alt="" aspect="card" rounded="lg" />
          </div>
        ))}
      </div>

      <div
        className="mt-8 flex items-center justify-center gap-2"
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
              active === index ? "w-8 bg-[var(--grey-9)]" : "w-1.5 bg-[var(--grey-3)] hover:bg-[var(--grey-7)]",
            )}
          />
        ))}
      </div>

      <div className="site-container relative mt-10 min-h-[140px] w-full">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="mx-auto flex w-full max-w-[550px] flex-col items-center gap-2 px-horz text-center transition-opacity duration-500 ease-out"
            style={{
              opacity: active === index ? 1 : 0,
              position: active === index ? "relative" : "absolute",
              inset: active === index ? undefined : "0",
              pointerEvents: active === index ? "auto" : "none",
            }}
          >
            <p className="text-h4 text-grey-9">{step.title}</p>
            <p className="text-body-lg text-pretty text-grey-7">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
