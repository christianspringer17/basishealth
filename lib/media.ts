/**
 * Static media paths — files live in /public and ship with the site.
 * No stock URLs (Pexels/Unsplash); works on Fuse Health, GoHighLevel, Vercel, etc.
 *
 * Videos: public/videos/hero.mp4, visual.mp4
 * Posters: public/images/hero-poster.jpg, visual-poster.jpg (frame from video)
 * See public/videos/README.md and public/images/README.md
 */
export const MEDIA = {
  heroPoster: "/images/video2-poster.jpg",
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? "/videos/video2.mp4",
  /** Previous hero video, moved into the Program section */
  programPoster: "/images/hero-poster.jpg",
  programVideo: "/videos/hero.mp4",
  visualPoster: "/images/visual-poster.jpg",
  visualVideo: process.env.NEXT_PUBLIC_VISUAL_VIDEO_URL ?? "/videos/visual.mp4",
  editorialModal: "/images/nav/nav-about.webp",
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
  aboutPrimary: "/images/editorial/about-primary.webp",
  aboutSecondary: "/images/editorial/about-secondary.webp",
  wellnessField: "/images/editorial/wellness-field.webp",
  wellnessFieldThumb: "/images/editorial/wellness-field-thumb.webp",
  coastalSky: "/images/editorial/coastal-sky.webp",
  coastalSkyThumb: "/images/editorial/coastal-sky-thumb.webp",
  clinicalBlue: "/images/editorial/clinical-blue.webp",
  clinicalBlueThumb: "/images/editorial/clinical-blue-thumb.webp",
} as const;

export const NAV_IMAGES = {
  protocolProduct: "/images/nav/protocol-product.png",
  /** Vial shot — GLP–One nav dropdown only */
  protocolDropdown: "/images/nav/protocol-dropdown.png",
  aboutHowItWorks: "/images/nav/nav-about.webp",
  aboutVitality: "/images/nav/nav-unlock.webp",
  learnProtocols: "/images/nav/nav-learn-metabolism.webp",
  learnPersonalized: "/images/nav/nav-learn-fingerprint.webp",
  learnScience: "/images/nav/nav-learn-markers.webp",
} as const;
