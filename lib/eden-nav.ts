import { ROUTES } from "@/lib/routes";

export type EdenNavItem = {
  label: string;
  href?: string;
};

export const EDEN_TREATMENTS_NAV: EdenNavItem[] = [
  { label: "Lean", href: ROUTES.treatmentsLean },
  { label: "Regulation", href: ROUTES.treatmentsRegulation },
  { label: "Vitality", href: ROUTES.treatmentsVitality },
  { label: "All treatments" },
];

export const EDEN_ABOUT_NAV: EdenNavItem[] = [
  { label: "How it works", href: ROUTES.homeHowItWorks },
  { label: "Company", href: ROUTES.about },
  { label: "Pricing", href: ROUTES.pricing },
  { label: "FAQ", href: ROUTES.homeFaq },
  { label: "Contact", href: ROUTES.contact },
];

export const EDEN_HEADER_MENUS = [
  { id: "treatments", label: "Treatments", items: EDEN_TREATMENTS_NAV },
  { id: "about", label: "About", items: EDEN_ABOUT_NAV },
] as const;
