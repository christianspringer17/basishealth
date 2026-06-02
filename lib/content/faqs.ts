import type { FaqItem } from "@/components/marketing/FaqAccordion";
import { max3MonthSavings } from "@/lib/pricing";
import { SITE_EMAIL } from "@/lib/site";

export { FAQ_CATEGORIES, type FaqCategory } from "@/lib/content/faq-categories";
export { HOME_FAQS } from "@/lib/content/faq-categories";

const maxSavings = max3MonthSavings();

/** /faq page — membership + platform (legacy flat lists) */
export const MEMBERSHIP_FAQS: FaqItem[] = [
  {
    question: "What is Basis?",
    answer:
      "Basis is a membership-based protocol clinic starting with metabolic care. Members receive access to provider review, protocol recommendations, ongoing support, and recalibration.",
  },
  {
    question: "What does membership include?",
    answer:
      "Membership includes portal access, provider review, personalized protocol recommendations, support, and recalibration. Membership starts at $60/month.",
  },
  {
    question: "Are therapies included?",
    answer:
      "No. Therapies, labs, medications, peptides, supplements, and other interventions are purchased separately when clinically appropriate.",
  },
  {
    question: "Are labs required?",
    answer:
      "No. Labs are optional and may be recommended when they help refine your protocol.",
  },
  {
    question: "Is Basis a GLP-1 company?",
    answer:
      "No. GLP-1 therapy may be part of Basis Metabolic when clinically appropriate, but Basis is built around protocol-based care.",
  },
  {
    question: "What protocols are available?",
    answer:
      "Basis Metabolic is the first live protocol. Additional tracks for hormones, longevity, recovery, and performance are coming soon.",
  },
  {
    question: "Can I access therapy without membership?",
    answer:
      "No. Basis is membership-based. Therapies are available only through the appropriate care pathway after intake and provider review.",
  },
  {
    question: "How do I apply?",
    answer:
      "Apply for membership on our homepage. When enrollment opens, intake runs through our clinical partner. Access to therapy is subject to provider review, eligibility, and applicable regulations.",
  },
];

/** GLP-One page — product, pricing, eligibility */
export const GLP_FAQS: FaqItem[] = [
  {
    question: "How does GLP-1 therapy relate to Basis Metabolic?",
    answer:
      "GLP-1 therapy may be included as part of a Basis Metabolic protocol when clinically appropriate. Membership is required and starts at $60/month. GLP-1 tiers on this page reflect therapy pricing separate from membership.",
  },
  {
    question: "What is tirzepatide?",
    answer:
      "Tirzepatide is a GLP-1/GIP receptor agonist used under clinician supervision for metabolic health. Your provider determines whether it is appropriate based on your history and goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary. Many members notice appetite and energy shifts within weeks; meaningful metabolic change often requires months of consistent protocol and follow-up. Individual outcomes vary.",
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
      "No. Eligibility depends on medical history, goals, and clinician review. Apply for membership for launch updates or complete checkout when enrollment is live.",
  },
  {
    question: "Do you take FSA/HSA?",
    answer:
      "Many members use HSA/FSA for eligible clinical services. Confirm with your plan administrator.",
  },
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "How do I get started?",
    answer:
      "Apply for membership on our homepage. When enrollment opens, checkout runs through our clinical partner—no patient intake form on this site.",
  },
  {
    question: "Where is Basis available?",
    answer:
      "We are building toward nationwide availability. Apply for membership or contact us for the latest on your state.",
  },
  {
    question: "How do I contact us?",
    answer: `Email ${SITE_EMAIL} for general questions. Billing and clinical support lines will be listed on your member materials when you enroll.`,
  },
];

export const ALL_FAQS: FaqItem[] = [
  ...MEMBERSHIP_FAQS,
  ...GLP_FAQS,
  ...GENERAL_FAQS,
];
