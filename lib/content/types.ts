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
  heroImage?: { src: string; alt: string };
  cta?: { label: string; href: string };
  sections: EditorialSection[];
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
