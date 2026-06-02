import Image from "next/image";
import Link from "next/link";
import { BasalButton } from "@/components/landing/ui";
import type { AboutPageContent, EditorialSection } from "@/lib/content/types";

function AboutHeroImage({ image }: { image: { src: string; alt: string } }) {
  return (
    <div className="about-page__hero">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="about-editorial-image"
        sizes="(max-width: 860px) 100vw, 1200px"
        quality={90}
        priority
      />
    </div>
  );
}

function AboutBasalMainLayout({ content }: { content: AboutPageContent }) {
  return (
    <div className="about-page">
      <section className="about-page__title-block" aria-labelledby="about-title">
        <h1 id="about-title" className="about-page__title about-page__title--gradient">
          {content.title}
        </h1>
      </section>

      {content.heroImage && (
        <section className="about-page__hero-wrap" aria-label="Editorial photography">
          <div className="site-container">
            <AboutHeroImage image={content.heroImage} />
          </div>
        </section>
      )}

      {content.subtitle && (
        <section className="about-page__lead">
          <div className="site-container site-grid w-full">
            <p className="about-page__subtitle col-span-full md:col-span-14 md:col-start-5">
              {content.subtitle}
            </p>
          </div>
        </section>
      )}

      <div className="about-page__sections">
        {content.sections.map((section) => (
          <AboutEditorialSection
            key={section.id ?? section.heading ?? section.eyebrow}
            section={section}
          />
        ))}
      </div>

      {content.approach && <AboutApproachBlock section={content.approach} />}
    </div>
  );
}

function AboutEditorialSection({ section }: { section: EditorialSection }) {
  return (
    <section
      id={section.id}
      className="about-section about-section--editorial scroll-mt-28"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-14 md:col-start-5">
          {section.eyebrow && !section.heading && (
            <p className="about-section__eyebrow">{section.eyebrow}</p>
          )}
          {section.heading && <h2 className="about-section__heading">{section.heading}</h2>}
          <div className="about-section__body">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutApproachBlock({ section }: { section: EditorialSection }) {
  const [headline, ...rest] = section.paragraphs;

  return (
    <section className="about-approach">
      <div className="site-container site-grid w-full">
        <div className="about-approach__inner col-span-full md:col-span-14 md:col-start-4">
          {section.heading && <p className="about-approach__label">{section.heading}</p>}
          {headline && <h2 className="about-approach__headline">{headline}</h2>}
          {rest.length > 0 && (
            <div className="about-approach__body">
              {rest.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

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
      {section.heading && <h2 className="editorial-heading">{section.heading}</h2>}
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

function AboutSubpageLayout({ content }: { content: AboutPageContent }) {
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
              <p className="text-subtitle text-pretty text-grey-7">{content.subtitle}</p>
            )}
          </header>
        </div>

        {content.heroImage && (
          <div className="site-container site-grid w-full pt-8">
            <div className="col-span-full md:col-span-18 md:col-start-4">
              <div className="editorial-figure editorial-figure--about-single">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  className="about-editorial-image"
                  sizes="(max-width: 860px) 100vw, 800px"
                  quality={90}
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {content.cta && isSteps && (
          <div className="site-container site-grid w-full pt-8">
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
              <div
                key={section.eyebrow ?? section.heading ?? section.paragraphs[0]?.slice(0, 32)}
                className="col-span-full md:col-span-16 md:col-start-5"
              >
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
    </div>
  );
}

export function AboutPageLayout({ content }: { content: AboutPageContent }) {
  const isBasalMain = Boolean(
    !content.backHref && (content.heroImage || (content.galleryImages?.length ?? 0) > 0),
  );

  if (isBasalMain) {
    return <AboutBasalMainLayout content={content} />;
  }

  return <AboutSubpageLayout content={content} />;
}
