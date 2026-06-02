"use client";

import Link from "next/link";
import { useState } from "react";
import { BasalButton } from "@/components/landing/ui";
import { METABOLIC_MARKER_ICONS } from "./MetabolicMarkerIcons";

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
            <div className="flex pb-6 pt-4">
              <BasalButton href="/learn/what-we-measure" variant="secondary">
                Learn more
              </BasalButton>
            </div>
          )}
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
          <div className="metabolic-markers-panel">
            <h3 className="metabolic-markers-panel__title">The Five Metabolic Markers</h3>

            <div className="metabolic-markers-panel__grid">
              {METABOLIC_MARKERS.map((item, index) => {
                const Icon = METABOLIC_MARKER_ICONS[index];
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActive(index)}
                    className="metabolic-markers-panel__item"
                    style={{ opacity: active === index ? 1 : 0.35 }}
                    aria-pressed={active === index}
                  >
                    <Icon className="metabolic-markers-panel__icon" />
                    <p className="metabolic-markers-panel__label">{item.name}</p>
                  </button>
                );
              })}
            </div>

            <div className="metabolic-markers-panel__detail">
              <p className="metabolic-markers-panel__description">
                {METABOLIC_MARKERS[active].description}
              </p>
              <Link href="/learn/what-we-measure" className="metabolic-markers-panel__link">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
