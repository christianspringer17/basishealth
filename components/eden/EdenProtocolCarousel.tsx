import { EDITORIAL_IMAGES } from "@/lib/media";

/** Gray card shell + transparent cutout objects in media stage. */
const PROTOCOL_CARDS = [
  {
    id: "provider",
    title: "24/7 Provider Access",
    image: EDITORIAL_IMAGES.howItWorksProviderCutout,
    alt: "Licensed provider in a white coat with stethoscope",
  },
  {
    id: "goals",
    title: "Manage goals in one place",
    image: EDITORIAL_IMAGES.howItWorksGoalsCutout,
    alt: "Basis app showing weight trend and prescription status",
  },
  {
    id: "treatments",
    title: "Clinically-proven treatments",
    image: EDITORIAL_IMAGES.howItWorksTreatmentsCutout,
    alt: "FDA-approved GLP-1 medication pens",
  },
  {
    id: "shipping",
    title: "Free expedited shipping",
    image: EDITORIAL_IMAGES.howItWorksShippingCutout,
    alt: "Basis branded package delivered to your door",
  },
] as const;

export function EdenProtocolCarousel() {
  return (
    <div className="eden-how__carousel-wrap">
      <div
        className="eden-how__carousel"
        tabIndex={0}
        aria-label="Your protocol online features"
      >
        {PROTOCOL_CARDS.map((card, index) => (
          <article
            key={card.id}
            className={`eden-protocol-card eden-protocol-card--${card.id}`}
            aria-label={card.title}
          >
            <h3 className="eden-protocol-card__title">{card.title}</h3>
            <div className="eden-protocol-card__media">
              <img
                src={`${card.image}?v=8`}
                alt={card.alt}
                className="eden-protocol-card__asset"
                width={400}
                height={480}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
