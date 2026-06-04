export type ExpectStep = {
  title: string;
  body: string;
  image: string;
  imageMobile?: string;
  alt: string;
};

export const EXPECT_STEPS: ExpectStep[] = [
  {
    title: "Start your assessment",
    body: "Begin with a short online assessment. Share your goals and health history so your care team can understand where you are today.",
    image: "/images/expect/step-1-eligibility.webp",
    imageMobile: "/images/expect/step-1-eligibility-mobile.webp",
    alt: "Parent gently holding a baby, close-up on caring hands",
  },
  {
    title: "Provider review",
    body: "A licensed clinician reviews your information to determine eligibility and whether a metabolic protocol is appropriate for you.",
    image: "/images/expect/step-2-protocol.webp",
    imageMobile: "/images/expect/step-2-protocol-mobile.webp",
    alt: "Woman in a sage jacket looking across rolling green hills",
  },
  {
    title: "Your personalized protocol",
    body: "If appropriate, you receive a personalized Basis Metabolic protocol designed around your goals—not a one-size-fits-all prescription.",
    image: "/images/expect/step-3-care.webp",
    alt: "Man resting peacefully on his back in a sunlit green field",
  },
  {
    title: "Therapies when clinically appropriate",
    body: "Depending on eligibility and provider review, your protocol may include GLP-1 therapy, peptides, labs, supplements, or other interventions—added to your plan when clinically appropriate.",
    image: "/images/expect/step-4-literacy.webp",
    imageMobile: "/images/expect/step-4-literacy-mobile.webp",
    alt: "Yellow wildflowers in soft focus against a pale sky",
  },
] as const;
