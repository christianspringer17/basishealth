export type EditorialSection = {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
};

export type AboutPageContent = {
  title: string;
  subtitle?: string;
  intro?: string;
  backHref?: string;
  backLabel?: string;
  founders?: {
    names: string;
    role: string;
    image: { src: string; alt: string };
  };
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
  description: string;
};
