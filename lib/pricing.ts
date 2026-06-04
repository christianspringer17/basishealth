/** GLP-One product tiers — aligned with basal.health, with 3-month bundle upsell */

export type ProductTier = "microdose" | "weightloss";
export type BillingTerm = "1-month" | "3-month";
export type PlanId = `${ProductTier}-${BillingTerm}`;

export type ProductDefinition = {
  id: ProductTier;
  name: string;
  /** Small blue label above the card */
  cardLabel: string;
  /** Primary headline inside the card */
  cardHeadline: string;
  /** Line under headline — e.g. Tirzepatide Subscription */
  cardSubtitle: string;
  subtitle: string;
  description: string;
  /** Extra detail for the (?) hint */
  tooltip: string;
  monthlyPrice: number;
  /** Total billed upfront for 3-month commitment */
  threeMonthTotal: number;
  features: readonly string[];
  /** Shown on 3-month view — lowest effective monthly rate */
  recommendedOn3Month?: boolean;
  /** Shown on 3-month view — higher-intent tier */
  popularOn3Month?: boolean;
};

export const BILLING_TERMS: {
  id: BillingTerm;
  label: string;
  shortLabel: string;
}[] = [
  { id: "1-month", label: "1 month", shortLabel: "Monthly" },
  { id: "3-month", label: "3 months", shortLabel: "3-month" },
];

export const GLP_PRODUCTS: readonly ProductDefinition[] = [
  {
    id: "microdose",
    name: "GLP-One Microdose",
    cardLabel: "GLP-1 microdose",
    cardHeadline: "GLP-One Microdose",
    cardSubtitle: "Tirzepatide Subscription",
    subtitle: "Tirzepatide Subscription",
    description:
      "The best-in-class GLP-1. Ideal for optimizing metabolic benefits.",
    tooltip:
      "Microdose titration starts lower and builds gradually — designed for metabolic optimization with clinician oversight.",
    monthlyPrice: 240,
    threeMonthTotal: 550,
    features: [
      "Clinical eligibility review",
      "Microdose titration protocol",
      "Scheduled provider check-ins",
      "Metabolic marker tracking",
    ],
    recommendedOn3Month: true,
  },
  {
    id: "weightloss",
    name: "GLP-One Weight Loss",
    cardLabel: "GLP-1 Weightloss",
    cardHeadline: "GLP-One Weightloss",
    cardSubtitle: "Tirzepatide Subscription",
    subtitle: "Tirzepatide Subscription",
    description:
      "The best-in-class GLP-1. Fast acting weight loss with minimal side effects.",
    tooltip:
      "Weight-loss titration follows a clinician-guided protocol with ongoing dosage adjustments as you respond.",
    monthlyPrice: 340,
    threeMonthTotal: 780,
    features: [
      "Everything in Microdose",
      "Weight-loss titration protocol",
      "Priority check-in scheduling",
      "Ongoing dosage adaptation",
    ],
    popularOn3Month: true,
  },
] as const;

export function planId(tier: ProductTier, term: BillingTerm): PlanId {
  return `${tier}-${term}`;
}

export function savingsVsMonthly(product: ProductDefinition): number {
  return product.monthlyPrice * 3 - product.threeMonthTotal;
}

export function effectiveMonthly3Month(product: ProductDefinition): number {
  return Math.round((product.threeMonthTotal / 3) * 100) / 100;
}

/** Price shown on Basal-style product cards */
export function monthlyPillPrice(product: ProductDefinition, term: BillingTerm): string {
  const amount =
    term === "1-month" ? product.monthlyPrice : product.threeMonthTotal / 3;
  return `$${amount.toFixed(2)}/month`;
}

export function priceDisplay(
  product: ProductDefinition,
  term: BillingTerm,
): {
  primary: string;
  secondary?: string;
  savings?: number;
} {
  if (term === "1-month") {
    return {
      primary: `$${product.monthlyPrice}`,
      secondary: "/month",
    };
  }
  const savings = savingsVsMonthly(product);
  return {
    primary: `$${product.threeMonthTotal}`,
    secondary: `for 3 months · $${Math.round(product.threeMonthTotal / 3)}/mo`,
    savings,
  };
}

export function max3MonthSavings(): number {
  return Math.max(...GLP_PRODUCTS.map(savingsVsMonthly));
}

export function lowestEffectiveMonthly(): number {
  return Math.min(...GLP_PRODUCTS.map((p) => Math.round(p.threeMonthTotal / 3)));
}

export function productByTier(tier: ProductTier): ProductDefinition {
  const product = GLP_PRODUCTS.find((p) => p.id === tier);
  if (!product) throw new Error(`Unknown product tier: ${tier}`);
  return product;
}

export const VALID_PLAN_IDS = new Set<PlanId>(
  GLP_PRODUCTS.flatMap((p) => [
    planId(p.id, "1-month"),
    planId(p.id, "3-month"),
  ]),
);
