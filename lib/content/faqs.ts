import type { FaqItem } from "@/components/marketing/FaqAccordion";
import { max3MonthSavings } from "@/lib/pricing";
import { SITE_EMAIL } from "@/lib/site";

export { FAQ_CATEGORIES, type FaqCategory } from "@/lib/content/faq-categories";
export { HOME_FAQS } from "@/lib/content/faq-categories";

const maxSavings = max3MonthSavings();

/** /membership page — platform & plans */
export const MEMBERSHIP_FAQS: FaqItem[] = [
  {
    question: "What is Basis?",
    answer:
      "Basis is a physician-guided metabolic health brand starting with GLP-1 and metabolic protocols. You receive provider review, protocol recommendations, ongoing support, and recalibration when clinically appropriate.",
  },
  {
    question: "What's included in a plan?",
    answer:
      "Plans include licensed provider review, personalized protocol recommendations, support, and refill coordination. Therapy and medication are priced on the plan you choose after clinical review.",
  },
  {
    question: "Are therapies included?",
    answer:
      "Clinical care is included in your plan pricing. Medications and add-on therapies are prescribed and billed according to your protocol when clinically appropriate.",
  },
  {
    question: "Are labs required?",
    answer:
      "No. Labs are optional and may be recommended when they help refine your protocol.",
  },
  {
    question: "Is Basis a GLP-1 company?",
    answer:
      "No. GLP-1 therapy may be part of Basis Metabolic when clinically appropriate, but Basis is built around physician-guided protocol care.",
  },
  {
    question: "What protocols are available?",
    answer:
      "Basis Metabolic is the first live protocol. Additional tracks for hormones, longevity, recovery, and performance are coming soon.",
  },
  {
    question: "Can I access therapy without completing intake?",
    answer:
      "No. Therapies are available only after online assessment and provider review through our clinical partner.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start your assessment on our homepage. When enrollment is live, intake runs through our clinical partner. Access to therapy is subject to provider review, eligibility, and applicable regulations.",
  },
];

/** GLP-One page — product, pricing, eligibility */
export const GLP_FAQS: FaqItem[] = [
  {
    question: "How does GLP-1 therapy relate to Basis Metabolic?",
    answer:
      "GLP-1 therapy may be included as part of a Basis Metabolic protocol when clinically appropriate. Plan tiers on this page reflect therapy and care pricing for the duration you select.",
  },
  {
    question: "What is tirzepatide?",
    answer:
      "Tirzepatide is a GLP-1/GIP receptor agonist used under clinician supervision for metabolic health. Your provider determines whether it is appropriate based on your history and goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary. Many people notice appetite and energy shifts within weeks; meaningful metabolic change often requires months of consistent protocol and follow-up. Individual outcomes vary.",
  },
  {
    question: "Microdose vs. weight loss — what's the difference?",
    answer:
      "Microdose ($240/mo) emphasizes metabolic optimization with lower starting doses. Weight Loss ($340/mo) uses a titration path focused on body-composition goals. Your clinician recommends the appropriate tier after eligibility review.",
  },
  {
    question: "Why offer 1- and 3-month options?",
    answer: `Monthly plans offer flexibility. Three-month plans bundle your care upfront—our recommended path for titration and the best per-month value (save up to $${maxSavings} vs. paying monthly).`,
  },
  {
    question: "What is included in a GLP-1 therapy plan?",
    answer:
      "Eligible plans include clinician review, personalized protocol design, scheduled check-ins, and dosing support. Medication may be included in the therapy plan where medically appropriate and prescribed. Access is subject to provider review and eligibility.",
  },
  {
    question: "Is GLP-One right for everyone?",
    answer:
      "No. Eligibility depends on medical history, goals, and clinician review. Start your assessment for launch updates or complete checkout when enrollment is live.",
  },
  {
    question: "Do you take FSA/HSA?",
    answer:
      "Many people use HSA/FSA for eligible clinical services. Confirm with your plan administrator.",
  },
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "How do I get started?",
    answer:
      "Start your assessment on our homepage. When enrollment is live, checkout runs through our clinical partner—no patient intake form on this site.",
  },
  {
    question: "Where is Basis available?",
    answer:
      "We are building toward nationwide availability. Start your assessment or contact us for the latest on your state.",
  },
  {
    question: "How do I contact us?",
    answer: `Email ${SITE_EMAIL} for general questions. Billing and clinical support lines will be listed in your care materials after enrollment.`,
  },
];

export const ALL_FAQS: FaqItem[] = [
  ...MEMBERSHIP_FAQS,
  ...GLP_FAQS,
  ...GENERAL_FAQS,
];
