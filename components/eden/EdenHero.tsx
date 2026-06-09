import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";

import {
  EdenIconPackage,
  EdenIconShieldOff,
  EdenIconUsFlag,
} from "./eden-icons";
import { EdenHeroRotatingHeadline } from "./EdenHeroRotatingHeadline";

const highlightIcons = {
  flag: EdenIconUsFlag,
  delivery: EdenIconPackage,
  "no-insurance": EdenIconShieldOff,
} as const;

export function EdenHero() {
  const { hero } = EDEN_HOMEPAGE;

  return (
    <section id="hero" className="eden-hero-storefront">
      <div className="eden-hero-storefront__layout site-container">
        <div className="eden-hero-storefront__row">
          <div className="eden-hero-storefront__copy">
            <EdenHeroRotatingHeadline
              words={hero.headlineRotate}
              suffix={hero.headlineSuffix}
            />
            <p className="eden-hero-storefront__tagline eden-hero-enter eden-hero-enter--2">
              {hero.tagline}
            </p>
          </div>

          <ul
            className="eden-hero-storefront__highlights eden-hero-enter eden-hero-enter--3"
            aria-label="Trust highlights"
          >
            {hero.trustHighlights.map((item) => {
              const Icon = highlightIcons[item.icon];
              return (
                <li key={item.text} className="eden-hero-storefront__highlight">
                  <span className="eden-hero-storefront__highlight-icon" aria-hidden>
                    <Icon />
                  </span>
                  <span className="eden-hero-storefront__highlight-text">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
