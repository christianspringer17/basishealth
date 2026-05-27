"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "./ui";

/** Patient stories — structure mirrors basal.health; replace with verified quotes when available */
const testimonials = [
  {
    quote:
      "I was doing everything right — vitamins, hormones, water, workouts. None of it was working until I added the GLP-1. True domino effect. The benefits keep cascading.",
    name: "McKenna",
    role: "GLP–One patient",
  },
  {
    quote:
      "Surgeons said I needed double knee replacements at 51. A few months into microdosing, the inflammation cleared and I could walk with no pain. GLP-1s do more than we think.",
    name: "Lisa",
    role: "GLP–One patient",
  },
  {
    quote:
      "My father is 63 and bed-bound. I didn't want that to be my story. Six months into GLP-1 treatment I'm leaner, more active, and markers of pre-diabetes are gone.",
    name: "Adam",
    role: "GLP–One patient",
  },
  {
    quote:
      "Dieting since eight. Eating disorder at twenty. PCOS at thirty. I'd been crashing my metabolism for decades without knowing it. Now I want to help my body heal.",
    name: "Greta",
    role: "GLP–One patient",
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
          <h2 className="text-h1-lg text-grey-9">Customer review</h2>
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
            <p className="text-h5 text-grey-7">Customer review</p>
            <blockquote className="mt-4 text-h4 text-pretty text-grey-9">
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
