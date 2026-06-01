export type ExpectStep = {
  title: string;
  body: string;
  image: string;
  imageMobile?: string;
  alt: string;
};

export const EXPECT_STEPS: ExpectStep[] = [
  {
    title: "Eligibility screening & clinician review",
    body: "Your intake gives clinicians foundational data to determine whether GLP-1 therapy is appropriate. Clinician approval always prioritizes your health—not convenience.",
    image: "/images/expect/step-1-eligibility.webp",
    imageMobile: "/images/expect/step-1-eligibility-mobile.webp",
    alt: "Parent gently holding a baby, close-up on caring hands",
  },
  {
    title: "Personalized GLP-1 protocol",
    body: "No two protocols look the same. We work with you to select therapy appropriate for your goals and biology, with specific care given to starting dose and titration.",
    image: "/images/expect/step-2-protocol.webp",
    imageMobile: "/images/expect/step-2-protocol-mobile.webp",
    alt: "Woman in a sage jacket looking across rolling green hills",
  },
  {
    title: "Ongoing adaptive care",
    body: "We monitor progress and adjust dosage as needed. Regular check-ins fine-tune treatment so your protocol evolves with your body—not against it.",
    image: "/images/expect/step-3-care.webp",
    alt: "Man resting peacefully on his back in a sunlit green field",
  },
  {
    title: "Metabolic literacy",
    body: "GLP–One is more than a prescription. Education and personalized counseling help you understand your metabolism so you can participate actively in recovery.",
    image: "/images/expect/step-4-literacy.webp",
    imageMobile: "/images/expect/step-4-literacy-mobile.webp",
    alt: "Yellow wildflowers in soft focus against a pale sky",
  },
] as const;
