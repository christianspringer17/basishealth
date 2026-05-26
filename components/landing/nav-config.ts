import { NAV_IMAGES } from "@/lib/media";

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
    label: "Protocols",
    href: "/#protocols",
    menu: {
      variant: "featured",
      image: NAV_IMAGES.protocolProduct,
      imageAlt: "Athene Health GLP-One clinical protocol supplies",
      title: "Personalized protocols",
      description:
        "Provider-guided longevity and performance care tailored to your goals.",
      cta: { label: "Get started", href: "/#waitlist" },
    },
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    menu: {
      variant: "about",
      cards: [
        {
          label: "How it works",
          href: "/about/how-it-works",
          image: NAV_IMAGES.aboutHowItWorks,
          imageAlt: "Clinical consultation",
        },
        {
          label: "Built for vitality",
          href: "/about/vitality",
          image: NAV_IMAGES.aboutVitality,
          imageAlt: "Long-term wellness",
          showPlayIcon: true,
        },
      ],
      contactLabel: "Get in touch: hello@athenehealth.com",
      contactHref: "mailto:hello@athenehealth.com",
    },
  },
  {
    id: "learn",
    label: "Learn",
    href: "/learn",
    menu: {
      variant: "learn",
      imageCards: [
        {
          label: "Your protocol areas",
          href: "/learn/protocol-areas",
          image: NAV_IMAGES.learnProtocols,
          imageAlt: "Personalized care",
        },
        {
          label: "As unique as your goals",
          href: "/learn/as-unique-as-your-goals",
          image: NAV_IMAGES.learnPersonalized,
          imageAlt: "Individual health journey",
        },
        {
          label: "What we measure",
          href: "/learn/what-we-measure",
          image: NAV_IMAGES.learnScience,
          imageAlt: "Health markers and science",
        },
      ],
      links: [
        { label: "What to expect", href: "/learn/what-to-expect" },
        { label: "Protocol areas", href: "/learn/protocol-areas" },
        { label: "Our program", href: "/learn/our-program" },
        { label: "Join the waitlist", href: "/#waitlist" },
      ],
      allTopics: { label: "All topics", href: "/learn" },
    },
  },
];

export function getNavMenuLinks(
  menu: NavMenu,
): { label: string; href: string }[] {
  switch (menu.variant) {
    case "featured":
      return [
        { label: menu.title, href: "/#protocols" },
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
