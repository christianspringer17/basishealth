import type { ProductTier } from "@/lib/pricing";

/** /pricing — commitment-based pricing page content */
export const EDEN_PRICING = {
  hero: {
    eyebrow: "Pricing",
    title: "Transparent pricing. Everything included.",
    lead: "Medication, licensed provider review, dosing support, and ongoing care access. One subscription. No hidden fees. Save more when you commit to longer plans.",
    trustLine: "Licensed U.S. providers · No insurance required · Only charged if approved",
  },
  toggleLabel: "Choose your commitment",
  cards: [
    {
      tier: "microdose" as ProductTier,
      badge: "Metabolic health",
      name: "GLP-One Microdose",
      subtitle: "Tirzepatide subscription",
      features: [
        "Compounded tirzepatide microdose protocol",
        "Licensed provider review and oversight",
        "Gradual titration built for optimization",
        "Scheduled provider check-ins",
        "Metabolic marker tracking",
        "Free discreet monthly delivery",
      ],
    },
    {
      tier: "weightloss" as ProductTier,
      badge: "Most popular",
      badgeTone: "dark" as const,
      name: "GLP-One Weight Loss",
      subtitle: "Tirzepatide subscription",
      features: [
        "Everything in Microdose",
        "Weight-loss titration protocol",
        "Ongoing dosage adaptation as you respond",
        "Priority check-in scheduling",
        "Personalized dosing support",
        "Free discreet monthly delivery",
      ],
    },
  ],
  cardFootnote:
    "Free ~5-minute assessment · Licensed provider review · Only charged if approved",
  cancelNote:
    "Cancel anytime. No cancellation fees on monthly plans. If you cancel a longer-term plan early, your rate reconciles to the applicable shorter-term rate for the months you received — no additional exit penalty.",
  compare: {
    eyebrow: "Included in every subscription",
    title: "Your subscription vs. what others charge",
    columns: { feature: "What you get", typical: "Typical telehealth", basis: "Basis" },
    rows: [
      {
        feature: "Compounded GLP-1 medication",
        typical: "Billed separately ($300–500+)",
        basis: "Included",
      },
      {
        feature: "Licensed provider review",
        typical: "Initial consult only ($50–150)",
        basis: "Ongoing, included",
      },
      {
        feature: "Dosing support & titration",
        typical: "Not included",
        basis: "Included",
      },
      {
        feature: "Ongoing care access",
        typical: "Business hours email",
        basis: "Included",
      },
      {
        feature: "Monthly medication delivery",
        typical: "Pharmacy pickup or extra fee",
        basis: "Free discreet shipping",
      },
    ],
  },
  faq: {
    headline: "Pricing questions",
    subhead: "Quick answers about plans, billing, and what's included.",
    cta: "Still unsure? Start your assessment",
    items: [
      {
        question: "Are there any hidden fees?",
        answer:
          "No. Your subscription includes medication when prescribed, licensed provider review, dosing support, and ongoing care access. There are no enrollment fees and no separate medication charges.",
      },
      {
        question: "What's the difference between the plan terms?",
        answer:
          "Every term includes the same medication, provider oversight, and care access. The only difference is the commitment length and the per-month price — the Annual plan offers the best effective monthly rate, with 3-Month and 6-Month plans in between.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. There are no cancellation fees on monthly plans. If you cancel a longer-term plan before completing it, your rate reconciles to the applicable shorter-term rate for the months you actually received — no additional exit penalty.",
      },
      {
        question: "Am I charged before provider approval?",
        answer:
          "No. You are only charged if a licensed provider determines treatment is appropriate after reviewing your assessment.",
      },
      {
        question: "Do I need insurance?",
        answer:
          "No. Basis is a cash-pay program — no insurance claims, no prior authorizations, and no surprise bills.",
      },
      {
        question: "How does compounded medication pricing work?",
        answer:
          "Basis prescribes medications prepared by state-licensed compounding pharmacies under a patient-specific prescription from a licensed clinician. Compounded medications are not FDA-approved as finished drug products. Our direct-pay model lets us bundle medication, provider review, and ongoing care into one transparent monthly price.",
      },
    ],
  },
  disclaimer:
    "Compounded medications are not FDA-approved as finished drug products. Prescriptions are issued only after an online consultation with a licensed provider. Results vary and are not guaranteed.",
} as const;
