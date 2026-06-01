/**
 * v2 homepage copy — protocol-first membership platform.
 * Components consume these strings in Phase 2+.
 */

export const HOME_HERO = {
  headline:
    "Protocol-based care for metabolic health, longevity, and performance.",
  subheadline:
    "Basis gives members access to physician-guided protocols, secure portal access, ongoing support, and personalized therapies designed around long-term health — not one-time medication sales.",
  supportingLine:
    "Membership includes physician review, personalized protocol recommendations, portal access, messaging, and quarterly recalibration. Therapies, medications, labs, and supplements are purchased separately when clinically appropriate.",
} as const;

export const HOME_PROBLEM = {
  headline: "Modern healthcare is too transactional.",
  body: "Most telehealth platforms are built around a single prescription. Most diagnostic platforms stop after delivering lab results. Most wellness brands sell products without enough clinical structure.",
  conclusion:
    "Basis was built for a different model: structured protocols, physician review, ongoing support, and care that evolves over time.",
  bullets: [
    "Not just a prescription",
    "Not just a lab report",
    "Not just a product",
    "A protocol-driven system for long-term health",
  ],
} as const;

export const HOME_MODEL = {
  headline: "The protocol is the product.",
  body: "Basis starts with your goals, health history, and clinical review. From there, members receive personalized protocols designed to support progress over time.",
  detail:
    "A protocol may include care guidance, check-ins, progress tracking, therapy recommendations, optional diagnostics, and recalibration as your needs change.",
  coreIdea: "Care should not end after the first prescription.",
  framework: [
    "Assessment",
    "Review",
    "Protocol",
    "Track",
    "Recalibrate",
  ],
} as const;

export const HOME_HOW_IT_WORKS = {
  headline: "How Basis works.",
  steps: [
    {
      title: "Apply for membership",
      description:
        "Start with a focused health assessment so we can understand your goals, history, and eligibility.",
    },
    {
      title: "Complete your intake",
      description:
        "Share relevant health information through a secure patient portal.",
    },
    {
      title: "Physician review",
      description:
        "A licensed provider reviews your information and determines what care may be appropriate.",
    },
    {
      title: "Receive your protocol",
      description:
        "If appropriate, you receive a personalized protocol designed around your goals.",
    },
    {
      title: "Track and recalibrate",
      description:
        "Use your portal for progress tracking, messaging, check-ins, and quarterly protocol recalibration.",
    },
  ],
  disclaimer:
    "All care is subject to provider review. Not every person will qualify for every protocol or therapy.",
} as const;

export const HOME_MEMBERSHIP = {
  headline: "Membership is the foundation of care.",
  body: "Basis membership gives you access to the care layer: secure portal access, physician review, protocol recommendations, messaging, progress tracking, and quarterly recalibration.",
  priceLine: "Membership starts at $60/month.",
  includes: [
    "Secure patient portal",
    "Health intake",
    "Physician review",
    "Personalized protocol recommendation",
    "Ongoing check-ins",
    "Messaging and care support",
    "Progress tracking",
    "Quarterly protocol recalibration",
    "Access to therapies when clinically appropriate",
  ],
  excludes: [
    "Medications",
    "Peptides",
    "Labs",
    "Supplements",
    "Other therapies",
  ],
  clarifying:
    "Therapies, diagnostics, and medications are purchased separately when appropriate. This keeps protocols personalized rather than forcing every member into the same bundle.",
} as const;

export const HOME_PROTOCOLS = {
  headline: "Protocols built around your goals.",
  subheadline:
    "Premium care pathways — not product SKUs. Metabolic health is our initial focus.",
} as const;

export const HOME_THERAPIES = {
  headline: "Therapies are tools inside the protocol.",
  body: "Basis does not start with a medication. Basis starts with a protocol.",
  detail:
    "When clinically appropriate, your protocol may include prescription therapies, peptides, GLP-1s, diagnostics, supplements, or other interventions.",
  categories: [
    "GLP-1s",
    "Peptides",
    "Diagnostics",
    "Supplements",
    "Future therapies",
  ],
  disclaimer:
    "All therapies are subject to provider review and clinical appropriateness.",
} as const;

export const HOME_DIAGNOSTICS = {
  headline: "Diagnostics when they add value.",
  body: "Labs can help personalize care, but they are not required to begin.",
  detail:
    "Some members may benefit from deeper biomarker insight. Others may start with a structured intake, physician review, and a protocol that can be refined over time.",
  keyLine: "Diagnostics help refine the protocol. They are not the protocol.",
  points: [
    "Labs are optional",
    "Labs are not included for free by default",
    "Labs may be recommended when clinically useful",
    "Labs may be available as add-ons or within specific protocol bundles",
  ],
  statusNote:
    "Diagnostic offerings are expanding. Availability may vary by protocol and implementation.",
} as const;

export const HOME_QUARTERLY = {
  headline: "Built around quarterly progress.",
  body: "Basis is designed for care that evolves. Members may have access to quarterly protocol bundles that align therapies, check-ins, and recalibration into a structured rhythm.",
  examples: [
    "Quarterly Metabolic Protocol",
    "Quarterly Recovery Protocol",
    "Quarterly Longevity Protocol",
    "Quarterly Performance Protocol",
  ],
  language: [
    "Structured protocol cycle",
    "Quarterly recalibration",
    "Therapy alignment",
    "Progress review",
    "Ongoing adjustment",
  ],
  disclaimer:
    "Bundle availability and pricing will be shared when clinically appropriate protocols are live. This is a care rhythm — not an ecommerce package.",
} as const;

export const HOME_PHILOSOPHY = {
  headline: "Healthcare should be continuous.",
  body: "Basis was built around a simple belief: better health requires structure, accountability, and personalization over time.",
  detail:
    "We are not building another online medication storefront. We are building a protocol-based care platform for people who want a more intentional, guided way to improve their health.",
  pillars: [
    "Telehealth access",
    "Diagnostic insight",
    "Long-term protocol guidance",
  ],
  center: "But the center of the model is the protocol.",
} as const;

export const HOME_PROTOCOL_NOTES = {
  headline: "Protocol Notes",
  body: "Editorial resources on metabolic health, protocols, therapies, and long-term care — written for members who want depth without hype.",
  themes: [
    "Metabolic health",
    "GLP-1s as part of a broader protocol",
    "Peptide education",
    "Labs and biomarkers",
    "Recovery and longevity",
    "How protocols evolve over time",
  ],
} as const;

export const HOME_FINAL_CTA = {
  headline: "Start with the protocol.",
  body: "Apply for Basis membership and begin with a structured assessment. If appropriate, a licensed provider will review your information and help determine the right protocol for your goals.",
  supportingLine:
    "Membership is required. Therapies are available separately when clinically appropriate.",
} as const;
