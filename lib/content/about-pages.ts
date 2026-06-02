import { EDITORIAL_IMAGES, NAV_IMAGES } from "@/lib/media";
import type { AboutPageContent } from "./types";

/** Main About — brand-first protocol clinic */
export const aboutMain: AboutPageContent = {
  title: "What does it mean to care for someone over time?",
  subtitle:
    "Basis exists for people who want a clinical relationship they can grow with—not a product they have to keep shopping for.",
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
    "We built Basis around a simple conviction: trust has to come before the transaction. When someone believes in how you practice care—who you are, what you stand for, how you show up over time—they don't price-shop every month. They stay. That's the difference between a long-term member and a transactional patient. Basis is a membership-based protocol clinic designed for that kind of relationship—starting with metabolic care and expanding into hormone, longevity, recovery, and performance under one connected membership.",
  storyAnchor: { label: "Our story", href: "#our-story" },
  storyCarouselImages: [
    {
      src: NAV_IMAGES.aboutHowItWorks,
      alt: "Clinical care in a calm, premium setting",
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
        "Basis is built on shared decision-making—not checkout flows. Members and clinicians work together over months and years: reviewing progress, refining protocols, and adjusting as goals change. You are a participant in your care, not a line item in a funnel.",
      ],
    },
    {
      eyebrow: "We've never known more",
      paragraphs: [
        "About human biology. About personalization. About what modern medicine can actually do when it's practiced with continuity. New diagnostics, therapeutics, and research create real opportunity—but only if someone helps you turn information into a plan that evolves. That's the job of a protocol clinic.",
      ],
    },
    {
      eyebrow: "No more noise",
      paragraphs: [
        "The wellness industry is loud. Trend cycles. Dashboards full of biomarkers with no one to interpret them. Clinics built around a single drug or a single test. Basis is intentionally quiet. One membership. Provider review. Personalized protocol recommendations. Therapies when clinically appropriate—purchased separately, never buried in fine print. We lead with who we are and how we practice. The products follow.",
      ],
    },
  ],
  approach: {
    heading: "Our approach",
    paragraphs: [
      "Protocol-based care isn't a SKU.",
      "Membership gives you access to clinical oversight, ongoing support, and recalibration—not a bundle of medications disguised as a subscription. Basis Metabolic is our first live track. More protocol areas are coming. What stays constant is the relationship: one team, one portal, one standard of care that compounds over time.",
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
