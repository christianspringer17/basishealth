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
  account: "Account",
  findTreatment: "Find your treatment",
} as const;

function patientPortalUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL?.trim();
  return url?.startsWith("http") ? url : undefined;
}

function findTreatmentUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_FIND_TREATMENT_URL?.trim();
  if (!url) return undefined;
  if (url.startsWith("http") || url.startsWith("/")) return url;
  return undefined;
}

/** Header — patient portal when NEXT_PUBLIC_PATIENT_PORTAL_URL is set */
export function navAccountHref(): string | undefined {
  return patientPortalUrl();
}

export function navAccountLabel(): string {
  return CTA_LABELS.account;
}

/** Sticky FAB — treatment finder when NEXT_PUBLIC_FIND_TREATMENT_URL is set */
export function findTreatmentHref(): string | undefined {
  return findTreatmentUrl();
}

export function findTreatmentLabel(): string {
  return CTA_LABELS.findTreatment;
}

export function isNavAccountLive(): boolean {
  return Boolean(navAccountHref());
}

export function isFindTreatmentLive(): boolean {
  return Boolean(findTreatmentHref());
}

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
