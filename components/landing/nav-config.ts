import { ROUTES } from "@/lib/routes";
import { SITE_EMAIL } from "@/lib/site";

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "glp-one",
    label: "GLP-One",
    href: ROUTES.glpOne,
  },
  {
    id: "how-it-works",
    label: "How it works",
    href: ROUTES.homeHowItWorks,
  },
  {
    id: "our-approach",
    label: "Our Approach",
    href: ROUTES.ourApproach,
  },
  {
    id: "faq",
    label: "FAQ",
    href: ROUTES.glpOneFaq,
  },
];

/** Footer / secondary — About contact line */
export const NAV_CONTACT = {
  label: `Get in touch: ${SITE_EMAIL}`,
  href: ROUTES.contact,
} as const;

/** @deprecated Flat nav in 1.5 — kept for NavDropdown.tsx compile */
export type NavImageCard = {
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  showPlayIcon?: boolean;
};

/** @deprecated Flat nav in 1.5 — kept for NavDropdown.tsx compile */
export type NavMenu =
  | {
      variant: "learn";
      imageCards: NavImageCard[];
      links: { label: string; href: string }[];
      allTopics: { label: string; href: string };
    }
  | { variant: "about"; imageCards: NavImageCard[] }
  | {
      variant: "membership";
      featured: NavImageCard;
      links: { label: string; href: string }[];
    }
  | {
      variant: "featured";
      image: string;
      imageAlt: string;
      title: string;
      description: string;
      cta: { label: string; href: string };
      links: { label: string; href: string }[];
    };
