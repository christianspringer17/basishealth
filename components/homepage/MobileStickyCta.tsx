"use client";

import { useEffect, useState } from "react";
import { BasalButton, cn } from "@/components/landing/ui";
import { glpOneAssessmentHref, glpOneAssessmentLabel } from "@/lib/cta";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const href = glpOneAssessmentHref();
  const label = glpOneAssessmentLabel();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "homepage-sticky-cta md:hidden",
        visible && "homepage-sticky-cta--visible",
      )}
      aria-hidden={!visible}
    >
      <BasalButton
        href={href}
        className="homepage-sticky-cta__button"
        data-analytics-event="hero_cta_click"
        data-analytics-label="start_glp_one_assessment"
        data-analytics-location="homepage_sticky_cta"
        data-analytics-href={href}
      >
        {label}
      </BasalButton>
    </div>
  );
}
