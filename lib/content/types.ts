export type EditorialSection = {
  id?: string;
  eyebrow?: string;
  /** Omitted when the eyebrow carries the section title (Basal-style) */
  heading?: string;
  paragraphs: string[];
};

export type AboutPageContent = {
  title: string;
  subtitle?: string;
  intro?: string;
  backHref?: string;
  backLabel?: string;
  /** Two equal editorial images on main About (basal.health/about) */
  galleryImages?: { src: string; alt: string }[];
  /** Pill anchor below intro — scrolls to first story section */
  storyAnchor?: { label: string; href: string };
  /** Horizontal editorial carousel below story anchor (basal.health/about) */
  storyCarouselImages?: { src: string; alt: string }[];
  /** Single hero image on sub-pages (how-it-works, vitality) */
  heroImage?: { src: string; alt: string };
  /** Editorial blocks (eyebrow + heading + body) */
  sections: EditorialSection[];
  /** Closing “Our approach” block — matches basal.health/about */
  approach?: EditorialSection;
  /** Numbered steps for /about/how-it-works */
  steps?: EditorialSection[];
  cta?: { label: string; href: string };
};

export type ArticlePageContent = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  published: string;
  lead: string;
  heroImage?: { src: string; alt: string };
  sections: EditorialSection[];
  faqs?: { question: string; answer: string }[];
};

export type LearnIndexEntry = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  published: string;
  /** ISO date for sort order (newest first) */
  sortDate: string;
  description: string;
  cardImage?: { src: string; alt: string };
};
