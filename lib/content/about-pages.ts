import { EDITORIAL_IMAGES, NAV_IMAGES } from "@/lib/media";
import type { AboutPageContent } from "./types";

/** Main About — structure aligned with https://basal.health/about */
export const aboutMain: AboutPageContent = {
  title: "What does it mean to truly care for metabolism?",
  subtitle:
    "We’re inspired by moments of understanding, when someone finally feels heard by their own body. Basis Health exists to restore that relationship.",
  galleryImages: [
    {
      src: EDITORIAL_IMAGES.aboutPrimary,
      alt: "Mindful wellness practice in calm natural light",
    },
    {
      src: EDITORIAL_IMAGES.aboutSecondary,
      alt: "Premium spa-inspired wellness environment",
    },
  ],
  intro:
    "We always cared about health, but we didn’t always understand the role that metabolism plays in how we feel, how we function. Twenty-five years of curiosity and a new wave of research gave us radical clarity. Get metabolism right and everything gets better. So, we built what we couldn’t find—a metabolism-first approach to wellness.",
  storyAnchor: { label: "Our story", href: "#our-story" },
  storyCarouselImages: [
    {
      src: NAV_IMAGES.aboutHowItWorks,
      alt: "Clinical GLP-1 vials in a care setting",
    },
    {
      src: NAV_IMAGES.aboutVitality,
      alt: "Abstract premium wellness texture",
    },
  ],
  sections: [
    {
      id: "our-story",
      heading: "Care as partnership",
      paragraphs: [
        "Basis Health is built on the belief that care works best when it’s shared. Patients as participants. Practitioners as partners. Decisions made with clarity, not urgency. Health practiced over time—not rushed toward outcomes.",
      ],
    },
    {
      eyebrow: "We've never known more",
      paragraphs: [
        "About metabolic science generally. About our own individual bodies. New research, diagnostic tools, and wearable tracking tech mean this is the moment to crack your unique metabolic code. Basis Health will be here to help.",
      ],
    },
    {
      eyebrow: "No more noise",
      paragraphs: [
        "The metabolic health space is loud. Supplements that overpromise. Clinics that underdeliver. Programs built around a medication, not a patient. Basis Health is different because the science demands it. GLP-1 therapy only works when the metabolic environment is managed, and that requires real clinicians, real diagnostics, and a protocol that adapts. Welcome to the quiet calm of care.",
      ],
    },
  ],
  approach: {
    heading: "Our approach",
    paragraphs: [
      "Metabolic care isn’t one-size-fits-all.",
      "Effective education and treatment demand a functional patient-practitioner relationship and customized protocols. What we offer is bespoke. Dynamic. Never rushed. Patients are co-pilots. Practitioners listen as much as they talk. We don't scale at the expense of quality.",
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
    alt: "Clinical GLP-1 vials in a care setting",
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
        "GLP–One is more than a prescription. It’s a care framework designed to help you address the root of metabolic dysfunction. Education and personalized clinician counseling are an important part of this process.",
      ],
    },
  ],
  sections: [],
};

/** “Unlock living” / vitality — basal About > Unlock Living */
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
        "Energy, sleep quality, recovery, and metabolic markers don’t move in isolation. Basis Health treats them as connected signals in one plan—because that’s how your body actually works.",
      ],
    },
    {
      eyebrow: "Sustainable capacity",
      heading: "Performance without burnout",
      paragraphs: [
        "Whether you’re optimizing for daily output or long-term healthspan, the goal is sustainable capacity—not spikes followed by crashes. Protocols balance therapeutics with training, nutrition, sleep, and stress inputs.",
      ],
    },
    {
      eyebrow: "The long arc",
      heading: "Designed for months, not days",
      paragraphs: [
        "Vitality isn’t a 30-day challenge. It’s the compound effect of aligned care over months and years. Three- and six-month plans give you and your clinician the timeline metabolic change actually requires.",
      ],
    },
  ],
  approach: {
    heading: "Begin again",
    paragraphs: [
      "When biological signals are distorted, effort fails. You don’t need more discipline—you need a protocol that evolves with you.",
    ],
  },
};

export const ABOUT_PAGES = {
  main: aboutMain,
  "how-it-works": aboutHowItWorks,
  vitality: aboutVitality,
} as const;
