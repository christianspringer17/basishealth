"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "./ui";

const testimonials = [
  {
    quote:
      "I was doing everything right — training, nutrition, sleep. None of it moved the needle until my protocol was adjusted with proper clinical oversight. The difference was having a plan that evolved with me.",
    name: "Sarah M.",
    role: "Athene Health member",
  },
  {
    quote:
      "What sold me was the focus on metabolic markers, not just weight. My energy stabilized within the first month of my 6-month plan, and I finally understood what my labs were telling me.",
    name: "James K.",
    role: "Athene Health member",
  },
  {
    quote:
      "The upfront subscription model made me commit in a good way. Knowing I had six months of provider check-ins kept me accountable without feeling like I was on my own.",
    name: "Elena R.",
    role: "Athene Health member",
  },
  {
    quote:
      "I appreciated that nobody rushed me into treatment. The eligibility review was thorough, and the education around GLP-1 therapy helped me feel like a participant—not a prescription.",
    name: "David T.",
    role: "Athene Health member",
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
          <h2 className="text-h1-lg text-grey-9">Trusted by patients like you</h2>
          <p className="text-h3 max-w-[560px] text-pretty text-grey-7">
            Real stories from people investing in long-term metabolic health with
            provider-guided care.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="carousel-track mt-8 w-full px-horz"
      >
        {testimonials.map((item) => (
          <article
            key={item.name}
            data-slide
            className="carousel-slide flex flex-col justify-between rounded-basal-2xl border border-[var(--grey-3)] bg-[var(--grey-1)] p-8"
          >
            <blockquote className="text-h4 text-pretty text-grey-9">
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
            aria-label={`Go to testimonial ${index + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              active === index
                ? "w-8 bg-[var(--grey-9)]"
                : "w-2 bg-[var(--grey-3)]",
            )}
            onClick={() => {
              const track = trackRef.current;
              const slide = track?.querySelector<HTMLElement>(
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

      <div className="site-container mt-12">
        <p className="text-center text-h5 text-grey-7">
          Licensed clinicians · HIPAA-compliant care · Transparent 3- & 6-month
          pricing
        </p>
      </div>
    </section>
  );
}
