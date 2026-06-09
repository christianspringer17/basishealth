import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/marketing/ArticlePage";
import { EdenPageShell } from "@/components/eden/EdenPageShell";
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
    <EdenPageShell>
      <div className="eden-subpage-offset">
        <ArticlePage content={content} related={getRelatedLearnEntries(slug)} />
      </div>
    </EdenPageShell>
  );
}
