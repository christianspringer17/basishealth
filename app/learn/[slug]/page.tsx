import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/marketing/ArticlePage";
import { MarketingShell } from "@/components/marketing/MarketingShell";
import { getRelatedLearnEntries, learnPages } from "@/lib/content/learn-pages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(learnPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = learnPages[slug];
  if (!page) return { title: "Learn" };
  return {
    title: page.title,
    description: page.lead,
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const content = learnPages[slug];
  if (!content) notFound();

  return (
    <MarketingShell>
      <ArticlePage content={content} related={getRelatedLearnEntries(slug)} />
    </MarketingShell>
  );
}
