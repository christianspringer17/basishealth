"use client";

import { useEffect, useState } from "react";
import { glpOneAssessmentHref, glpOneAssessmentLabel } from "@/lib/cta";

export function EdenStickyCta() {
  const [visible, setVisible] = useState(false);
  const href = glpOneAssessmentHref();
  const label = glpOneAssessmentLabel();

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
      <a
        href={href}
        className="eden-btn eden-btn--primary eden-sticky-cta__btn"
        data-analytics-event="sticky_cta_click"
        data-analytics-label="eden_sticky"
        data-analytics-location="eden_sticky"
        data-analytics-href={href}
      >
        {label}
      </a>
    </div>
  );
}
