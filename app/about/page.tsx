import { EdenGlpOneStatement } from "@/components/eden/EdenGlpOneStatement";
import { EdenPageShell } from "@/components/eden/EdenPageShell";
import { EdenReveal } from "@/components/eden/EdenReveal";
import { EdenValuesSection } from "@/components/eden/EdenValuesSection";
import { EDEN_ABOUT } from "@/lib/content/eden-about";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "About us",
  description:
    "Basis is physician-guided metabolic care — GLP-One protocols when clinically appropriate, with licensed provider review and U.S. pharmacy fulfillment.",
};

export default function AboutPage() {
  const { hero, story, approach } = EDEN_ABOUT;

  return (
    <EdenPageShell>
      <section className="eden-about-hero site-container">
        <div className="eden-about-hero__copy">
          <p className="eden-about-hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="eden-about-hero__title">{hero.title}</h1>
          <p className="eden-about-hero__lead">{hero.lead}</p>
          <ul className="eden-about-hero__chips" aria-label="Care principles">
            {hero.trustChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>
        <div className="eden-about-hero__media">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="eden-about-hero__img"
            width={720}
            height={860}
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="eden-about-story site-container" aria-label="Our story">
        {story.map((block, index) => (
          <EdenReveal key={block.id} delay={index * 40}>
            <article
              className={`eden-about-story__row${index % 2 === 1 ? " eden-about-story__row--flip" : ""}`}
            >
              <div className="eden-about-story__copy">
                <p className="eden-about-story__eyebrow">{block.eyebrow}</p>
                <h2 className="eden-about-story__heading">{block.heading}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="eden-about-story__body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="eden-about-story__media">
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  className="eden-about-story__img"
                  width={640}
                  height={520}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          </EdenReveal>
        ))}
      </section>

      <section className="eden-about-approach site-container" aria-labelledby="eden-about-approach-title">
        <EdenReveal>
          <div className="eden-about-approach__card eden-dash-card">
            <p className="eden-about-story__eyebrow">{approach.eyebrow}</p>
            <h2 id="eden-about-approach-title" className="eden-about-approach__heading">
              {approach.heading}
            </h2>
            {approach.paragraphs.map((paragraph) => (
              <p key={paragraph} className="eden-about-approach__body">
                {paragraph}
              </p>
            ))}
            <a
              href={ROUTES.homeHowItWorks}
              className="eden-btn eden-btn--secondary eden-about-approach__cta"
              data-analytics-event="about_approach_cta"
              data-analytics-label="see_how_it_works"
              data-analytics-location="about_page"
            >
              {approach.cta}
            </a>
          </div>
        </EdenReveal>
      </section>

      <EdenValuesSection />
      <EdenGlpOneStatement />
    </EdenPageShell>
  );
}
