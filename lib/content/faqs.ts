import type { FaqItem } from "@/components/marketing/FaqAccordion";
import { max3MonthSavings } from "@/lib/pricing";
import { SITE_EMAIL } from "@/lib/site";

const maxSavings = max3MonthSavings();

/** Single FAQ set for /glp-one — product, pricing, and eligibility */
export const GLP_FAQS: FaqItem[] = [
  {
    question: "What is tirzepatide?",
    answer:
      "Tirzepatide is a GLP-1/GIP receptor agonist used under clinician supervision for metabolic health. Your provider determines whether it is appropriate based on your history and goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timelines vary. Many patients notice appetite and energy shifts within weeks; meaningful metabolic change often requires months of consistent protocol and follow-up.",
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
    question: "What is included in my protocol?",
    answer:
      "Clinician review, personalized protocol design, scheduled check-ins, and dosing support. Medication is included where medically appropriate and prescribed.",
  },
  {
    question: "Is GLP-One right for everyone?",
    answer:
      "No. Eligibility depends on medical history, goals, and clinician review. Join the waitlist for launch updates or complete checkout when enrollment is live.",
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
      "Join the waitlist on our homepage for email and SMS updates. When enrollment opens, checkout runs through our clinical partner—no patient intake form on this site.",
  },
  {
    question: "Where is Basis Health available?",
    answer:
      "We are building toward nationwide availability. Join the waitlist or contact us for the latest on your state.",
  },
  {
    question: "How do I contact support?",
    answer:
      `Email ${SITE_EMAIL} for general questions. Billing and clinical support lines will be listed on your member materials when you enroll.`,
  },
];

export const ALL_FAQS: FaqItem[] = [...GLP_FAQS, ...GENERAL_FAQS];
