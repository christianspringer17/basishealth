import Image from "next/image";
import Link from "next/link";
import { BasalButton } from "@/components/landing/ui";
import type { AboutPageContent, EditorialSection } from "@/lib/content/types";

function EditorialSectionBlock({
  section,
  variant = "default",
}: {
  section: EditorialSection;
  variant?: "default" | "approach";
}) {
  if (variant === "approach") {
    return (
      <section className="editorial-approach">
        <h2 className="text-h1-lg text-grey-9">{section.heading}</h2>
        <div className="editorial-approach-body">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-body-lg text-pretty text-grey-7">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="editorial-block">
      {section.eyebrow && <p className="editorial-eyebrow">{section.eyebrow}</p>}
      <h2 className="editorial-heading">{section.heading}</h2>
      <div className="editorial-body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-body-lg text-pretty text-grey-7">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function StepBlock({ section, index }: { section: EditorialSection; index: number }) {
  return (
    <section className="editorial-step">
      <p className="editorial-step-index" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="editorial-step-content">
        <h2 className="text-h1-lg text-grey-9">{section.heading}</h2>
        <div className="editorial-body">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-body-lg text-pretty text-grey-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPageLayout({ content }: { content: AboutPageContent }) {
  const isSteps = content.steps && content.steps.length > 0;

  return (
    <div className="marketing-page">
      <section className="section-shell section-gap-lg w-full">
        <div className="site-container site-grid w-full">
          <header className="editorial-page-hero col-span-full md:col-span-18 md:col-start-4">
            {content.backHref && (
              <Link href={content.backHref} className="editorial-back">
                ← {content.backLabel ?? "Back"}
              </Link>
            )}
            <h1 className="text-h1-xl text-pretty text-grey-9">{content.title}</h1>
            {content.subtitle && (
              <p className="text-h1-lg text-pretty text-grey-7">{content.subtitle}</p>
            )}
          </header>
        </div>

        {content.founders && (
          <div className="site-container site-grid w-full">
            <div className="editorial-founders col-span-full md:col-span-18 md:col-start-4">
              <div className="editorial-founders-media">
                <Image
                  src={content.founders.image.src}
                  alt={content.founders.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 860px) 100vw, 480px"
                  priority
                />
              </div>
              <div className="editorial-founders-caption">
                <p className="text-h4 text-grey-9">{content.founders.names}</p>
                <p className="text-h5 text-grey-7">{content.founders.role}</p>
              </div>
            </div>
          </div>
        )}

        {content.intro && (
          <div className="site-container site-grid w-full">
            <p className="editorial-intro col-span-full text-body-lg text-pretty text-grey-7 md:col-span-14 md:col-start-6">
              {content.intro}
            </p>
          </div>
        )}

        {content.heroImage && !content.founders && (
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

        {content.cta && isSteps && (
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-18 md:col-start-4">
              <BasalButton href={content.cta.href}>{content.cta.label}</BasalButton>
            </div>
          </div>
        )}
      </section>

      {isSteps ? (
        <section className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
          <div className="site-container site-grid w-full section-stack-loose">
            {content.steps!.map((step, index) => (
              <div key={step.heading} className="col-span-full md:col-span-16 md:col-start-5">
                <StepBlock section={step} index={index} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="section-shell section-gap-lg w-full">
          <div className="site-container site-grid w-full section-stack-loose">
            {content.sections.map((section) => (
              <div key={section.heading} className="col-span-full md:col-span-16 md:col-start-5">
                <EditorialSectionBlock section={section} />
              </div>
            ))}
            {content.approach && (
              <div className="col-span-full md:col-span-16 md:col-start-5">
                <EditorialSectionBlock section={content.approach} variant="approach" />
              </div>
            )}
          </div>
        </section>
      )}

      {content.heroImage && content.founders && (
        <section className="section-shell w-full pb-0">
          <div className="site-container site-grid w-full">
            <div className="col-span-full md:col-span-20 md:col-start-3">
              <div className="editorial-figure editorial-figure--wide">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 860px) 100vw, 80vw"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
