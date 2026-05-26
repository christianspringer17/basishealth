import Image from "next/image";
import Link from "next/link";
import { BasalButton } from "@/components/landing/ui";
import type { ArticlePageContent } from "@/lib/content/types";

export function ArticlePage({ content }: { content: ArticlePageContent }) {
  return (
    <>
      <article className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <header className="col-span-full flex flex-col items-start gap-6 md:col-span-16 md:col-start-5">
            <Link
              href="/learn"
              className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
            >
              ← Learn
            </Link>
            <p className="text-h5 text-grey-7">{content.category}</p>
            <h1 className="text-h1-xl max-w-[900px] text-pretty text-grey-9">
              {content.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-h5 text-grey-7">
              <span>{content.readTime}</span>
              <span aria-hidden>·</span>
              <span>Published {content.published}</span>
            </div>
            <p className="text-h3 max-w-[760px] text-pretty text-grey-7">{content.lead}</p>
          </header>
        </div>

        {content.heroImage && (
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-20 md:col-start-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-basal-2xl bg-[var(--grey-2)] md:aspect-[16/9]">
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
            <div className="article-body flex flex-col gap-8">
              {content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-h1-lg mb-4 text-grey-9">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-body-lg mb-4 text-pretty text-grey-7 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {content.faqs && content.faqs.length > 0 && (
              <section className="mt-16 border-t border-[var(--grey-3)] pt-12">
                <h2 className="text-h1-lg mb-8 text-grey-9">FAQs</h2>
                <div className="flex flex-col gap-8">
                  {content.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-h4 mb-2 text-grey-9">{faq.question}</h3>
                      <p className="text-body text-pretty text-grey-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12">
              <BasalButton href="/#waitlist">Start your assessment</BasalButton>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
