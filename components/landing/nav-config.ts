import { NAV_IMAGES } from "@/lib/media";
import { ROUTES } from "@/lib/routes";
import { SITE_EMAIL } from "@/lib/site";

export { NAV_IMAGES };

export type NavLearnMenu = {
  variant: "learn";
  imageCards: NavImageCard[];
  links: { label: string; href: string }[];
  allTopics: { label: string; href: string };
};

export type NavImageCard = {
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  showPlayIcon?: boolean;
};

export type NavMenu = NavLearnMenu;

export type NavItem = {
  id: string;
  label: string;
  href: string;
  menu?: NavMenu;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "membership",
    label: "Membership",
    href: ROUTES.homeMembership,
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
  {
    id: "faq",
    label: "FAQ",
    href: ROUTES.homeFaq,
  },
];

export function getNavMenuLinks(
  menu: NavMenu,
): { label: string; href: string }[] {
  return [
    ...menu.imageCards.map((c) => ({ label: c.label, href: c.href })),
    ...menu.links,
    menu.allTopics,
  ];
}

/** Footer / secondary — About contact line */
export const NAV_CONTACT = {
  label: `Get in touch: ${SITE_EMAIL}`,
  href: ROUTES.contact,
} as const;
