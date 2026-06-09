import { EXPECT_STEPS } from "@/lib/expect-steps";
import { EDITORIAL_IMAGES, MEDIA } from "@/lib/media";
import { ROUTES } from "@/lib/routes";
import { glpOneAssessmentHref } from "@/lib/cta";

const assessmentHref = glpOneAssessmentHref();

export const EDEN_HOMEPAGE = {
  promoBanner: [
    { text: "GLP-One programs from $183/mo", href: assessmentHref },
    { text: "Start your assessment in ~5 minutes", href: assessmentHref },
    { text: "Only charged if provider approves", href: assessmentHref },
    { text: "Free discreet shipping on all plans", href: assessmentHref },
    { text: "Licensed U.S. provider review", href: assessmentHref },
    { text: "Transparent monthly pricing", href: assessmentHref },
  ],
  hero: {
    headlineRotate: [
      "A care ecosystem",
      "Modern care",
      "Hormone health",
      "Weight loss",
      "Anti-aging",
      "Performance",
    ],
    headlineSuffix: "built for you",
    tagline: "Physician-guided protocols for long-term health",
    trustHighlights: [
      { icon: "flag" as const, text: "Licensed U.S. providers" },
      { icon: "delivery" as const, text: "Discreet delivery" },
      { icon: "no-insurance" as const, text: "No insurance needed" },
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
      ctaHref: ROUTES.pricing,
    },
  },
  treatments: {
    title: "Treatments",
    intro: "Clinician-guided GLP-1 programs with transparent pricing and ongoing support.",
    supporting: "Personalized pathways built around your biology — not a one-size-fits-all prescription.",
    compareCta: "Compare GLP-One plans",
    compareHref: ROUTES.pricing,
    priceNote: "on 3-month programs",
  },
  products: [
    {
      id: "lean",
      tier: "weightloss" as const,
      imageAlt: "Lean — body composition and metabolic health",
      href: ROUTES.treatmentsLean,
      image: MEDIA.productLean,
      ctaTone: "dark" as const,
      showLearnMore: true,
      available: true,
    },
    {
      id: "regulation",
      imageAlt: "Regulation — hormonal balance and optimization",
      href: ROUTES.treatmentsRegulation,
      image: MEDIA.productRegulation,
      ctaTone: "light" as const,
      showLearnMore: true,
      available: false,
    },
    {
      id: "vitality",
      imageAlt: "Vitality — cellular energy and healthy aging with NAD+",
      href: ROUTES.treatmentsVitality,
      image: MEDIA.productVitality,
      ctaTone: "light" as const,
      showLearnMore: true,
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
  weightProgram: {
    headline: "Reach your weight goals with",
    headlineAccent: "care built around you",
    bullets: [
      {
        icon: "provider" as const,
        text: "Licensed provider review — eligibility confirmed before any charge",
      },
      {
        icon: "medication" as const,
        text: "GLP-One tirzepatide protocols with dosing support over time",
      },
      {
        icon: "pricing" as const,
        text: "Clear monthly pricing — no insurance required",
      },
    ],
    primaryCta: "Start your assessment",
    secondaryCta: "Check your eligibility",
    statBadge: {
      label: "Weight loss",
      value: "30",
      unit: "lbs",
    },
    disclaimer:
      "Illustrative only. Individual results vary. Compounded medications are not FDA-approved as finished drug products. A licensed provider must confirm clinical appropriateness.",
    image: EDITORIAL_IMAGES.weightProgramCutout,
    imageAlt: "Member in athletic wear looking toward personalized metabolic care",
  },
  weightLoss: {
    headline: "Discover what's possible for your body",
    subhead: "See how much you could lose — then check your BMI below.",
    cta: "Start your assessment",
    statNote:
      "Projections are illustrative only. Individual results vary. Compounded medications are not FDA-approved as finished drug products. A licensed provider must confirm clinical appropriateness.",
    planner: {
      lossLabel: "Your potential weight loss:",
      currentLabel: "Starting weight",
      projectionNote: "Up to 15% of starting body weight — illustrative only. Individual results vary.",
      productImage: EDITORIAL_IMAGES.balanceVialCard,
      productImageAlt: "Basis Health Balance TRT prescription vial",
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
    headline: "Your entire protocol, online",
    subhead: "Manage care on your schedule with provider support at every step.",
    trustNote: "No charge unless approved",
    promoCards: {
      vitality: {
        variant: "photo" as const,
        headline: "Embrace cellular vitality",
        subhead: "$299 / every 4 weeks",
        cta: "Start my journey",
        ctaHref: ROUTES.treatmentsVitality,
        image: EDITORIAL_IMAGES.nadHandVial,
        imageAlt: "Hand holding Basis Health NAD+ prescription vial",
      },
      skin: {
        variant: "product" as const,
        headline: "Restore and refresh your skin",
        subhead: "Plans beginning at $299/mo",
        cta: "Begin today",
        ctaHref: ROUTES.pricing,
        productImage: EDITORIAL_IMAGES.glutathioneVial,
        productAlt: "Basis Health Glutathione prescription vial",
      },
    },
    steps: [
      {
        id: "provider",
        label: "24/7 Provider Access",
        headline: "24/7 Provider Access",
        image: EDITORIAL_IMAGES.howItWorksProviderSupport,
        imageAlt: "Licensed provider in a white coat with stethoscope",
        fit: "contain" as const,
      },
      {
        id: "goals",
        label: "Manage goals in one place",
        image: EDITORIAL_IMAGES.howItWorksGoalsApp,
        imageAlt: "Manage goals in one place — weight trend and prescription status",
        fit: "cover" as const,
      },
      {
        id: "treatments",
        label: "Clinically-proven treatments",
        image: EDITORIAL_IMAGES.howItWorksTreatments,
        imageAlt: "Clinically-proven, FDA-approved treatments",
        fit: "cover" as const,
      },
      {
        id: "shipping",
        label: "Free expedited shipping",
        image: EDITORIAL_IMAGES.howItWorksShipping,
        imageAlt: "Free expedited shipping to your door",
        fit: "cover" as const,
      },
    ],
  },
  glpOneStatement: {
    title: "Your Path to Optimal Health Begins Today",
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
        href: ROUTES.pricing,
        image: EXPECT_STEPS[2].image,
        imageAlt: EXPECT_STEPS[2].alt,
      },
      {
        label: "Longevity",
        description: "Learn about our approach to long-term metabolic care.",
        href: ROUTES.about,
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
