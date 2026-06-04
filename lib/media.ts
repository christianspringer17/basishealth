/**
 * Static media paths — files live in /public and ship with the site.
 * No stock URLs (Pexels/Unsplash); works on MyDose, GoHighLevel, Vercel, etc.
 *
 * Videos: public/videos/hero.mp4, visual.mp4
 * Posters: public/images/hero-poster.jpg, visual-poster.jpg (frame from video)
 * See public/videos/README.md and public/images/README.md
 */
export const MEDIA = {
  heroPoster: "/images/herovid2-poster.jpg",
  /** Link preview (iMessage, social) — first frame of hero video, 1200×630 */
  openGraphImage: "/images/opengraph-hero.jpg",
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? "/videos/herovid2.mp4",
  /** Previous hero video, moved into the Program section */
  programPoster: "/images/hero-poster.jpg",
  programVideo: "/videos/hero.mp4",
  visualPoster: "/images/visual-poster.jpg",
  visualVideo: process.env.NEXT_PUBLIC_VISUAL_VIDEO_URL ?? "/videos/visual.mp4",
  editorialModal: "/images/nav/nav-about.webp",
  /** GLP–One product kit — editorial modal hero */
  glpOneProductMockup: "/images/glp-one-product-mockup.png",
  /** Homepage intro — GLP-One kit (transparent PNG) */
  homeIntroProduct: "/images/glp-one-home-product.png",
  /** GLP-One pricing cards — labeled vial (public/images/glp-one-pricing-vial.png) */
  glpOnePricingVial: "/images/glp-one-pricing-vial.png",
  /** GLP-One final CTA — hand holding vial (transparent PNG) */
  glpOneHandVial: "/images/glp-one-hand-vial.png",
  intro: "/images/nav/protocol-product.png",
  /** Replace with /images/sections/*.jpg when brand photography is ready */
  program: "/images/placeholder.svg",
  vitality: "/images/placeholder.svg",
  placeholder: "/images/placeholder.svg",
  /** @deprecated Use EXPECT_STEPS in lib/expect-steps.ts */
  steps: [
    "/images/expect/step-1-eligibility.webp",
    "/images/expect/step-2-protocol.webp",
    "/images/expect/step-3-care.webp",
    "/images/expect/step-4-literacy.webp",
  ],
} as const;

/** Learn / About editorial photography */
export const EDITORIAL_IMAGES = {
  aboutPrimary: "/images/editorial/about-primary.jpg",
  aboutSecondary: "/images/editorial/about-secondary.jpg",
  aboutPartnership: "/images/editorial/about-partnership-lupine.jpg",
  wellnessField: "/images/editorial/wellness-field.webp",
  /** Life Unlocked carousel — metabolic health media card */
  lifeUnlockedMetabolic: "/images/editorial/life-unlocked-metabolic-health.jpg",
  wellnessFieldThumb: "/images/editorial/wellness-field-thumb.webp",
  coastalSky: "/images/editorial/coastal-sky.webp",
  coastalSkyThumb: "/images/editorial/coastal-sky-thumb.webp",
  clinicalBlue: "/images/editorial/clinical-blue.webp",
  clinicalBlueThumb: "/images/editorial/clinical-blue-thumb.webp",
  /** Membership pricing card background */
  membershipPricingBg: "/images/membership-pricing-bg.png",
  /** Peptide / molecule macro — membership nav preview */
  membershipPeptideBg: "/images/membership-peptide-bg.png",
  /** Brand lockup PaperTexture source */
  brandLockupTexture: "/images/brand-lockup-texture.png",
  /** About page PaperTexture source */
  aboutPaperTexture: "/images/editorial/about-secondary.webp",
} as const;

export const NAV_IMAGES = {
  protocolProduct: "/images/nav/protocol-product.png",
  /** Vial shot — legacy */
  protocolDropdown: "/images/nav/protocol-dropdown.png",
  /** GLP-1 nav hover card — vial product shot */
  glpOneNavProduct: "/images/nav/protocol-dropdown.png",
  aboutHowItWorks: "/images/nav/nav-about.webp",
  aboutVitality: "/images/nav/nav-unlock.webp",
  learnProtocols: "/images/nav/nav-learn-metabolism.webp",
  learnPersonalized: "/images/nav/nav-learn-fingerprint.webp",
  learnScience: "/images/nav/nav-learn-markers.webp",
  /** Membership nav hover preview */
  membership: "/images/nav/nav-membership.png",
  /** Main About page hero */
  aboutHero: "/images/editorial/about-hero.png",
} as const;
