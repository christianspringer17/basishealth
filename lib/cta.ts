import { ROUTES } from "@/lib/routes";

function fuseIntakeUrl(): string | undefined {
  const fuse = process.env.NEXT_PUBLIC_FUSE_INTAKE_URL?.trim();
  if (fuse?.startsWith("http")) return fuse;
  const legacy = process.env.NEXT_PUBLIC_MYDOSE_CHECKOUT_URL?.trim();
  if (legacy?.startsWith("http")) return legacy;
  return undefined;
}

/** Fuse intake when configured; otherwise the pricing page */
export const CHECKOUT_HREF = fuseIntakeUrl() ?? ROUTES.pricing;

export const CTA_LABELS = {
  startGlpOneAssessment: "Start GLP-One assessment",
  startAssessment: "Start assessment",
  getStarted: "Get started",
  learnMore: "Learn more",
  viewPricing: "View pricing",
} as const;

export function isIntakeLive(): boolean {
  return Boolean(fuseIntakeUrl());
}

export function primaryCtaLabel(): string {
  return CTA_LABELS.startAssessment;
}

/** Primary conversion — Fuse intake when live, pricing page otherwise */
export function primaryCtaHref(): string {
  return isIntakeLive() ? CHECKOUT_HREF : ROUTES.pricing;
}

/** Eden header / sticky CTA / pricing cards */
export function glpOneAssessmentHref(): string {
  return isIntakeLive() ? CHECKOUT_HREF : ROUTES.pricing;
}

export function glpOneAssessmentLabel(): string {
  return CTA_LABELS.startGlpOneAssessment;
}
