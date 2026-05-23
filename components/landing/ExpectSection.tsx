"use client";

import { useState } from "react";
import { MediaPanel } from "./ui";

const steps = [
  {
    title: "Share your goals and health context",
    body: "Tell us what you are working toward—energy, recovery, metabolism, sleep, or long-term vitality—and the context that matters for your care.",
  },
  {
    title: "Complete intake and eligibility review",
    body: "A structured intake helps licensed providers determine whether Eonic Health is appropriate for you, based on eligibility and medical history.",
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

  return (
    <section
      id="how-it-works"
      className="flex w-full flex-col items-center gap-y-32 overflow-hidden py-100"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h3 leading-100 text-accent-5">What to expect</h2>
        </div>
      </div>

      <div className="carousel-track w-full px-horz">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="carousel-slide flex flex-col gap-5 text-center"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <MediaPanel className="!aspect-[4/5] md:!aspect-video" />
          </div>
        ))}
      </div>

      <div className="site-container relative grid w-full place-items-start">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="col-span-full mx-auto flex w-full max-w-[550px] flex-col items-center gap-1 text-center transition-opacity duration-500"
            style={{
              opacity: active === index ? 1 : 0,
              position: active === index ? "relative" : "absolute",
              pointerEvents: active === index ? "auto" : "none",
            }}
          >
            <p className="text-h4 text-grey-9">{step.title}</p>
            <p className="text-body text-grey-7 text-pretty">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
