import type { PlanId } from "@/lib/pricing";
import { ROUTES } from "@/lib/routes";

/** Primary conversion — waitlist until Fuse intake is live */
export const WAITLIST_HREF = "/#waitlist";

/** @deprecated Use WAITLIST_HREF */
export const SIGNUP_HREF = WAITLIST_HREF;

function fuseIntakeUrl(): string | undefined {
  const fuse = process.env.NEXT_PUBLIC_FUSE_INTAKE_URL?.trim();
  if (fuse?.startsWith("http")) return fuse;
  const legacy = process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim();
  if (legacy?.startsWith("http")) return legacy;
  return undefined;
}

/** Fuse intake when configured; otherwise waitlist anchor */
export const CHECKOUT_HREF = fuseIntakeUrl() ?? WAITLIST_HREF;

export const CTA_LABELS = {
  apply: "Start assessment",
  applyMembership: "Start assessment",
  startAssessment: "Start assessment",
  getEarlyAccess: "Get early access",
  getStarted: "Get started",
  learnMore: "Learn more",
  viewPricing: "View pricing",
  seeMembershipPlan: "View plans",
  seePlans: "View plans",
  startCheckout: "Start assessment",
} as const;

export function isIntakeLive(): boolean {
  return Boolean(fuseIntakeUrl());
}

/** @deprecated Use isIntakeLive */
export function isCheckoutLive(): boolean {
  return isIntakeLive();
}

export function primaryCtaLabel(): string {
  return CTA_LABELS.startAssessment;
}

export function navCtaLabel(): string {
  return "Account";
}

export function navCtaHref(): string {
  return ROUTES.account;
}

export function primaryCtaHref(): string {
  return isIntakeLive() ? CHECKOUT_HREF : WAITLIST_HREF;
}

export function checkoutCtaLabel(): string {
  return CTA_LABELS.startAssessment;
}

/** Append plan query param for Fuse intake deep links */
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
