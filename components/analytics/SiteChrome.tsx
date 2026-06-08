"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";
function AnalyticsClickCapture() {
  useEffect(() => {
    captureAttribution();

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-analytics-event]");
      if (!el) return;

      const name = el.dataset.analyticsEvent;
      if (!name) return;

      trackEvent(name as AnalyticsEventName, {
        label: el.dataset.analyticsLabel,
        href: el.dataset.analyticsHref ?? el.getAttribute("href") ?? undefined,
        location: el.dataset.analyticsLocation,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnalyticsClickCapture />
      {children}
    </>
  );
}
