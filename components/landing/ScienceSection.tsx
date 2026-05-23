"use client";

import Link from "next/link";
import { useState } from "react";
import { BasalButton } from "./ui";

const protocols = [
  {
    name: "Energy",
    description:
      "Protocols designed to support sustainable daily energy, informed by your goals and health context.",
  },
  {
    name: "Metabolism",
    description:
      "A structured approach to metabolic markers and habits, with provider oversight where appropriate.",
  },
  {
    name: "Recovery",
    description:
      "Guidance focused on rest, repair, and resilience—personalized rather than one-size-fits-all.",
  },
  {
    name: "Sleep",
    description:
      "Support for sleep quality and rhythm as part of a broader longevity-oriented plan.",
  },
  {
    name: "Healthy aging",
    description:
      "Long-horizon protocols designed to support vitality over time, not quick fixes.",
  },
  {
    name: "Performance",
    description:
      "For those balancing output and recovery—with protocols aligned to your baseline and goals.",
  },
];

export function ScienceSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="protocols" className="flex w-full flex-col gap-y-80 py-100">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-start gap-6 md:col-span-16 md:col-start-5 md:text-pretty">
          <h2 className="text-h1-lg max-w-[900px] text-pretty text-grey-7">
            <span className="text-grey-9">Longevity care should be coherent.</span>{" "}
            Not fragmented across supplements, labs, and advice.
          </h2>
          <p className="text-h3 max-w-[900px] text-grey-7">
            Eonic integrates your goals, biomarkers, and provider guidance into one
            evolving plan—designed to support clarity over noise.
          </p>
          <div className="pb-6 pt-2">
            <BasalButton href="#how-it-works" tone="grey">
              Learn more
            </BasalButton>
          </div>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
          <div className="flex min-h-[450px] flex-col items-center gap-6 overflow-hidden rounded-2xl bg-accent-1 py-10 text-accent-5 md:min-h-[600px] md:gap-10 md:py-14 md:px-horz">
            <h3 className="text-h3 leading-100 px-horz text-center md:px-0">
              Protocol areas
            </h3>

            <div className="hidden w-full flex-1 items-start justify-center gap-1 md:flex">
              {protocols.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="flex max-w-[210px] flex-1 flex-col items-center gap-4 px-2 py-6 text-center transition-opacity"
                  style={{ opacity: active === index ? 1 : 0.45 }}
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[var(--accent-2)] bg-white/60">
                    <span
                      className="rounded-full bg-[var(--accent-button)] transition-all"
                      style={{
                        width: active === index ? 12 : 8,
                        height: active === index ? 12 : 8,
                      }}
                    />
                  </div>
                  <p className="text-h3 leading-100 text-accent-5">{item.name}</p>
                </button>
              ))}
            </div>

            <div className="grid w-full flex-1 grid-cols-2 gap-3 px-horz md:hidden">
              {protocols.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="rounded-xl border border-[var(--accent-2)] bg-white/50 p-4 text-center"
                  style={{
                    opacity: active === index ? 1 : 0.6,
                  }}
                >
                  <p className="text-h5 text-accent-5">{item.name}</p>
                </button>
              ))}
            </div>

            <div className="max-w-[450px] px-horz text-center md:px-0">
              <p className="text-h4 text-pretty text-accent-5 transition-opacity duration-300">
                {protocols[active].description}
              </p>
              <Link
                href="#waitlist"
                className="mt-4 inline-block text-h5 text-accent-5 underline-offset-4 hover:underline"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
