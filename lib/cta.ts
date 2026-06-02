import type { PlanId } from "@/lib/pricing";

/** Primary conversion — waitlist until MyDose checkout is live */
export const WAITLIST_HREF = "/#waitlist";

/** @deprecated Use WAITLIST_HREF — /signup redirects to waitlist */
export const SIGNUP_HREF = WAITLIST_HREF;

/** MyDose whitelabel checkout / intake URL when configured (else waitlist) */
export const CHECKOUT_HREF =
  process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim() || WAITLIST_HREF;

export const CTA_LABELS = {
  apply: "Apply",
  applyMembership: "Apply for Membership",
  startAssessment: "Start Your Assessment",
  getStarted: "Get started",
  learnMore: "Learn more",
  viewPricing: "View pricing",
  seeMembershipPlan: "See membership plan",
  startCheckout: "Start checkout",
} as const;

export function isCheckoutLive(): boolean {
  const url = process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim();
  return Boolean(url && url.startsWith("http"));
}

/** Nav + primary conversion before checkout is live */
export function primaryCtaLabel(): string {
  return isCheckoutLive() ? CTA_LABELS.getStarted : CTA_LABELS.applyMembership;
}

export function navCtaLabel(): string {
  return isCheckoutLive() ? CTA_LABELS.getStarted : CTA_LABELS.apply;
}

export function primaryCtaHref(): string {
  return isCheckoutLive() ? CHECKOUT_HREF : WAITLIST_HREF;
}

export function checkoutCtaLabel(): string {
  return isCheckoutLive() ? CTA_LABELS.startCheckout : CTA_LABELS.applyMembership;
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
  assessment: CTA_LABELS.startAssessment,
  assessmentShort: CTA_LABELS.startAssessment,
  getStarted: CTA_LABELS.getStarted,
  startAssessment: CTA_LABELS.startAssessment,
} as const;
