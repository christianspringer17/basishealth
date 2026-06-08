import { BasalButton } from "@/components/landing/ui";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";
import { lowestEffectiveMonthly } from "@/lib/pricing";

export function OfferCard() {
  const { offerCard } = HOMEPAGE_CONTENT;
  const fromPrice = lowestEffectiveMonthly();

  return (
    <aside className="homepage-offer-card">
      <p className="homepage-offer-card__eyebrow">{offerCard.eyebrow}</p>
      <h2 className="homepage-offer-card__title">{offerCard.title}</h2>
      <p className="homepage-offer-card__price">
        <span className="homepage-offer-card__price-prefix">{offerCard.pricePrefix}</span>{" "}
        <span className="homepage-offer-card__price-amount">${fromPrice}</span>
        <span className="homepage-offer-card__price-suffix">{offerCard.priceSuffix}</span>
      </p>
      <ul className="homepage-offer-card__bullets">
        {offerCard.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <BasalButton
        href={offerCard.ctaHref}
        variant="secondary"
        className="homepage-offer-card__cta"
        data-analytics-event="homepage_to_glp_one_click"
        data-analytics-label="compare_plans"
        data-analytics-location="homepage_offer_card"
        data-analytics-href={offerCard.ctaHref}
      >
        {offerCard.cta}
      </BasalButton>
    </aside>
  );
}
