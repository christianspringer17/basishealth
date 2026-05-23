"use client";

import { useState } from "react";
import { cn, Section, SectionHeading } from "./ui";

const steps = [
  {
    title: "Share your goals and health context",
    description:
      "Tell us what you are working toward—energy, recovery, metabolism, sleep, or long-term vitality—and the context that matters for your care.",
    step: "01",
  },
  {
    title: "Complete intake and eligibility review",
    description:
      "A structured intake helps licensed providers understand whether Eonic Health is appropriate for you, based on eligibility and medical history.",
    step: "02",
  },
  {
    title: "Receive a personalized protocol",
    description:
      "Where medically appropriate, your protocol is personalized to your goals and health context—not a generic template.",
    step: "03",
  },
  {
    title: "Track progress and adjust over time",
    description:
      "Ongoing check-ins are designed to support thoughtful adjustments as your goals, biomarkers, and context evolve.",
    step: "04",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <Section id="how-it-works">
      <div className="site-container flex flex-col items-center gap-12 md:gap-20">
        <SectionHeading
          accent="How it works"
          title="A guided path from context to protocol."
        />

        <div className="w-full overflow-x-auto pb-4 md:overflow-visible md:pb-0">
          <div className="flex gap-5 md:grid md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "group min-w-[260px] shrink-0 flex-col rounded-2xl border p-6 text-left transition-all md:min-w-0",
                  active === index
                    ? "border-[#C75A2A]/30 bg-[#FFF7F0] shadow-[0_4px_24px_rgba(199,90,42,0.08)]"
                    : "border-[#e8e4df]/80 bg-white hover:border-[#C75A2A]/20",
                )}
              >
                <span className="mb-4 block text-xs font-medium tracking-wider text-[#C75A2A]">
                  {step.step}
                </span>
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#f7f5f2] to-[#F6C7A8]/20" />
                <h3 className="text-base font-medium leading-snug text-[#171717]">
                  {step.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-xl text-center">
          <p className="text-lg font-medium text-[#171717]">
            {steps[active].title}
          </p>
          <p className="mt-3 text-[#66615c] text-pretty">
            {steps[active].description}
          </p>
        </div>
      </div>
    </Section>
  );
}
