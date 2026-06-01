import type { FaqItem } from "@/components/marketing/FaqAccordion";
import { max3MonthSavings } from "@/lib/pricing";
import { SITE_EMAIL } from "@/lib/site";

const maxSavings = max3MonthSavings();

/** v2 membership & platform FAQs — homepage /faq page */
export const MEMBERSHIP_FAQS: FaqItem[] = [
  {
    question: "What is Basis Health?",
    answer:
      "Basis Health is a membership-based protocol platform for metabolic health, longevity, recovery, and performance. Members receive access to a secure patient portal, physician review, personalized protocol recommendations, ongoing support, and quarterly recalibration. Therapies, medications, peptides, labs, and supplements may be recommended when clinically appropriate and are purchased separately.",
  },
  {
    question: "Is Basis Health a GLP-1 company?",
    answer:
      "No. GLP-1s may be part of certain metabolic protocols when clinically appropriate, but Basis is not a GLP-1 storefront. Basis is built around physician-guided protocols and ongoing care.",
  },
  {
    question: "What does membership include?",
    answer:
      "Membership includes secure portal access, health intake, physician review, personalized protocol recommendations, messaging, progress tracking, ongoing check-ins, and quarterly protocol recalibration.",
  },
  {
    question: "Does membership include medications or peptides?",
    answer:
      "No. Medications, peptides, and other therapies are purchased separately when clinically appropriate. Membership gives you access to the care platform, physician review, protocol recommendations, and ongoing support.",
  },
  {
    question: "Can I buy peptides or GLP-1s without becoming a member?",
    answer:
      "No. Basis Health is membership-based. Therapies are only available through the appropriate care pathway after intake and provider review.",
  },
  {
    question: "Are labs required?",
    answer:
      "No. Labs are not required to begin. Some protocols may benefit from diagnostics, and labs may be recommended as optional add-ons when they can help personalize care.",
  },
  {
    question: "Are labs included for free?",
    answer:
      "No. Labs are not included for free by default. If diagnostics are recommended, they are purchased separately or may be included in specific protocol bundles if available.",
  },
  {
    question: "Why is membership required?",
    answer:
      "Membership supports the ongoing care model. Basis is designed around protocols, check-ins, progress tracking, messaging, and quarterly recalibration — not one-time medication access.",
  },
  {
    question: "How is Basis different from typical telehealth?",
    answer:
      "Most telehealth companies are built around quick access to a prescription. Basis is built around structured protocols, ongoing support, and care that can evolve over time.",
  },
  {
    question: "How is Basis different from Function or Superpower?",
    answer:
      "Function and Superpower are primarily diagnostic-first platforms. Basis is protocol-first. Diagnostics may support care, but the core product is membership access to physician-guided protocols and ongoing recalibration.",
  },
  {
    question: "How is Basis similar to The Protocole?",
    answer:
      "Basis shares the belief that membership, protocols, and ongoing guidance are more durable than transactional medication sales. Basis adapts that model around metabolic health, longevity, recovery, and performance, using therapies only when appropriate.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "You complete a health assessment and intake through the secure portal. A licensed provider reviews your information. If appropriate, you receive a personalized protocol and may access recommended therapies, check-ins, and ongoing support.",
  },
  {
    question: "Do I need to be approved?",
    answer:
      "Yes. All care is subject to provider review. Not every person will qualify for every protocol or therapy.",
  },
  {
    question: "Can my protocol change over time?",
    answer:
      "Yes. Protocols are designed to evolve based on progress, goals, symptoms, preferences, and provider review.",
  },
  {
    question: "What types of protocols are available?",
    answer:
      "Basis begins with metabolic health as the initial focus, with additional protocol pathways for longevity, recovery, performance, and cognitive optimization. Availability may vary over time.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "No. Individual outcomes vary. Basis provides access to structured care, clinical review, and ongoing support, but results depend on many factors including health history, adherence, lifestyle, and clinical appropriateness.",
  },
  {
    question: "Is Basis appropriate for emergencies?",
    answer:
      "No. Basis is not an emergency service. If you are experiencing a medical emergency, call emergency services immediately.",
  },
  {
    question: "Where are prescriptions fulfilled?",
    answer:
      "When a therapy is prescribed, fulfillment is handled through appropriate pharmacy partners through the care platform. Availability may vary based on the therapy, patient eligibility, and applicable regulations.",
  },
  {
    question: "Can I cancel membership?",
    answer:
      "Membership can be canceled before the next billing cycle. Cancellation stops future membership billing but does not automatically cancel, refund, or reverse medications, labs, supplements, or other therapies that have already been ordered, processed, prescribed, or fulfilled. Final cancellation and refund terms may vary and should be reviewed before launch.",
  },
  {
    question: "Is Basis available in every state?",
    answer:
      "Basis Health is available only in states where provider coverage, pharmacy fulfillment, and applicable care workflows are supported. Availability may vary by protocol, therapy, and patient eligibility. After you apply, we will confirm whether care is available in your state.",
  },
];

/** GLP therapy detail — /glp-one page (Basis Metabolic) */
export const GLP_FAQS: FaqItem[] = [
  {
    question: "How does GLP-1 therapy relate to Basis Metabolic?",
    answer:
      "GLP-1 therapy may be included as part of a Basis Metabolic protocol when clinically appropriate. Membership is required; GLP-1 pricing covers the therapy tier when prescribed — not the full care platform.",
  },
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
    question: "What is included in my GLP-1 protocol tier?",
    answer:
      "Clinician review, personalized protocol design, scheduled check-ins, and dosing support for the prescribed therapy tier. Pricing and availability may vary based on eligibility, provider review, pharmacy, and applicable regulations.",
  },
  {
    question: "Is GLP-One right for everyone?",
    answer:
      "No. Eligibility depends on medical history, goals, and clinician review. Apply for membership to begin the care pathway.",
  },
  {
    question: "Do you take FSA/HSA?",
    answer:
      "Many members use HSA/FSA for eligible clinical services. Confirm with your plan administrator.",
  },
];

/** General support — contact & application */
export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "How do I get started?",
    answer:
      "Apply for membership on our homepage. When enrollment opens fully, intake runs through our clinical partner platform.",
  },
  {
    question: "How do I contact support?",
    answer: `Email ${SITE_EMAIL} for general questions. Billing and clinical support lines will be listed on your member materials when you enroll.`,
  },
];

export const ALL_FAQS: FaqItem[] = [
  ...MEMBERSHIP_FAQS,
  ...GLP_FAQS,
  ...GENERAL_FAQS,
];
