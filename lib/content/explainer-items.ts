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
      "A protocol is a physician-guided care plan built around your goals—not a single product or lab report. Basis starts with metabolic health and expands into hormone, longevity, recovery, and performance tracks over one connected relationship.",
    image: EDITORIAL_IMAGES.wellnessFieldThumb,
    imageAlt: "Open green field at golden hour",
    tags: ["Physician-guided", "Personalized", "Long-term"],
  },
  {
    id: "protocol-for-therapies",
    question: "Do I need a protocol if I want peptides or GLP-1 therapy?",
    answer:
      "Yes. Basis is membership-based. Therapies—including GLP-1s, peptides, and related interventions—are components of a protocol, not standalone purchases. Access is subject to provider review and eligibility.",
    image: EDITORIAL_IMAGES.clinicalBlueThumb,
    imageAlt: "Clinical care setting",
    tags: ["Membership required", "Therapies separate", "Provider review"],
  },
  {
    id: "how-to-start",
    question: "How do I get started?",
    answer:
      "Apply for membership, complete your health intake, and receive protocol recommendations after physician review. Therapies may follow when clinically appropriate.",
    image: EDITORIAL_IMAGES.coastalSkyThumb,
    imageAlt: "Coastal sky at dusk",
    steps: [
      { label: "Apply for membership" },
      { label: "Complete health intake" },
      { label: "Receive protocol recommendations" },
      { label: "Physician review & approval" },
      { label: "Therapies when clinically appropriate" },
    ],
    footnotes: [
      "Membership starts at $60/month.",
      "Therapies, labs, and medications are purchased separately when clinically appropriate.",
      "Access is subject to provider review, eligibility, and applicable regulations.",
    ],
  },
] as const;
