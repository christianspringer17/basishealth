export const NAV_IMAGES = {
  protocolProduct: "/images/nav/protocol-product.png",
  aboutHowItWorks: "/images/nav/nav-about.jpg",
  aboutVitality: "/images/nav/nav-unlock.jpg",
  learnProtocols: "/images/nav/nav-learn-metabolism.jpg",
  learnPersonalized: "/images/nav/nav-learn-fingerprint.jpg",
  learnScience: "/images/nav/nav-learn-markers.jpg",
} as const;

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
    href: "#protocols",
    menu: {
      variant: "featured",
      image: NAV_IMAGES.protocolProduct,
      imageAlt: "Athene Health clinical protocol supplies",
      title: "Personalized protocols",
      description:
        "Provider-guided longevity and performance care tailored to your goals.",
      cta: { label: "Get started", href: "#waitlist" },
    },
  },
  {
    id: "about",
    label: "About",
    href: "#how-it-works",
    menu: {
      variant: "about",
      cards: [
        {
          label: "How it works",
          href: "#how-it-works",
          image: NAV_IMAGES.aboutHowItWorks,
          imageAlt: "Clinical consultation",
        },
        {
          label: "Built for vitality",
          href: "#program",
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
    href: "#protocols",
    menu: {
      variant: "learn",
      imageCards: [
        {
          label: "Your protocol areas",
          href: "#protocols",
          image: NAV_IMAGES.learnProtocols,
          imageAlt: "Personalized care",
        },
        {
          label: "As unique as your goals",
          href: "#how-it-works",
          image: NAV_IMAGES.learnPersonalized,
          imageAlt: "Individual health journey",
        },
        {
          label: "What we measure",
          href: "#protocols",
          image: NAV_IMAGES.learnScience,
          imageAlt: "Health markers and science",
        },
      ],
      links: [
        { label: "What to expect", href: "#how-it-works" },
        { label: "Protocol areas", href: "#protocols" },
        { label: "Our program", href: "#program" },
        { label: "Join the waitlist", href: "#waitlist" },
      ],
      allTopics: { label: "All topics", href: "#protocols" },
    },
  },
];

export function getNavMenuLinks(
  menu: NavMenu,
): { label: string; href: string }[] {
  switch (menu.variant) {
    case "featured":
      return [
        { label: menu.title, href: "#protocols" },
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
