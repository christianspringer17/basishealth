import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { lowestEffectiveMonthly } from "@/lib/pricing";

export function EdenOfferCard() {
  const { offerCard } = EDEN_HOMEPAGE.hero;
  const fromPrice = lowestEffectiveMonthly();

  return (
    <aside className="eden-offer-card eden-dash-card eden-dash-card--rainbow">
      <p className="eden-offer-card__eyebrow">{offerCard.eyebrow}</p>
      <h2 className="eden-offer-card__title">{offerCard.title}</h2>
      <p className="eden-offer-card__price">
        <span className="eden-offer-card__price-prefix">{offerCard.pricePrefix}</span>{" "}
        <span className="eden-offer-card__price-amount">${fromPrice}</span>
        <span className="eden-offer-card__price-suffix">{offerCard.priceSuffix}</span>
      </p>
      <ul className="eden-offer-card__bullets">
        {offerCard.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link
        href={offerCard.ctaHref}
        className="eden-btn eden-btn--secondary eden-offer-card__cta"
        data-analytics-event="homepage_to_glp_one_click"
        data-analytics-label="compare_plans"
        data-analytics-location="eden_hero_offer"
        data-analytics-href={offerCard.ctaHref}
      >
        {offerCard.cta}
      </Link>
    </aside>
  );
}
