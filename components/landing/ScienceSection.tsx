"use client";

import Link from "next/link";
import { useState } from "react";
import { BasalButton } from "./ui";

const markers = [
  {
    name: "Insulin sensitivity",
    description:
      "How effectively your cells respond to insulin affects energy stability, body composition, and long-term metabolic risk.",
  },
  {
    name: "Muscle mass",
    description:
      "Muscle is metabolic reserve—it influences glucose disposal, hormonal signaling, and functional capacity as you age.",
  },
  {
    name: "Hormonal response",
    description:
      "Cortisol, thyroid, and sex hormones interact with metabolism. Rhythm and proportion matter as much as single lab values.",
  },
  {
    name: "VO₂ max",
    description:
      "Cardiorespiratory fitness predicts mortality and metabolic flexibility better than many static labs alone.",
  },
  {
    name: "Body composition",
    description:
      "Where you store fat—and how much lean mass you retain—often matters more than scale weight for metabolic outcomes.",
  },
];

export function ScienceSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="protocols" className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-start gap-6 md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg max-w-[900px] text-pretty text-grey-9">
            The science has changed. Your care should, too.
          </h2>
          <p className="text-h3 max-w-[900px] text-pretty text-grey-7">
            Your metabolism isn&apos;t one thing. It&apos;s a conversation between
            systems. New research has given us five markers to tell us how well that
            conversation is flowing. Our metabolism-first approach integrates each
            signal into your care.
          </p>
          <div className="pb-6 pt-2">
            <BasalButton href="/learn/what-we-measure">Learn more</BasalButton>
          </div>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
          <div className="flex min-h-[480px] flex-col items-center overflow-hidden rounded-basal-2xl bg-accent-1 py-10 text-accent-5 md:min-h-[min(90svh,700px)] md:py-14 md:px-horz">
            <h3 className="text-h3 leading-100 px-horz text-center md:px-0">
              The Five Metabolic Markers
            </h3>

            <div className="mt-8 hidden w-full flex-1 items-start justify-center gap-0 md:flex">
              {markers.map((item, index) => (
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
                      className="relative h-3 w-3 rounded-full bg-[var(--accent-5)] transition-all duration-350"
                      style={{
                        transform: active === index ? "scale(1.25)" : "scale(1)",
                      }}
                    />
                  </div>
                  <p className="text-h3 leading-100 text-accent-5 text-center">{item.name}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 grid w-full grid-cols-2 gap-2 px-horz md:hidden">
              {markers.map((item, index) => (
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
                {markers[active].description}
              </p>
              <Link
                href="/learn/what-we-measure"
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
