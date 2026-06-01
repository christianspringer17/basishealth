import type { PlanId } from "@/lib/pricing";
import { isGhlFormEnabled } from "@/lib/ghl";

/** Native waitlist / application section — default until MyDose or GHL replaces the form UI */
export const WAITLIST_HREF = "/#waitlist";

/** @deprecated Use WAITLIST_HREF — /signup redirects to waitlist */
export const SIGNUP_HREF = WAITLIST_HREF;

export const CTA_LABELS = {
  applyMembership: "Apply for Membership",
  startAssessment: "Start Your Assessment",
  /** @deprecated Use applyMembership */
  waitlist: "Apply for Membership",
  getStarted: "Get started",
  learnMore: "Learn more",
  viewPricing: "View pricing",
  startCheckout: "Start checkout",
  exploreMetabolic: "Explore Basis Metabolic",
} as const;

function mydoseCheckoutUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim();
  return url?.startsWith("http") ? url : undefined;
}

export function isCheckoutLive(): boolean {
  return Boolean(mydoseCheckoutUrl());
}

/**
 * Application destination priority:
 * 1. MyDose checkout/intake (when live)
 * 2. Native waitlist section (GHL embed renders there when configured)
 */
export function applicationHref(): string {
  return mydoseCheckoutUrl() ?? WAITLIST_HREF;
}

/** v2: assessment CTA uses the same flow until MyDose intake is live */
export function assessmentHref(): string {
  return applicationHref();
}

export function primaryCtaLabel(): string {
  return isCheckoutLive()
    ? CTA_LABELS.getStarted
    : CTA_LABELS.applyMembership;
}

export function primaryCtaHref(): string {
  return applicationHref();
}

export function secondaryCtaLabel(): string {
  return CTA_LABELS.startAssessment;
}

export function secondaryCtaHref(): string {
  return assessmentHref();
}

/** MyDose whitelabel checkout — used for GLP plan deep links when live */
export const CHECKOUT_HREF = applicationHref();

export function checkoutCtaLabel(): string {
  return isCheckoutLive() ? CTA_LABELS.startCheckout : CTA_LABELS.applyMembership;
}

/** True when GHL iframe replaces the built-in waitlist form (href unchanged) */
export function isGhlApplicationFlow(): boolean {
  return isGhlFormEnabled();
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
  assessment: CTA_LABELS.applyMembership,
  assessmentShort: CTA_LABELS.startAssessment,
  getStarted: CTA_LABELS.getStarted,
  startAssessment: CTA_LABELS.startAssessment,
} as const;
