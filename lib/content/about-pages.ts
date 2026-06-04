import { EDITORIAL_IMAGES, NAV_IMAGES } from "@/lib/media";
import type { AboutPageContent } from "./types";

/** Main About — Basal rhythm, Basis Metabolic positioning (no founder profiles) */
export const aboutMain: AboutPageContent = {
  title: "What does it mean to truly care for metabolism?",
  subtitle:
    "We're inspired by the moment you understand what your body has been trying to tell you.",
  intro:
    "Basis exists to make physician-guided metabolic care feel continuous, clear, and calm—starting with Basis Metabolic, our GLP-1 protocol when clinically appropriate. Not a checkout flow. Not a dashboard without a clinician. A relationship that can adapt as you do.",
  trustItems: [
    "Licensed provider review",
    "Prescribed only if appropriate",
    "U.S. pharmacy fulfillment",
    "Transparent plan pricing",
  ],
  galleryImages: [
    {
      src: EDITORIAL_IMAGES.aboutPrimary,
      alt: "Abstract blue fluid droplets in soft clinical light",
    },
    {
      src: EDITORIAL_IMAGES.aboutSecondary,
      alt: "A person resting peacefully in a sunlit meadow of wildflowers",
    },
  ],
  sections: [
    {
      id: "our-story",
      heading: "Care as partnership",
      paragraphs: [
        "Basis is built on shared decision-making. You and your licensed providers review progress together—refining protocols, adjusting dosing when needed, and naming tradeoffs plainly.",
        "You are a participant in your care, not a line item in a funnel. That is the standard we hold ourselves to, whether your goal is weight, energy, or long-term metabolic risk.",
      ],
    },
    {
      id: "never-known-more",
      eyebrow: "We've never known more",
      paragraphs: [
        "About metabolic science. About personalization. About what medicine can do when it is practiced with continuity instead of one-off transactions.",
        "New therapeutics and better monitoring create real opportunity—but only if someone helps you turn information into a plan that evolves. That is the work of a protocol clinic.",
      ],
    },
    {
      id: "no-more-noise",
      eyebrow: "No more noise",
      paragraphs: [
        "The metabolic health space is loud: supplements that overpromise, clinics built around a single drug, apps full of data with no one accountable for what to do next.",
        "Basis is intentionally quiet. One care relationship. Clear pricing on your plan. Therapies when clinically appropriate—never buried in fine print. We lead with how we practice; the product follows.",
      ],
    },
  ],
  flow: [
    { type: "section", sectionId: "our-story" },
    {
      type: "image",
      image: {
        src: EDITORIAL_IMAGES.aboutPartnership,
        alt: "Blue lupine flowers in warm golden light",
      },
    },
    { type: "section", sectionId: "never-known-more" },
    { type: "section", sectionId: "no-more-noise" },
  ],
  approach: {
    eyebrow: "Our approach",
    heading: "Metabolic care isn't one-size-fits-all.",
    paragraphs: [
      "You begin with an online assessment. A licensed provider reviews whether Basis care is medically appropriate before any treatment is prescribed. If approved, you receive a personalized protocol—dosing guidance, refill coordination through U.S. pharmacy partners, and follow-up so the plan can change when your body responds.",
      "Basis Metabolic is live today. Additional protocol tracks are coming. What stays constant is one team, one standard of care, and a relationship that compounds over time—not a bundle of medications disguised as a subscription.",
    ],
  },
};

export const aboutHowItWorks: AboutPageContent = {
  title: "How it works",
  subtitle:
    "From eligibility screening to an evolving protocol—clinician-guided care designed for clarity at every step.",
  backHref: "/about",
  backLabel: "About",
  heroImage: {
    src: NAV_IMAGES.aboutHowItWorks,
    alt: "Clinical care in a calm, premium setting",
  },
  steps: [
    {
      heading: "Eligibility screening & clinician review",
      paragraphs: [
        "Your intake form gives clinicians foundational data to determine whether GLP-1 therapy is right for you. No rubber-stamp prescriptions. Clinician approval for treatment will always prioritize your health and well-being.",
      ],
    },
    {
      heading: "Personalized protocol",
      paragraphs: [
        "No two protocols look the same. We work with you to select therapy clinically appropriate for your unique goals and biology, with specific care given to starting dose and titration schedule.",
      ],
    },
    {
      heading: "Ongoing adaptive care",
      paragraphs: [
        "We closely monitor your progress, adjusting dosage as needed. Regular check-ins allow us to fine-tune your treatment, ensuring it aligns with your body's changing needs.",
      ],
    },
    {
      heading: "Metabolic literacy",
      paragraphs: [
        "GLP–One is more than a prescription. It's a care framework designed to help you address the root of metabolic dysfunction. Education and personalized clinician counseling are an important part of this process.",
      ],
    },
  ],
  sections: [],
};

export const aboutVitality: AboutPageContent = {
  title: "This is life unlocked",
  subtitle:
    "Long-horizon metabolic care for energy, recovery, and vitality—not quick fixes or short-term programs.",
  backHref: "/about",
  backLabel: "About",
  heroImage: {
    src: NAV_IMAGES.aboutVitality,
    alt: "Abstract premium wellness texture",
  },
  sections: [
    {
      eyebrow: "Vitality",
      heading: "A systems outcome—not a single metric",
      paragraphs: [
        "Energy, sleep quality, recovery, and metabolic markers don't move in isolation. Basis treats them as connected signals in one plan—because that's how your body actually works.",
      ],
    },
    {
      eyebrow: "Sustainable capacity",
      heading: "Performance without burnout",
      paragraphs: [
        "Whether you're optimizing for daily output or long-term healthspan, the goal is sustainable capacity—not spikes followed by crashes. Protocols balance therapeutics with training, nutrition, sleep, and stress inputs.",
      ],
    },
    {
      eyebrow: "The long arc",
      heading: "Designed for months, not days",
      paragraphs: [
        "Vitality isn't a 30-day challenge. It's the compound effect of aligned care over months and years. Three- and six-month plans give you and your clinician the timeline metabolic change actually requires.",
      ],
    },
  ],
  approach: {
    heading: "Begin again",
    paragraphs: [
      "When biological signals are distorted, effort fails. You don't need more discipline—you need a protocol that evolves with you.",
    ],
  },
};

export const ABOUT_PAGES = {
  main: aboutMain,
  "how-it-works": aboutHowItWorks,
  vitality: aboutVitality,
} as const;
