/**
 * Media — drop videos in /public/videos/ or set env URLs.
 */
export const MEDIA = {
  heroPoster:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=2400&q=85&auto=format&fit=crop",
  heroVideo:
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? "/videos/hero.mp4",
  visualPoster:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=2400&q=85&auto=format&fit=crop",
  visualVideo:
    process.env.NEXT_PUBLIC_VISUAL_VIDEO_URL ?? "/videos/visual.mp4",
  editorialModal: "/images/nav/nav-about.jpg",
  intro: "/images/nav/protocol-product.png",
  program:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=2000&q=85&auto=format&fit=crop",
  vitality:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=2000&q=85&auto=format&fit=crop",
  steps: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1666214280557-f5018554ce93?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80&auto=format&fit=crop",
  ],
} as const;

export const NAV_IMAGES = {
  protocolProduct: "/images/nav/protocol-product.png",
  aboutHowItWorks: "/images/nav/nav-about.jpg",
  aboutVitality: "/images/nav/nav-unlock.jpg",
  learnProtocols: "/images/nav/nav-learn-metabolism.jpg",
  learnPersonalized: "/images/nav/nav-learn-fingerprint.jpg",
  learnScience: "/images/nav/nav-learn-markers.jpg",
} as const;
