"use client";

import Link from "next/link";
import { useState } from "react";
import { BasalButton } from "@/components/landing/ui";

export const METABOLIC_MARKERS = [
  {
    name: "Insulin sensitivity",
    description:
      "How effectively your cells respond to insulin and absorb glucose from the bloodstream. Improving it supports stable energy levels, better metabolic health, and reduced risk of metabolic disorders.",
  },
  {
    name: "Muscle mass",
    description:
      "Muscle mass refers to the total amount of muscle tissue in your body. Increasing it improves strength, power output, metabolic rate, and long-term functional health.",
  },
  {
    name: "Hormonal response",
    description:
      "Your hormonal response is how your body releases and regulates hormones during and after exercise. Optimizing it supports muscle growth, recovery, energy balance, and overall metabolic health.",
  },
  {
    name: "VO₂ max",
    description:
      "Your VO₂ max indicates the maximum amount of oxygen your body can utilize during exercise. Improving it enhances endurance and overall fitness.",
  },
  {
    name: "Body composition",
    description:
      "Your body fat percentage represents the proportion of fat mass relative to total body weight. Maintaining a healthy range supports metabolic function, hormonal balance, and athletic performance.",
  },
] as const;

export function MetabolicMarkersSection({
  title = "GLP-One focuses on the markers that predict long-term health, not just short-term weight change.",
  showCta = true,
}: {
  title?: string;
  showCta?: boolean;
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg max-w-[900px] text-pretty text-grey-9">{title}</h2>
          {showCta && (
            <div className="pb-6 pt-4">
              <BasalButton href="/learn/what-we-measure">Learn more</BasalButton>
            </div>
          )}
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
          <div className="flex min-h-[480px] flex-col items-center overflow-hidden rounded-basal-2xl bg-[var(--grey-2)] py-10 text-grey-8 md:min-h-[min(90svh,700px)] md:py-14 md:px-horz">
            <h3 className="text-h3 leading-100 px-horz text-center md:px-0">
              The Five Metabolic Markers
            </h3>

            <div className="mt-8 hidden w-full flex-1 items-start justify-center gap-0 md:flex">
              {METABOLIC_MARKERS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group flex max-w-[210px] flex-1 flex-col items-center gap-4 px-3 py-10 transition-opacity duration-350"
                  style={{ opacity: active === index ? 1 : 0.35 }}
                >
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--grey-3)] bg-white/70 transition-transform duration-350"
                      style={{
                        transform: active === index ? "scale(1)" : "scale(0.88)",
                      }}
                    />
                    <div
                      className="relative h-3 w-3 rounded-full bg-[var(--grey-8)] transition-all duration-350"
                      style={{
                        transform: active === index ? "scale(1.25)" : "scale(1)",
                      }}
                    />
                  </div>
                  <p className="text-h3 leading-100 text-center text-primary">{item.name}</p>
                </button>
              ))}
            </div>

            <div className="mt-6 grid w-full grid-cols-2 gap-2 px-horz md:hidden">
              {METABOLIC_MARKERS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className="rounded-basal-lg border border-[var(--grey-3)] bg-white/60 px-3 py-4 text-body text-grey-8 transition-opacity"
                  style={{ opacity: active === index ? 1 : 0.5 }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-auto flex w-full max-w-[450px] flex-col items-center px-horz pt-10 text-center md:px-0 md:pt-0">
              <p className="text-body-lg text-pretty text-secondary transition-opacity duration-300">
                {METABOLIC_MARKERS[active].description}
              </p>
              <Link
                href="/learn/what-we-measure"
                className="mt-5 text-h5 text-grey-8 underline-offset-4 transition-opacity hover:underline"
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
