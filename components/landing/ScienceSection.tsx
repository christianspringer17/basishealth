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
    <section id="protocols" className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-start gap-6 md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg max-w-[900px] text-pretty text-grey-7">
            <span className="text-grey-9">Longevity care should be coherent.</span>
            <br />
            Not fragmented across supplements, labs, and advice.
          </h2>
          <p className="text-h3 max-w-[900px] text-pretty text-grey-7">
            Athene integrates your goals, biomarkers, and provider guidance into one
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
          <div className="flex min-h-[480px] flex-col items-center overflow-hidden rounded-basal-2xl bg-accent-1 py-10 text-accent-5 md:min-h-[min(90svh,700px)] md:py-14 md:px-horz">
            <h3 className="text-h3 leading-100 px-horz text-center md:px-0">
              Protocol areas
            </h3>

            <div className="mt-8 hidden w-full flex-1 items-start justify-center gap-0 md:flex">
              {protocols.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group flex max-w-[210px] flex-1 flex-col items-center gap-4 px-3 py-10 transition-opacity duration-350"
                  style={{ opacity: active === index ? 1 : 0.35 }}
                >
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--accent-2)] bg-white/70 transition-transform duration-350"
                      style={{
                        transform: active === index ? "scale(1)" : "scale(0.88)",
                      }}
                    />
                    <div
                      className="relative h-3 w-3 rounded-full bg-[var(--accent-button)] transition-all duration-350"
                      style={{
                        transform: active === index ? "scale(1.25)" : "scale(1)",
                      }}
                    />
                  </div>
                  <p className="text-h3 leading-100 text-accent-5">{item.name}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 grid w-full grid-cols-2 gap-2 px-horz md:hidden">
              {protocols.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="rounded-basal-lg border border-[var(--accent-2)] bg-white/60 px-3 py-4 text-h5 text-accent-5 transition-opacity"
                  style={{ opacity: active === index ? 1 : 0.5 }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-auto flex w-full max-w-[450px] flex-col items-center px-horz pt-10 text-center md:px-0 md:pt-0">
              <p className="text-h4 text-pretty text-accent-5 transition-opacity duration-300">
                {protocols[active].description}
              </p>
              <Link
                href="#waitlist"
                className="mt-5 text-h5 text-accent-5 underline-offset-4 transition-opacity hover:underline"
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
