"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "./ui";

/** Experience-focused stories — no specific medical outcome claims */
const testimonials = [
  {
    quote:
      "The intake was straightforward and the team explained titration in plain language. I always knew what step came next.",
    name: "Jordan",
    role: "GLP–One member",
  },
  {
    quote:
      "Having check-ins built into the plan made this feel like care—not just a prescription shipped to my door.",
    name: "Priya",
    role: "GLP–One member",
  },
  {
    quote:
      "I chose the 3-month plan because I wanted time for my protocol to adapt. The upfront commitment kept me accountable.",
    name: "Marcus",
    role: "GLP–One member",
  },
  {
    quote:
      "The education pieces helped me understand why my dose changed. That clarity made the whole process less stressful.",
    name: "Elena",
    role: "GLP–One member",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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

  return (
    <section className="section-shell section-gap-md w-full overflow-hidden">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">Member stories</h2>
          <p className="text-body max-w-[520px] text-pretty text-grey-7">
            Individual experiences vary. Results depend on clinical eligibility, protocol
            adherence, and your care team&apos;s recommendations.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="carousel-track mt-10 w-full px-horz"
      >
        {testimonials.map((item) => (
          <article
            key={item.name}
            data-slide
            className="carousel-slide flex flex-col justify-between rounded-basal-2xl border border-[var(--grey-3)] bg-[var(--grey-1)] p-8"
          >
            <p className="text-h5 text-grey-7">Member story</p>
            <blockquote className="mt-4 text-body-lg text-pretty text-grey-9">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="mt-8">
              <p className="text-h5 text-grey-9">{item.name}</p>
              <p className="text-h5 text-grey-7">{item.role}</p>
            </footer>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to story ${index + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === index ? "w-8 bg-[var(--grey-9)]" : "w-1.5 bg-[var(--grey-3)]",
            )}
            onClick={() => {
              const slide = trackRef.current?.querySelector<HTMLElement>(
                `[data-slide]:nth-child(${index + 1})`,
              );
              slide?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
              });
            }}
          />
        ))}
      </div>
    </section>
  );
}
