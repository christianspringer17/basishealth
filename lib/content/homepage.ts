import { EDITORIAL_IMAGES } from "@/lib/media";
import { ROUTES } from "@/lib/routes";

/** D18 — set true when backend confirms lab insights */
export const HOMEPAGE_LABS_INSIGHTS_ENABLED = false;

export const HOMEPAGE_CONTENT = {
  hero: {
    eyebrow: "Basis Metabolic · Available now",
    headline: "Clinician-guided GLP-One care, with pricing you can see upfront.",
    subhead:
      "Personalized dosing support, provider review, and ongoing care access throughout your program.",
    primaryCta: "Start GLP-One assessment",
    secondaryCta: "View plans",
    microcopy:
      "Provider review required. You're only charged if treatment is approved. Cancel anytime on monthly plans.",
  },
  offerCard: {
    eyebrow: "Available now",
    title: "GLP-One Tirzepatide",
    pricePrefix: "From",
    priceSuffix: "/mo on 3-month programs",
    bullets: [
      "Provider review required",
      "Only charged if approved",
      "Personalized dosing support",
      "Ongoing care access",
      "Discreet shipping",
    ],
    cta: "Compare plans",
    ctaHref: ROUTES.glpOnePlans,
  },
  activeProtocols: {
    sectionTitle: "Choose your GLP-One path",
    protocols: [
      {
        id: "microdose" as const,
        name: "GLP-One Microdose",
        description:
          "A lower-dose tirzepatide path for metabolic support, appetite regulation, and gradual intervention.",
        priceNote: "From $183/mo on 3-month programs",
        cta: "Start assessment",
      },
      {
        id: "weightloss" as const,
        name: "GLP-One Weight Loss",
        description:
          "A clinician-guided tirzepatide path for weight management, body composition, and long-term metabolic support.",
        priceNote: "From $260/mo on 3-month programs",
        cta: "Start assessment",
      },
    ],
    viewPlansLabel: "View plans",
  },
  connectedCare: {
    headline: "One connected care experience.",
    subhead:
      "From assessment to provider review, pharmacy fulfillment, dosing support, refills, and ongoing care access, Basis is built to support the full treatment journey — not just the prescription.",
    cards: [
      {
        title: "Guided assessment",
        body: "Start with a structured health intake designed to help providers understand your goals, history, and treatment fit.",
      },
      {
        title: "Provider review",
        body: "A licensed provider reviews your information before treatment is approved.",
      },
      {
        title: "Personalized dosing support",
        body: "Your program includes support around dosing, tolerance, progress, and adjustments when clinically appropriate.",
      },
      {
        title: "Pharmacy fulfillment",
        body: "If prescribed, medication is fulfilled through pharmacy partners and shipped discreetly.",
      },
      {
        title: "Refill management",
        body: "Refill and follow-up workflows are built into the care experience.",
      },
      {
        title: "Ongoing care access",
        body: "Patients have access to care support beyond checkout.",
      },
    ],
    optionalLabCard: {
      title: "Optional health insights",
      body: "Lab results and biomarker visibility may be available where clinically appropriate.",
    },
  },
  categories: {
    sectionTitle: "Our Products",
    items: [
      {
        id: "microdose" as const,
        label: "Microdose",
        shopLabel: "Explore Microdose",
        image: EDITORIAL_IMAGES.wellnessField,
        href: ROUTES.glpOnePlans,
      },
      {
        id: "weightloss" as const,
        label: "Weight Loss",
        shopLabel: "Explore Weight Loss",
        image: EDITORIAL_IMAGES.clinicalBlue,
        href: ROUTES.glpOnePlans,
      },
    ],
  },
  about: {
    sectionTitle: "About",
    body: "Basis is a physician-guided longevity care platform. We begin with GLP-One and expand care around long-term metabolic and longevity goals — built around dosing support, review, and ongoing care.",
    cta: "Learn more",
    ctaHref: ROUTES.ourApproach,
  },
  trustStrip: {
    sectionTitle: "Clinician-guided care, fulfilled in the U.S.",
    items: [
      {
        title: "Licensed provider review",
        body: "A licensed provider reviews your information before treatment is approved.",
      },
      {
        title: "U.S. pharmacy fulfillment",
        body: "If prescribed, medication is fulfilled through pharmacy partners and shipped discreetly.",
      },
      {
        title: "Ongoing dosing support",
        body: "Personalized support around dosing, tolerance, progress, and adjustments when appropriate.",
      },
      {
        title: "Secure intake and care flow",
        body: "Structured assessment and care access built into the full treatment journey.",
      },
    ],
  },
  questions: {
    sectionTitle: "Questions?",
    body: "Got questions? Our care team is here to help. Reach out anytime for personalized support.",
    contactCta: "Contact",
    contactHref: ROUTES.contact,
  },
  howItWorks: {
    steps: [
      {
        title: "Complete assessment",
        body: "Answer questions about your health, goals, and treatment history.",
      },
      {
        title: "Provider review",
        body: "A licensed provider reviews your information to determine whether treatment is appropriate.",
      },
      {
        title: "Prescription if approved",
        body: "If prescribed, your medication is fulfilled through pharmacy partners.",
      },
      {
        title: "Ongoing support",
        body: "Receive dosing support, refill management, and care access throughout the program.",
      },
    ],
    microcopy: "No charge unless treatment is approved.",
  },
  whyBasis: {
    headline: "Access is not the same as care.",
    cards: [
      {
        title: "Not just a prescription",
        body: "Basis is built around dosing support, review, and ongoing care.",
      },
      {
        title: "A protocol-first model",
        body: "We begin with GLP-One and expand care around long-term metabolic and longevity goals.",
      },
      {
        title: "Designed to evolve",
        body: "Your care relationship can expand as Basis adds additional protocol tracks.",
      },
    ],
  },
  addOns: {
    headline: "Support can extend beyond the prescription.",
    subhead:
      "Where available, patients may be offered relevant add-ons or support options during checkout or follow-up. These should support the care plan, not distract from it.",
    chips: [
      "Nutrition support",
      "Protein / amino support",
      "Side-effect support",
      "Lab insights",
      "Refill support",
    ],
  },
  futureProtocols: {
    headline: "Built to expand with you.",
    tracks: [
      { name: "Hormone Health", status: "Expanding soon" },
      { name: "Longevity Labs", status: "Expanding soon" },
      { name: "Recovery", status: "Expanding soon" },
      { name: "Performance", status: "Expanding soon" },
    ],
  },
  faqPreview: {
    linkLabel: "See all GLP-One questions",
    linkHref: ROUTES.glpOneFaq,
    items: [
      {
        question: "Am I charged before provider approval?",
        answer:
          "No. You are only charged if a licensed provider determines that treatment is appropriate for you after reviewing your assessment.",
      },
      {
        question: "What is included in the GLP-One program?",
        answer:
          "Eligible plans include clinician review, personalized protocol design, scheduled check-ins, and dosing support. Medication may be included in the therapy plan where medically appropriate and prescribed. Access is subject to provider review and eligibility.",
      },
      {
        question: "What is the difference between Microdose and Weight Loss?",
        answer:
          "Microdose emphasizes metabolic optimization with lower starting doses. Weight Loss uses a titration path focused on body-composition goals. Your clinician recommends the appropriate tier after eligibility review.",
      },
      {
        question: "Is this only for weight loss?",
        answer:
          "No. Basis Metabolic is broader metabolic and longevity-oriented care. GLP-One Weight Loss is one path; Microdose supports metabolic support without weight loss as the only goal. Your provider helps determine what is appropriate for you.",
      },
    ],
  },
  finalCta: {
    headline: "Start with GLP-One. Build toward long-term care.",
    cta: "Start GLP-One assessment",
    microcopy:
      "Provider review required. You're only charged if treatment is approved.",
  },
} as const;
