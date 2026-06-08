import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function WhyBasisCards() {
  const { whyBasis } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-why-basis">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
        <h2 className="homepage-section__title homepage-why-basis__headline">
          {whyBasis.headline}
        </h2>
        <div className="homepage-why-basis__grid">
          {whyBasis.cards.map((card) => (
            <article key={card.title} className="homepage-card">
              <h3 className="homepage-card__title">{card.title}</h3>
              <p className="homepage-card__body">{card.body}</p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
