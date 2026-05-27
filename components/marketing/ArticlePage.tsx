import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { BasalButton } from "@/components/landing/ui";
import { SIGNUP_HREF, SIGNUP_LABELS } from "@/lib/cta";
import type { ArticlePageContent } from "@/lib/content/types";

export function ArticlePage({ content }: { content: ArticlePageContent }) {
  return (
    <article className="marketing-page">
      <section className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <header className="editorial-page-hero col-span-full md:col-span-16 md:col-start-5">
            <Link href="/learn" className="editorial-back">
              ← Learn
            </Link>
            <p className="editorial-eyebrow">{content.category}</p>
            <h1 className="text-h1-xl max-w-[900px] text-pretty text-grey-9">{content.title}</h1>
            <div className="learn-card-meta-row">
              <span>{content.readTime}</span>
              <span aria-hidden>·</span>
              <span>{content.published}</span>
            </div>
            <p className="text-h3 max-w-[760px] text-pretty text-grey-7">{content.lead}</p>
          </header>
        </div>

        {content.heroImage && (
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-20 md:col-start-3">
              <div className="editorial-figure">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 860px) 100vw, 80vw"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        <div className="site-container site-grid w-full">
          <div className="col-span-full md:col-span-14 md:col-start-6">
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

            <div className="article-cta">
              <BasalButton href={SIGNUP_HREF}>{SIGNUP_LABELS.startAssessment}</BasalButton>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
