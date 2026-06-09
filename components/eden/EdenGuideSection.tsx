"use client";

import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { EdenIconArrow } from "./eden-icons";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

export function EdenGuideSection() {
  const { guides } = EDEN_HOMEPAGE;

  return (
    <section className="eden-guides" aria-labelledby="eden-guides-title">
      <div className="eden-guides__inner site-container">
        <EdenSectionHeader
          id="eden-guides-title"
          title={guides.headline}
          subhead={guides.subhead}
          align="center"
          className="eden-guides__head"
        />
      </div>

      <EdenReveal delay={60}>
        <div className="eden-guides__carousel-wrap">
          <div className="eden-guides__carousel" tabIndex={0} aria-label="Explore guides">
            {guides.links.map((link, index) => (
              <article key={link.href} className="eden-guide-card">
                <Link href={link.href} className="eden-guide-card__link eden-dash-card">
                  <div className="eden-guide-card__media">
                    <img
                      src={link.image}
                      alt={"imageAlt" in link && link.imageAlt ? link.imageAlt : ""}
                      width={480}
                      height={320}
                      loading={index === 0 ? "eager" : "lazy"}
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
        </div>
      </EdenReveal>
    </section>
  );
}
