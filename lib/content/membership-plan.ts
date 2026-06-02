import { EDITORIAL_IMAGES } from "@/lib/media";

export const MEMBERSHIP_PLAN = {
  eyebrow: "Core access",
  headline: "Multiple therapies. One membership.",
  price: 60,
  priceUnit: "month",
  disclaimer:
    "Therapies, labs, and medications are not included in the membership fee and are purchased separately when clinically appropriate.",
  features: [
    "Provider review and personalized protocol recommendations",
    "Portal access and ongoing support",
    "Recalibration consults over time",
    "Messaging and check-ins when supported",
    "Access to Basis Metabolic and future protocol tracks",
    "Member pricing on therapies when eligible",
  ],
  backgroundImage: EDITORIAL_IMAGES.membershipPeptideBg,
  backgroundAlt: "Abstract peptide molecules in soft clinical blue",
} as const;
