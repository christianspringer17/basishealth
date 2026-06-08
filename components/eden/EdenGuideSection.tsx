import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { EdenIconArrow } from "./eden-icons";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

export function EdenGuideSection() {
  const { guides } = EDEN_HOMEPAGE;

  return (
    <section className="eden-guides">
      <div className="eden-guides__inner site-container">
        <EdenSectionHeader
          title={guides.headline}
          subhead={guides.subhead}
          align="center"
          className="eden-guides__head"
        />
        <EdenReveal delay={60}>
        <div className="eden-guides__grid">
          {guides.links.map((link) => (
            <article key={link.href} className="eden-guide-card">
              <Link href={link.href} className="eden-guide-card__link eden-dash-card">
                <div className="eden-guide-card__media">
                  <img
                    src={link.image}
                    alt={"imageAlt" in link && link.imageAlt ? link.imageAlt : ""}
                    width={480}
                    height={320}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="eden-guide-card__overlay">
                    <span className="eden-guide-card__label">{link.label}</span>
                    <p className="eden-guide-card__desc">{link.description}</p>
                    <span className="eden-guide-card__arrow" aria-hidden>
                      <EdenIconArrow />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        </EdenReveal>
      </div>
    </section>
  );
}
