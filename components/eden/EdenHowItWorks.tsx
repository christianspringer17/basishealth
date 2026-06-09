import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { EdenProtocolCarousel } from "./EdenProtocolCarousel";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

export function EdenHowItWorks() {
  const { howItWorks } = EDEN_HOMEPAGE;
  const { promoCards } = howItWorks;

  return (
    <section id="how-it-works" className="eden-how" aria-labelledby="eden-how-title">
      <div className="site-container">
        <EdenSectionHeader
          id="eden-how-title"
          title={howItWorks.headline}
          subhead={howItWorks.subhead}
          align="center"
        />
      </div>

      <EdenReveal>
        <EdenProtocolCarousel />
      </EdenReveal>

      <div className="site-container">
        <EdenReveal delay={80}>
          <div className="eden-how__promo-row">
            <article
              className="eden-how-promo eden-how-promo--photo"
              style={{ backgroundImage: `url(${promoCards.vitality.image})` }}
            >
              <img
                src={promoCards.vitality.image}
                alt={promoCards.vitality.imageAlt}
                className="sr-only-visually"
                loading="lazy"
              />
              <div className="eden-how-promo__overlay">
                <div className="eden-how-promo__copy eden-how-promo__copy--light">
                  <h3 className="eden-how-promo__headline">{promoCards.vitality.headline}</h3>
                  <p className="eden-how-promo__subhead">{promoCards.vitality.subhead}</p>
                  <a
                    href={promoCards.vitality.ctaHref}
                    className="eden-btn eden-how-promo__cta eden-how-promo__cta--light"
                    data-analytics-event="eden_how_promo_cta"
                    data-analytics-label="start_my_journey"
                    data-analytics-location="eden_how_promo_vitality"
                    data-analytics-href={promoCards.vitality.ctaHref}
                  >
                    {promoCards.vitality.cta}
                  </a>
                </div>
              </div>
            </article>

            <article className="eden-how-promo eden-how-promo--product">
              <div className="eden-how-promo__inner">
                <div className="eden-how-promo__copy">
                  <h3 className="eden-how-promo__headline">{promoCards.skin.headline}</h3>
                  <p className="eden-how-promo__subhead">{promoCards.skin.subhead}</p>
                  <a
                    href={promoCards.skin.ctaHref}
                    className="eden-btn eden-how-promo__cta"
                    data-analytics-event="eden_how_promo_cta"
                    data-analytics-label="begin_today"
                    data-analytics-location="eden_how_promo_skin"
                    data-analytics-href={promoCards.skin.ctaHref}
                  >
                    {promoCards.skin.cta}
                  </a>
                </div>

                <div className="eden-how-promo__product-card">
                  <img
                    src={promoCards.skin.productImage}
                    alt={promoCards.skin.productAlt}
                    className="eden-how-promo__product"
                    width={400}
                    height={964}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>
        </EdenReveal>

        <p className="eden-how__trust">{howItWorks.trustNote}</p>
      </div>
    </section>
  );
}
