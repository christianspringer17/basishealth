import { PROTOCOL_NOTES_LABEL } from "@/lib/positioning";
import { ROUTES } from "@/lib/routes";

/** v2 lean nav — anchor links + Protocol Notes + FAQ */
export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "how-it-works", label: "How It Works", href: ROUTES.homeHowItWorks },
  { id: "protocols", label: "Protocols", href: ROUTES.homeProtocols },
  { id: "membership", label: "Membership", href: ROUTES.homeMembership },
  { id: "diagnostics", label: "Diagnostics", href: ROUTES.homeDiagnostics },
  { id: "protocol-notes", label: PROTOCOL_NOTES_LABEL, href: ROUTES.learn },
  { id: "faq", label: "FAQ", href: ROUTES.faq },
];

/** Legacy dropdown types — used by NavDropdown (v1 components, unused in v2 header) */
export type NavFeaturedMenu = {
  variant: "featured";
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export type NavImageCard = {
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  showPlayIcon?: boolean;
};

export type NavAboutMenu = {
  variant: "about";
  cards: NavImageCard[];
  contactLabel: string;
  contactHref: string;
};

export type NavLearnMenu = {
  variant: "learn";
  imageCards: NavImageCard[];
  links: { label: string; href: string }[];
  allTopics: { label: string; href: string };
};

export type NavMenu = NavFeaturedMenu | NavAboutMenu | NavLearnMenu;
