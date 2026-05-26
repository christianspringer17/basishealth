import { NAV_IMAGES } from "@/lib/media";
import type { AboutPageContent } from "./types";

export const aboutMain: AboutPageContent = {
  title: "What does it mean to truly care for metabolism?",
  subtitle:
    "We’re inspired by moments of understanding, when someone finally feels heard by their own body. Athene exists to restore that relationship.",
  intro:
    "We always cared about health, but we didn’t always understand the role metabolism plays in how we feel and function. New research gave us clarity: get metabolism right and everything gets better. So we built what we couldn’t find—a metabolism-first approach to longevity care.",
  heroImage: {
    src: NAV_IMAGES.aboutHowItWorks,
    alt: "Clinical consultation at Athene Health",
  },
  cta: { label: "Join the waitlist", href: "/#waitlist" },
  sections: [
    {
      eyebrow: "Our story",
      heading: "Care as partnership",
      paragraphs: [
        "Athene is built on the belief that care works best when it’s shared. Patients as participants. Practitioners as partners. Decisions made with clarity, not urgency. Health practiced over time—not rushed toward outcomes.",
        "We designed our 3- and 6-month subscription plans so you can commit to real metabolic change with transparent pricing and ongoing provider oversight—not a revolving door of one-off visits.",
      ],
    },
    {
      eyebrow: "We've never known more",
      heading: "About metabolic science—and about you",
      paragraphs: [
        "New research, diagnostic tools, and longitudinal biomarker tracking mean this is the moment to understand your unique metabolic code. Athene integrates those signals into one evolving protocol.",
        "Our clinicians focus on the markers that predict long-term health: insulin sensitivity, body composition, hormonal rhythm, aerobic reserve, and muscle mass. Not vanity metrics—signals that matter.",
      ],
    },
    {
      eyebrow: "No more noise",
      heading: "The metabolic health space is loud",
      paragraphs: [
        "Supplements that overpromise. Clinics that underdeliver. Programs built around a medication, not a patient. Athene is different because the science demands it.",
        "Effective metabolic care requires real clinicians, thoughtful diagnostics, and a protocol that adapts. Welcome to the quiet calm of care built for trust—and built to convert intention into sustained results.",
      ],
    },
    {
      heading: "Our approach",
      paragraphs: [
        "Metabolic care isn’t one-size-fits-all. Effective education and treatment demand a functional patient-practitioner relationship and customized protocols.",
        "What we offer is bespoke. Dynamic. Never rushed. Patients are co-pilots. Practitioners listen as much as they talk. We don’t scale at the expense of quality.",
      ],
    },
  ],
};

export const aboutHowItWorks: AboutPageContent = {
  title: "How it works",
  subtitle: "From first intake to an evolving protocol—designed for clarity at every step.",
  backHref: "/about",
  backLabel: "About",
  heroImage: {
    src: NAV_IMAGES.aboutHowItWorks,
    alt: "Provider reviewing patient health data",
  },
  cta: { label: "Begin your assessment", href: "/#waitlist" },
  sections: [
    {
      heading: "1. Share your goals and health context",
      paragraphs: [
        "Tell us what you’re working toward—energy, recovery, metabolism, sleep, or long-term vitality. Your intake gives clinicians the foundation to determine whether Athene is appropriate for you.",
        "No rubber-stamp prescriptions. Eligibility and medical history always come first.",
      ],
    },
    {
      heading: "2. Complete clinical review",
      paragraphs: [
        "A licensed provider reviews your intake, relevant labs where available, and health history. If care is appropriate, you’ll receive a personalized protocol—not a generic template.",
        "Choose a 3- or 6-month plan upfront so your care team can plan titration, check-ins, and adjustments with a long horizon in mind.",
      ],
    },
    {
      heading: "3. Receive your personalized protocol",
      paragraphs: [
        "Your plan may include therapeutics where medically appropriate, lifestyle guidance, and clear markers to track progress. Everything is designed around your baseline—not an average patient.",
        "Education is part of the protocol. We want you to understand your metabolism so you can participate actively in your care.",
      ],
    },
    {
      heading: "4. Adapt over time",
      paragraphs: [
        "Metabolic care works best when the protocol evolves with you. Scheduled check-ins and biomarker review allow thoughtful dose and lifestyle adjustments.",
        "Three- and six-month subscriptions align incentives: we succeed when you sustain results, not when you churn through quick fixes.",
      ],
    },
  ],
};

export const aboutVitality: AboutPageContent = {
  title: "Built for vitality",
  subtitle: "Long-horizon care for energy, recovery, and metabolic health—not quick fixes.",
  backHref: "/about",
  backLabel: "About",
  heroImage: {
    src: NAV_IMAGES.aboutVitality,
    alt: "Person experiencing long-term vitality",
  },
  cta: { label: "Explore protocols", href: "/learn/protocol-areas" },
  sections: [
    {
      heading: "Vitality is a systems outcome",
      paragraphs: [
        "Energy, sleep quality, recovery, and metabolic markers don’t move in isolation. Athene treats them as connected signals in one plan—because that’s how your body actually works.",
        "Our programs are structured for people who want to invest in 3- or 6-month blocks of focused care, with provider oversight throughout.",
      ],
    },
    {
      heading: "Performance without burnout",
      paragraphs: [
        "Whether you’re optimizing for daily output or long-term healthspan, the goal is sustainable capacity—not spikes followed by crashes.",
        "Protocols balance therapeutics where appropriate with training, nutrition, sleep, and stress inputs that shape how your metabolism responds.",
      ],
    },
    {
      heading: "Designed for the long arc",
      paragraphs: [
        "Vitality isn’t a 30-day challenge. It’s the compound effect of aligned care over months and years.",
        "That’s why we offer upfront subscription plans: so you and your clinician can commit to the timeline metabolic change actually requires.",
      ],
    },
  ],
};

export const ABOUT_PAGES = {
  main: aboutMain,
  "how-it-works": aboutHowItWorks,
  vitality: aboutVitality,
} as const;
