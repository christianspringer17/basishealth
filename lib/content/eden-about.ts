import { EDITORIAL_IMAGES, NAV_IMAGES } from "@/lib/media";

/** /about — eden design system rebuild of the company page */
export const EDEN_ABOUT = {
  hero: {
    eyebrow: "About Basis",
    title: "What does it mean to truly care for metabolism?",
    lead: "We're inspired by the moment you understand what your body has been trying to tell you. Basis exists to make physician-guided metabolic care feel continuous, clear, and calm — not a checkout flow, not a dashboard without a clinician. A relationship that adapts as you do.",
    image: NAV_IMAGES.aboutHero,
    imageAlt: "Calm, premium clinical care setting",
    trustChips: [
      "Licensed provider review",
      "Prescribed only if appropriate",
      "U.S. pharmacy fulfillment",
      "Transparent plan pricing",
    ],
  },
  story: [
    {
      id: "partnership",
      eyebrow: "Our story",
      heading: "Care as partnership",
      paragraphs: [
        "Basis is built on shared decision-making. You and your licensed providers review progress together — refining protocols, adjusting dosing when needed, and naming tradeoffs plainly.",
        "You are a participant in your care, not a line item in a funnel. That is the standard we hold ourselves to, whether your goal is weight, energy, or long-term metabolic risk.",
      ],
      image: EDITORIAL_IMAGES.aboutPartnership,
      imageAlt: "Blue lupine flowers in warm golden light",
    },
    {
      id: "never-known-more",
      eyebrow: "We've never known more",
      heading: "Science is moving fast. Care should keep up.",
      paragraphs: [
        "About metabolic science. About personalization. About what medicine can do when it is practiced with continuity instead of one-off transactions.",
        "New therapeutics and better monitoring create real opportunity — but only if someone helps you turn information into a plan that evolves. That is the work of a protocol clinic.",
      ],
      image: EDITORIAL_IMAGES.aboutPrimary,
      imageAlt: "Abstract blue fluid droplets in soft clinical light",
    },
    {
      id: "no-more-noise",
      eyebrow: "No more noise",
      heading: "Intentionally quiet, deliberately clear.",
      paragraphs: [
        "The metabolic health space is loud: supplements that overpromise, clinics built around a single drug, apps full of data with no one accountable for what to do next.",
        "Basis is intentionally quiet. One care relationship. Clear pricing on your plan. Therapies when clinically appropriate — never buried in fine print. We lead with how we practice; the product follows.",
      ],
      image: EDITORIAL_IMAGES.aboutSecondary,
      imageAlt: "A person resting peacefully in a sunlit meadow of wildflowers",
    },
  ],
  approach: {
    eyebrow: "Our approach",
    heading: "Metabolic care isn't one-size-fits-all.",
    paragraphs: [
      "You begin with an online assessment. A licensed provider reviews whether Basis care is medically appropriate before any treatment is prescribed. If approved, you receive a personalized protocol — dosing guidance, refill coordination through U.S. pharmacy partners, and follow-up so the plan can change when your body responds.",
      "GLP-One is live today. Additional protocol tracks are coming. What stays constant is one team, one standard of care, and a relationship that compounds over time — not a bundle of medications disguised as a subscription.",
    ],
    cta: "See how it works",
  },
} as const;
