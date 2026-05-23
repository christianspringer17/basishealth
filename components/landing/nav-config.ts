export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "protocols",
    label: "Protocols",
    href: "#protocols",
    dropdown: [
      {
        label: "Energy",
        href: "#protocols",
        description: "Sustainable daily energy support",
      },
      {
        label: "Metabolism",
        href: "#protocols",
        description: "Metabolic markers and habits",
      },
      {
        label: "Recovery",
        href: "#protocols",
        description: "Rest, repair, and resilience",
      },
      {
        label: "Sleep",
        href: "#protocols",
        description: "Sleep quality and rhythm",
      },
      {
        label: "Healthy aging",
        href: "#protocols",
        description: "Long-horizon vitality",
      },
      {
        label: "Performance",
        href: "#protocols",
        description: "Output and recovery balance",
      },
    ],
  },
  {
    id: "about",
    label: "About",
    href: "#how-it-works",
    dropdown: [
      {
        label: "How it works",
        href: "#how-it-works",
        description: "What to expect from Eonic",
      },
      {
        label: "Our approach",
        href: "#protocols",
        description: "Provider-guided protocols",
      },
      {
        label: "Privacy Policy",
        href: "/privacy",
      },
      {
        label: "Terms of Use",
        href: "/terms",
      },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    href: "#how-it-works",
    dropdown: [
      {
        label: "What to expect",
        href: "#how-it-works",
        description: "Your guided path",
      },
      {
        label: "Protocol areas",
        href: "#protocols",
        description: "Energy, sleep, aging & more",
      },
      {
        label: "Join the waitlist",
        href: "#waitlist",
        description: "Early access updates",
      },
    ],
  },
];
