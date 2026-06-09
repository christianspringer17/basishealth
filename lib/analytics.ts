export type AnalyticsEventName =
  | "cta_click"
  | "waitlist_submit"
  | "waitlist_error"
  | "pricing_plan_click"
  | "pricing_term_select"
  | "checkout_start"
  | "hero_cta_click"
  | "secondary_cta_click"
  | "protocol_card_click"
  | "faq_expand"
  | "homepage_to_glp_one_click"
  | "assessment_start"
  | "sticky_cta_click"
  | "eden_weight_cta"
  | "eden_weight_interact"
  | "eden_experience_goal"
  | "eden_how_step";

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
