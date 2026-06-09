"use client";

import { useEffect, useState } from "react";
import { findTreatmentHref, findTreatmentLabel } from "@/lib/cta";
import { EdenShellCta } from "./EdenShellCta";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h7M7.5 4.5 10 7l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EdenStickyCta() {
  const [visible, setVisible] = useState(false);
  const href = findTreatmentHref();
  const label = findTreatmentLabel();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const statement = document.getElementById("eden-glp-statement");
    if (!hero) return;

    let heroVisible = true;
    let statementVisible = false;

    const update = () => setVisible(!heroVisible && !statementVisible);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    const statementObserver = statement
      ? new IntersectionObserver(
          ([entry]) => {
            statementVisible = entry.isIntersecting;
            update();
          },
          { threshold: 0.15 },
        )
      : null;

    heroObserver.observe(hero);
    if (statement && statementObserver) statementObserver.observe(statement);

    return () => {
      heroObserver.disconnect();
      statementObserver?.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="eden-sticky-cta">
      <EdenShellCta
        label={label}
        href={href}
        className="eden-btn--secondary eden-sticky-cta__btn"
        analyticsLocation="eden_sticky"
        analyticsLabel="find_treatment"
      >
        <span className="eden-sticky-cta__label">{label}</span>
        <span className="eden-sticky-cta__arrow" aria-hidden>
          <ArrowIcon />
        </span>
      </EdenShellCta>
    </div>
  );
}
