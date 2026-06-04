import { EDITORIAL_IMAGES } from "@/lib/media";

/** PLACEHOLDER — update prices before launch (Fuse catalog) */
export const PROTOCOL_PLAN_PRICES = {
  monthlyPerMonth: 299,
  threeMonthTotal: 747,
  sixMonthTotal: 1374,
} as const;

export type ProtocolPlanCard = {
  id: string;
  name: string;
  eyebrow?: string;
  priceValue: string;
  priceUnit: string;
  priceSecondary?: string;
  features: readonly string[];
  recommended?: boolean;
  comingSoon?: boolean;
};

const { monthlyPerMonth, threeMonthTotal, sixMonthTotal } = PROTOCOL_PLAN_PRICES;
const threeMonthPerMonth = Math.round(threeMonthTotal / 3);
const sixMonthPerMonth = Math.round(sixMonthTotal / 6);
const savingsPercent = Math.round(
  ((monthlyPerMonth * 3 - threeMonthTotal) / (monthlyPerMonth * 3)) * 100,
);

export const PROTOCOL_PLANS_SECTION = {
  backgroundImage: EDITORIAL_IMAGES.membershipPricingBg,
  backgroundAlt: "Abstract fluid droplets in teal and violet",
  plansDisclaimer:
    "Treatment, medication, and supply are subject to provider review, eligibility, and prescription decisions. You're only charged if a provider approves treatment.",
  plans: [
    {
      id: "monthly",
      name: "Monthly Protocol",
      priceValue: `$${monthlyPerMonth}`,
      priceUnit: "/mo",
      priceSecondary: "Billed monthly · cancel anytime",
      features: ["Billed monthly", "Cancel anytime"],
    },
    {
      id: "3-month",
      name: "3-Month Protocol",
      eyebrow: "Recommended",
      recommended: true,
      priceValue: `$${threeMonthTotal}`,
      priceUnit: "",
      priceSecondary: `$${threeMonthPerMonth}/mo · better value, fewer interruptions · save ${savingsPercent}% vs monthly`,
      features: [
        "One checkout",
        "Built for continuity",
        `Save ${savingsPercent}% vs monthly`,
      ],
    },
    {
      id: "6-month",
      name: "6-Month Protocol",
      eyebrow: "Coming soon",
      comingSoon: true,
      priceValue: `$${sixMonthTotal}`,
      priceUnit: "",
      priceSecondary: `$${sixMonthPerMonth}/mo · best per-month`,
      features: ["Lowest per-month rate", "Maximum continuity"],
    },
  ] satisfies readonly ProtocolPlanCard[],
} as const;

/** @deprecated Use PROTOCOL_PLANS_SECTION */
export const MEMBERSHIP_PLAN = PROTOCOL_PLANS_SECTION;
