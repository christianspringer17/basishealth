export type AnalyticsEventName =
  | "cta_click"
  | "waitlist_submit"
  | "waitlist_error"
  | "pricing_plan_click"
  | "checkout_start";

export type AnalyticsEventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      name: string,
      params?: Record<string, string | number | boolean | undefined>,
    ) => void;
    plausible?: (
      name: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

/** Fire a conversion/analytics event (no-op when no provider is configured). */
export function trackEvent(name: AnalyticsEventName, props?: AnalyticsEventProps) {
  if (typeof window === "undefined") return;

  const payload = props
    ? Object.fromEntries(
        Object.entries(props).filter(([, v]) => v !== undefined),
      )
    : undefined;

  try {
    window.plausible?.(name, payload ? { props: payload as Record<string, string> } : undefined);
  } catch {
    /* ignore */
  }

  try {
    window.gtag?.("event", name, payload);
  } catch {
    /* ignore */
  }
}
