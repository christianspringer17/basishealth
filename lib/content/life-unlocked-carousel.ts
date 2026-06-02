import { EDITORIAL_IMAGES, MEDIA } from "@/lib/media";

export type LifeUnlockedReviewItem = {
  type: "review";
  label: string;
  quote: string;
  name: string;
  memberType: string;
};

export type LifeUnlockedMediaItem = {
  type: "media";
  mediaType: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  overlay: string;
};

export type LifeUnlockedCarouselItem =
  | LifeUnlockedReviewItem
  | LifeUnlockedMediaItem;

export const LIFE_UNLOCKED_CAROUSEL: LifeUnlockedCarouselItem[] = [
  {
    type: "review",
    label: "Member Review",
    quote:
      "I came in looking for metabolic support. What made Basis different was the structure — it felt like a plan, not another product.",
    name: "Maya",
    memberType: "Basis Member",
  },
  {
    type: "media",
    mediaType: "video",
    src: MEDIA.visualVideo,
    poster: MEDIA.visualPoster,
    alt: "Soft close-up wellness footage in natural light",
    overlay: "Begin with the protocol.",
  },
  {
    type: "review",
    label: "Member Review",
    quote:
      "The process felt clear from the beginning. I understood what I was doing, why it mattered, and how the protocol could adjust over time.",
    name: "Ethan",
    memberType: "Basis Metabolic Member",
  },
  {
    type: "media",
    mediaType: "image",
    src: EDITORIAL_IMAGES.wellnessField,
    alt: "Open landscape at golden hour",
    overlay: "Care that evolves.",
  },
  {
    type: "review",
    label: "Member Review",
    quote:
      "I liked that care didn't stop after the first step. The check-ins and protocol approach made the experience feel more intentional.",
    name: "Lena",
    memberType: "Basis Member",
  },
  {
    type: "media",
    mediaType: "image",
    src: "/images/expect/step-3-care.webp",
    alt: "Person resting peacefully in a sunlit green field",
    overlay: "Built around long-term metabolic health.",
  },
];

export const LIFE_UNLOCKED_SECTION = {
  title: "Life Unlocked",
  subtitle:
    "Basis is built around protocols, support, and a care relationship that can evolve over time.",
} as const;
