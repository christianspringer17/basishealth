import type { PlanId } from "@/lib/pricing";

/** Primary conversion — waitlist until MyDose checkout is live */
export const WAITLIST_HREF = "/#waitlist";

/** @deprecated Use WAITLIST_HREF — /signup redirects to waitlist */
export const SIGNUP_HREF = WAITLIST_HREF;

/** MyDose whitelabel checkout / intake URL when configured (else waitlist) */
export const CHECKOUT_HREF =
  process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim() || WAITLIST_HREF;

export const CTA_LABELS = {
  waitlist: "Join waitlist",
  getStarted: "Get started",
  learnMore: "Learn more",
  viewPricing: "View pricing",
  startCheckout: "Start checkout",
} as const;

export function isCheckoutLive(): boolean {
  const url = process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim();
  return Boolean(url && url.startsWith("http"));
}

/** Pre-MyDose: Join waitlist. Post-MyDose: Get started → checkout */
export function primaryCtaLabel(): string {
  return isCheckoutLive() ? CTA_LABELS.getStarted : CTA_LABELS.waitlist;
}

export function primaryCtaHref(): string {
  return isCheckoutLive() ? CHECKOUT_HREF : WAITLIST_HREF;
}

export function checkoutCtaLabel(): string {
  return isCheckoutLive() ? CTA_LABELS.startCheckout : CTA_LABELS.waitlist;
}

/** Append plan query param for MyDose checkout deep links */
export function checkoutUrlForPlan(
  plan: PlanId,
  baseUrl: string = CHECKOUT_HREF,
): string {
  if (!baseUrl.startsWith("http")) return baseUrl;
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}plan=${plan}`;
}

/** @deprecated Use CTA_LABELS */
export const SIGNUP_LABELS = {
  assessment: CTA_LABELS.waitlist,
  assessmentShort: CTA_LABELS.waitlist,
  getStarted: CTA_LABELS.getStarted,
  startAssessment: CTA_LABELS.waitlist,
} as const;
