/**
 * Static media paths — files live in /public and ship with the site.
 * No stock URLs (Pexels/Unsplash); works on Fuse, GoHighLevel, Vercel, etc.
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
  editorialModal: "/images/nav/nav-about.jpg",
  intro: "/images/nav/protocol-product.png",
  /** Replace with /images/sections/*.jpg when brand photography is ready */
  program: "/images/placeholder.svg",
  vitality: "/images/placeholder.svg",
  placeholder: "/images/placeholder.svg",
  steps: [
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
  ],
} as const;

export const NAV_IMAGES = {
  protocolProduct: "/images/nav/protocol-product.png",
  /** Vial shot — GLP–One nav dropdown only */
  protocolDropdown: "/images/nav/protocol-dropdown.png",
  aboutHowItWorks: "/images/nav/nav-about.jpg",
  aboutVitality: "/images/nav/nav-unlock.jpg",
  learnProtocols: "/images/nav/nav-learn-metabolism.jpg",
  learnPersonalized: "/images/nav/nav-learn-fingerprint.jpg",
  learnScience: "/images/nav/nav-learn-markers.jpg",
} as const;
