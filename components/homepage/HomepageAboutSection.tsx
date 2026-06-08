import Link from "next/link";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function HomepageAboutSection() {
  const { about } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-about">
      <div className="site-container homepage-about__inner">
        <h2 className="homepage-section__title">{about.sectionTitle}</h2>
        <p className="homepage-about__body">{about.body}</p>
        <Link href={about.ctaHref} className="homepage-about__cta">
          {about.cta}
        </Link>
      </div>
    </section>
  );
}
