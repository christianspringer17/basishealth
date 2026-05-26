import Image from "next/image";
import Link from "next/link";
import { BasalButton } from "@/components/landing/ui";
import type { AboutPageContent, EditorialSection } from "@/lib/content/types";

function EditorialBlock({ section }: { section: EditorialSection }) {
  return (
    <section className="flex flex-col gap-4">
      {section.eyebrow && (
        <p className="text-h5 text-grey-7">{section.eyebrow}</p>
      )}
      <h2 className="text-h1-lg max-w-[760px] text-pretty text-grey-9">
        {section.heading}
      </h2>
      <div className="flex max-w-[680px] flex-col gap-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-body-lg text-pretty text-grey-7">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export function AboutPageLayout({ content }: { content: AboutPageContent }) {
  return (
    <>
      <section className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <div className="col-span-full flex flex-col items-start gap-6 md:col-span-16 md:col-start-5">
            {content.backHref && (
              <Link
                href={content.backHref}
                className="text-h5 text-grey-7 transition-colors hover:text-grey-9"
              >
                ← {content.backLabel ?? "Back"}
              </Link>
            )}
            <h1 className="text-h1-xl max-w-[900px] text-pretty text-grey-9">
              {content.title}
            </h1>
            {content.subtitle && (
              <p className="text-h1-lg max-w-[760px] text-pretty text-grey-7">
                {content.subtitle}
              </p>
            )}
            {content.intro && (
              <p className="text-h3 max-w-[680px] text-pretty text-grey-7">{content.intro}</p>
            )}
            {content.cta && (
              <div className="pt-2">
                <BasalButton href={content.cta.href}>{content.cta.label}</BasalButton>
              </div>
            )}
          </div>
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

        <div className="site-container site-grid w-full section-stack-loose">
          {content.sections.map((section) => (
            <div
              key={section.heading}
              className="col-span-full md:col-span-16 md:col-start-5"
            >
              <EditorialBlock section={section} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
