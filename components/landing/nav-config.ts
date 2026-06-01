import { NAV_IMAGES } from "@/lib/media";
import { CTA_LABELS } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import { SITE_EMAIL } from "@/lib/site";

export { NAV_IMAGES };

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

export type NavItem = {
  id: string;
  label: string;
  href: string;
  menu?: NavMenu;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "protocols",
    label: "GLP–One",
    href: ROUTES.glpOne,
    menu: {
      variant: "featured",
      image: NAV_IMAGES.protocolDropdown,
      imageAlt: "GLP-One tirzepatide vial",
      title: "Personalized protocols",
      description:
        "Provider-guided longevity and performance care tailored to your goals.",
      cta: { label: CTA_LABELS.viewPricing, href: ROUTES.glpOne },
    },
  },
  {
    id: "about",
    label: "About",
    href: ROUTES.about,
    menu: {
      variant: "about",
      cards: [
        {
          label: "About us",
          href: ROUTES.about,
          image: NAV_IMAGES.aboutHowItWorks,
          imageAlt: "Clinical GLP-1 vials in a care setting",
        },
        {
          label: "Unlock living",
          href: ROUTES.aboutVitality,
          image: NAV_IMAGES.aboutVitality,
          imageAlt: "Abstract premium wellness texture",
        },
      ],
      contactLabel: `Get in touch: ${SITE_EMAIL}`,
      contactHref: ROUTES.contact,
    },
  },
  {
    id: "learn",
    label: "Learn",
    href: ROUTES.learn,
    menu: {
      variant: "learn",
      imageCards: [
        {
          label: "Your protocol areas",
          href: ROUTES.learnProtocolAreas,
          image: NAV_IMAGES.learnProtocols,
          imageAlt: "Person overlooking the horizon at golden hour",
        },
        {
          label: "As unique as your goals",
          href: ROUTES.learnUniqueGoals,
          image: NAV_IMAGES.learnPersonalized,
          imageAlt: "Aerial view of open green fields",
        },
        {
          label: "What we measure",
          href: ROUTES.learnWhatWeMeasure,
          image: NAV_IMAGES.learnScience,
          imageAlt: "Parent and child in a warm everyday moment",
        },
      ],
      links: [
        { label: "What to expect", href: ROUTES.learnWhatToExpect },
        { label: "Meet your metabolism", href: ROUTES.learnFeatured },
        { label: "Our program", href: ROUTES.learnOurProgram },
      ],
      allTopics: { label: "All topics", href: ROUTES.learn },
    },
  },
];

export function getNavMenuLinks(
  menu: NavMenu,
): { label: string; href: string }[] {
  switch (menu.variant) {
    case "featured":
      return [
        { label: menu.title, href: ROUTES.glpOne },
        { label: menu.cta.label, href: menu.cta.href },
      ];
    case "about":
      return [
        ...menu.cards.map((c) => ({ label: c.label, href: c.href })),
        { label: "Contact", href: menu.contactHref },
      ];
    case "learn":
      return [
        ...menu.imageCards.map((c) => ({ label: c.label, href: c.href })),
        ...menu.links,
        menu.allTopics,
      ];
  }
}
