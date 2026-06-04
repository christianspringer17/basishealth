import { EDITORIAL_IMAGES } from "@/lib/media";

export type ExplainerStep = {
  label: string;
};

export type ExplainerItem = {
  id: string;
  question: string;
  answer: string;
  image: string;
  imageAlt: string;
  tags?: readonly string[];
  steps?: readonly ExplainerStep[];
  footnotes?: readonly string[];
};

export const EXPLAINER_ITEMS: readonly ExplainerItem[] = [
  {
    id: "what-is-protocol",
    question: "What is a protocol?",
    answer:
      "A protocol is a physician-guided care plan built around your goals — not a one-off prescription. Basis starts with GLP-1 and metabolic care, and can expand into hormone, longevity, recovery, and performance over time.",
    image: EDITORIAL_IMAGES.wellnessFieldThumb,
    imageAlt: "Open green field at golden hour",
    tags: ["Physician-guided", "Personalized", "Long-term"],
  },
  {
    id: "start-glp-one",
    question: "How do I start GLP-1 care?",
    answer:
      "Start with a short online assessment. A licensed provider reviews your eligibility and prescribes GLP-1 care only if it's clinically appropriate.",
    image: EDITORIAL_IMAGES.clinicalBlueThumb,
    imageAlt: "Clinical care setting",
    tags: ["Provider review", "Online assessment", "U.S. pharmacy"],
    steps: [
      { label: "Start your assessment" },
      { label: "Complete your health intake" },
      { label: "Provider reviews your eligibility" },
      { label: "Prescription issued if clinically appropriate" },
      { label: "Medication ships, with ongoing refills and support" },
    ],
  },
  {
    id: "how-to-start",
    question: "Take control of your health",
    answer:
      "Your plan brings physician-guided care together in one place — with therapies included or added when clinically appropriate, not standalone storefront purchases.",
    image: EDITORIAL_IMAGES.coastalSkyThumb,
    imageAlt: "Coastal sky at dusk",
    footnotes: [
      "Access is subject to provider review, eligibility, and applicable regulations.",
    ],
  },
] as const;
