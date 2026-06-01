import { EDITORIAL_IMAGES, NAV_IMAGES } from "@/lib/media";

const E = EDITORIAL_IMAGES;
const N = NAV_IMAGES;

/** One unique hero image per Learn article — editorial + nav photography mixed */
export const LEARN_ARTICLE_IMAGES = {
  "meet-your-metabolism": {
    src: E.coastalSky,
    alt: "Coastal horizon at dawn",
  },
  "as-unique-as-your-goals": {
    src: N.learnPersonalized,
    alt: "Aerial view of open green fields",
  },
  "why-insulin-sensitivity-matters": {
    src: E.clinicalBlue,
    alt: "Soft clinical light in a calm care environment",
  },
  "what-we-measure": {
    src: N.learnScience,
    alt: "Parent and child in a warm everyday moment",
  },
  "five-metabolic-pillars": {
    src: E.wellnessField,
    alt: "Person resting peacefully in a field of wildflowers",
  },
  "why-muscle-is-metabolic-reserve": {
    src: N.learnProtocols,
    alt: "Person overlooking the horizon at golden hour",
  },
  "protocol-areas": {
    src: N.aboutVitality,
    alt: "Abstract premium wellness texture",
  },
  "what-to-expect": {
    src: "/images/expect/step-1-eligibility.webp",
    alt: "Clinical eligibility and intake review",
  },
  "our-program": {
    src: N.aboutHowItWorks,
    alt: "Clinical GLP-1 vials in a care setting",
  },
} as const satisfies Record<string, { src: string; alt: string }>;

export type LearnArticleSlug = keyof typeof LEARN_ARTICLE_IMAGES;

/** Carousel cards — editorial thumbs where available, else full asset */
export function learnCardImage(slug: LearnArticleSlug): { src: string; alt: string } {
  const hero = LEARN_ARTICLE_IMAGES[slug];
  const thumbByHero: Record<string, string> = {
    [E.coastalSky]: E.coastalSkyThumb,
    [E.wellnessField]: E.wellnessFieldThumb,
    [E.clinicalBlue]: E.clinicalBlueThumb,
  };
  const thumb = thumbByHero[hero.src];
  return thumb ? { src: thumb, alt: hero.alt } : hero;
}
