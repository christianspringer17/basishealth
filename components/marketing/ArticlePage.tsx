import Image from "next/image";
import Link from "next/link";
import { ArticleEndCta } from "@/components/marketing/ArticleEndCta";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { RelatedLearnArticles } from "@/components/marketing/RelatedLearnArticles";
import type { ArticlePageContent } from "@/lib/content/types";
import type { LearnIndexEntry } from "@/lib/content/types";
import { formatReadTimeLabel } from "@/lib/learn-format";
export function ArticlePage({
  content,
  related = [],
}: {
  content: ArticlePageContent;
  related?: LearnIndexEntry[];
}) {
  return (
    <article className="marketing-page article-page">
      <section className="article-page-main section-shell w-full">
        <div className="site-container">
          <header className="article-page-header">
            <Link href="/learn" className="editorial-back">
              ← Learn
            </Link>
            <h1 className="article-page-title">{content.title}</h1>
            <p className="article-page-read-time">{formatReadTimeLabel(content.readTime)}</p>
            <p className="article-page-published">Published: {content.published}</p>
            <p className="article-page-lead">{content.lead}</p>
          </header>

          {content.heroImage && (
            <div className="article-page-figure">
              <div className="editorial-figure editorial-figure--article">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 860px) 100vw, 720px"
                  priority
                />
              </div>
            </div>
          )}

          <div className="article-page-body-wrap">
            <div className="article-body">
              {content.sections.map((section) => (
                <section key={section.heading} className="editorial-block">
                  {section.eyebrow && <p className="editorial-eyebrow">{section.eyebrow}</p>}
                  <h2 className="editorial-heading">{section.heading}</h2>
                  <div className="editorial-body">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-body-lg text-pretty text-grey-7"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {content.faqs && content.faqs.length > 0 && (
              <section className="article-faqs">
                <FaqAccordion title="FAQs" items={content.faqs} />
              </section>
            )}

            <RelatedLearnArticles entries={related} category={content.category} />
          </div>
        </div>
      </section>
      <ArticleEndCta />
    </article>
  );
}
