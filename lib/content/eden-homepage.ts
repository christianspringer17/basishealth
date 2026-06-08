import { EXPECT_STEPS } from "@/lib/expect-steps";
import { EDITORIAL_IMAGES, MEDIA } from "@/lib/media";
import { ROUTES } from "@/lib/routes";
import { glpOneAssessmentHref } from "@/lib/cta";

const assessmentHref = glpOneAssessmentHref();

export const EDEN_HOMEPAGE = {
  promoBanner: [
    { text: "GLP-One programs from $183/mo", href: assessmentHref },
    { text: "Free discreet shipping on all plans", href: assessmentHref },
    { text: "Only charged if provider approves", href: assessmentHref },
  ],
  hero: {
    headline: "A continuous care ecosystem built for you",
    subhead:
      "Clinician-guided GLP-1 programs with transparent pricing — from your first assessment through ongoing metabolic support.",
    cta: "Start GLP-One assessment",
    secondaryCta: "View treatments",
    microcopy:
      "Provider review required. You're only charged if treatment is approved.",
    trustStrip: [
      "Licensed provider review",
      "U.S. pharmacy fulfillment",
      "Only charged if approved",
    ],
    offerCard: {
      eyebrow: "Available now",
      title: "GLP-One Tirzepatide",
      pricePrefix: "From",
      priceSuffix: "/mo on 3-month programs",
      bullets: [
        "Personalized dosing support",
        "Ongoing care access",
        "3-month plans available",
        "Free discreet shipping",
      ],
      cta: "Compare plans",
      ctaHref: ROUTES.glpOnePlans,
    },
  },
  treatments: {
    title: "Treatments",
    intro: "Clinician-guided GLP-1 programs with transparent pricing and ongoing support.",
    supporting: "Personalized pathways built around your biology — not a one-size-fits-all prescription.",
    compareCta: "Compare GLP-One plans",
    compareHref: ROUTES.glpOnePlans,
    priceNote: "on 3-month programs",
  },
  products: [
    {
      id: "glp1-weight-loss",
      tier: "weightloss" as const,
      imageAlt: "Personalized GLP-1 Treatments for weight loss",
      href: ROUTES.glpOne,
      image: MEDIA.productGlp1WeightLoss,
      ctaTone: "dark" as const,
      available: true,
    },
    {
      id: "glp1-microdose",
      tier: "microdose" as const,
      imageAlt: "GLP-1 Microdose for metabolic support",
      href: ROUTES.glpOnePlans,
      image: MEDIA.productGlp1Microdose,
      ctaTone: "light" as const,
      available: true,
    },
    {
      id: "hormone-support",
      imageAlt: "Hormone Support for optimized health",
      href: ROUTES.ourApproach,
      image: MEDIA.productHormoneSupport,
      ctaTone: "light" as const,
      available: false,
    },
  ],
  marquee: [
    { icon: "person", text: "Personalized support" },
    { icon: "truck", text: "100% entirely online" },
    { icon: "shield", text: "Only charged if approved" },
    { icon: "truck", text: "Discreet shipping with all plans" },
    { icon: "person", text: "Licensed provider review" },
    { icon: "shield", text: "U.S. pharmacy fulfillment" },
    { icon: "person", text: "Personalized dosing support" },
    { icon: "shield", text: "Ongoing care access" },
    { icon: "truck", text: "Compounded in the USA" },
  ],
  weightLoss: {
    headline: "Metabolic care that scales with you",
    subhead: "Explore how your body responds — then see what a personalized GLP-1 protocol could look like.",
    bullets: [
      "Provider-reviewed eligibility before any charge",
      "Tirzepatide protocols with dosing support over time",
      "Clear monthly pricing — no surprise fees",
    ],
    cta: "Start your assessment",
    statNote:
      "Projections are illustrative only. Individual results vary. Compounded medications are not FDA-approved as finished drug products. A licensed provider must confirm clinical appropriateness.",
    planner: {
      title: "Weight projection",
      lossLabel: "You could lose up to",
      currentLabel: "Starting weight",
      projectionNote: "Up to 15% of starting body weight — illustrative only. Individual results vary.",
      bmiTitle: "Body mass index",
      bmiHint: "Enter height and weight to see your BMI",
      bmiNote: "BMI is one input your provider reviews — not a guarantee of eligibility.",
    },
  },
  experience: {
    headline: "Care you can actually see",
    subhead: "Set your focus, watch momentum build, and stay on protocol — all in one view.",
    goalsCard: {
      image: EDITORIAL_IMAGES.wellnessField,
      imageAlt: "Member applying skincare during a wellness routine",
      goals: [
        { id: "weight", label: "Weight management" },
        { id: "metabolic", label: "Metabolic health" },
        { id: "hormone", label: "Hormone balance" },
      ],
    },
    metricsByGoal: {
      weight: {
        title: "Build steady momentum",
        value: "45%",
        bars: [
          { label: "Week 1", value: 20, height: 42 },
          { label: "Week 4", value: 30, height: 62 },
          { label: "Week 12", value: 45, height: 100, active: true },
        ],
      },
      metabolic: {
        title: "Improve metabolic markers",
        value: "38%",
        bars: [
          { label: "Baseline", value: 18, height: 38 },
          { label: "Month 2", value: 28, height: 58 },
          { label: "Month 6", value: 38, height: 88, active: true },
        ],
      },
      hormone: {
        title: "Stabilize hormone rhythm",
        value: "52%",
        bars: [
          { label: "Start", value: 22, height: 44 },
          { label: "Adjust", value: 36, height: 68 },
          { label: "Maintain", value: 52, height: 100, active: true },
        ],
      },
    },
    progress: {
      title: "Track your protocol",
      daysLabel: "30 days",
      completed: 4,
      completedLabel: "Check-ins done",
      weekdays: ["S", "M", "T", "W", "T", "F", "S"],
      days: [
        "empty", "empty", "empty", "empty", "empty", "empty", "empty",
        "empty", "done-1", "done-2", "striped", "empty", "empty", "empty",
        "empty", "empty", "done-3", "striped", "empty", "done-4", "empty",
        "empty", "striped", "empty", "empty", "empty", "empty", "empty",
        "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      ],
    },
  },
  howItWorks: {
    headline: "From assessment to ongoing care",
    subhead: "Four clear steps — no waiting rooms, no guesswork.",
    timeBadge: "~5 min intake",
    trustNote: "No charge unless approved",
    steps: [
      {
        id: "assess",
        label: "Complete intake",
        detail: "Answer a focused health assessment in about five minutes — on your schedule.",
        name: "Licensed provider review",
        role: "Clinical eligibility",
        credentials: "U.S.-licensed providers · HIPAA-conscious intake",
        stat: "100% reviewed",
        image: EXPECT_STEPS[0].image,
        imageAlt: EXPECT_STEPS[0].alt,
        gradient: "sky",
      },
      {
        id: "review",
        label: "Provider review",
        detail: "A licensed clinician reviews your history and confirms clinical appropriateness before any charge.",
        name: "U.S. pharmacy fulfillment",
        role: "Fulfillment standards",
        credentials: "State-licensed pharmacy partners · Discreet shipping",
        stat: "USA compounded",
        image: EXPECT_STEPS[1].image,
        imageAlt: EXPECT_STEPS[1].alt,
        gradient: "mist",
      },
      {
        id: "deliver",
        label: "Discreet delivery",
        detail: "If approved, medication ships from U.S. pharmacy partners with free discreet shipping.",
        name: "Personalized dosing support",
        role: "Ongoing care",
        credentials: "Dosing · Tolerance · Progress · Refills",
        stat: "Continuous",
        image: EXPECT_STEPS[2].image,
        imageAlt: EXPECT_STEPS[2].alt,
        gradient: "pearl",
      },
      {
        id: "support",
        label: "Stay on protocol",
        detail: "Ongoing dosing support, progress tracking, and refill access — all in one connected view.",
        name: "Connected care system",
        role: "Long-term protocols",
        credentials: "Assessment · Review · Support · Expansion paths",
        stat: "One ecosystem",
        image: EXPECT_STEPS[3].image,
        imageAlt: EXPECT_STEPS[3].alt,
        gradient: "slate",
      },
    ],
  },
  glpOneStatement: {
    title: "GLP-1s change appetite.",
    subtitle: "Care determines outcomes.",
    body: "GLP-One is clinician-guided treatment with compounded tirzepatide. Eligibility review helps determine whether treatment is appropriate for you, with personalized dosing and ongoing clinical support.",
    ctaLabel: "Is GLP-One right for me?",
  },
  online: {
    headline: "Your entire protocol, online",
    subhead: "Manage care on your schedule with provider support at every step.",
    cta: "Start your assessment",
    image: MEDIA.homeIntroProduct,
    imageAlt: "Basis GLP-One care kit",
    features: [
      {
        icon: "person" as const,
        title: "Ongoing care access",
        description: "Reach your care team and adjust protocols without office visits or hold times.",
      },
      {
        icon: "shield" as const,
        title: "Clinician-guided protocols",
        description: "Licensed providers review eligibility and personalize dosing as your body responds.",
      },
      {
        icon: "truck" as const,
        title: "Discreet home delivery",
        description: "Free shipping on approved plans — delivered in unmarked packaging to your door.",
      },
      {
        icon: "shield" as const,
        title: "Transparent pricing",
        description: "Clear monthly pricing with no surprise fees — charged only after provider approval.",
      },
    ],
    disclaimer:
      "Compounded medications are not FDA-approved as finished drug products. Prescriptions are issued only after an online consultation with a licensed provider.",
  },
  values: {
    headline: "Built for long-term metabolic health",
    subhead: "Science-led protocols with the continuity of real care — not a one-time prescription.",
    cta: "Start your assessment",
    badges: [
      "Provider reviewed",
      "U.S. fulfillment",
      "Discreet delivery",
      "No charge unless approved",
      "Gender-neutral care",
      "Longevity-focused",
    ],
  },
  faq: {
    headline: "Common questions",
    subhead: "Quick answers about eligibility, pricing, and how Basis works.",
    cta: "Still unsure? Start your assessment",
    items: [
      {
        question: "What states do you serve GLP-1 programs?",
        answer:
          "Basis serves patients across the United States where our provider and pharmacy partners are licensed. Start your assessment to confirm eligibility in your state.",
      },
      {
        question: "Do you take insurance?",
        answer:
          "No — you don't need insurance to begin. Our care model is designed to make access straightforward without requiring coverage.",
      },
      {
        question: "What medications do your doctors prescribe?",
        answer:
          "Licensed providers may prescribe compounded tirzepatide when clinically appropriate. Compounded medications are not FDA-approved as finished drug products. Prescription required.",
      },
      {
        question: "Do your plans include prescriptions and medications?",
        answer:
          "Eligible plans include provider review, dosing support, and ongoing care access. Medication is included where medically appropriate and prescribed after clinical review.",
      },
      {
        question: "Am I charged before provider approval?",
        answer:
          "No. You are only charged if a licensed provider determines treatment is appropriate after reviewing your assessment.",
      },
    ],
  },
  guides: {
    headline: "Make root cause healing the standard",
    subhead: "Physician-informed guides to help you understand protocols, expectations, and long-term health.",
    links: [
      {
        label: "Weight Loss",
        description: "Explore personalized GLP-1 pathways, pricing, and what to expect on program.",
        href: ROUTES.glpOne,
        image: EXPECT_STEPS[2].image,
        imageAlt: EXPECT_STEPS[2].alt,
      },
      {
        label: "Longevity",
        description: "Learn about our longevity approach and connected care system.",
        href: ROUTES.ourApproach,
        image: EDITORIAL_IMAGES.lifeUnlockedMetabolic,
        imageAlt: "Member focused on metabolic wellness outdoors",
      },
      {
        label: "What to Expect",
        description: "Understand what to expect in your first months on program.",
        href: ROUTES.learnWhatToExpect,
        image: EXPECT_STEPS[0].image,
        imageAlt: EXPECT_STEPS[0].alt,
      },
      {
        label: "Learn",
        description: "Read physician-informed essays on metabolic health and GLP-1 therapy.",
        href: ROUTES.learn,
        image: "/images/editorial/learn-ocean-waves.png",
        imageAlt: "Aerial view of ocean waves breaking over dark coastal rocks",
      },
    ],
  },
} as const;
