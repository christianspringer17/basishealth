import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function TrustStrip() {
  const { trustStrip } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-trust-band" aria-label="Trust and compliance">
      <div className="site-container">
        <h2 className="homepage-trust-band__heading">{trustStrip.sectionTitle}</h2>
        <ul className="homepage-trust-band__grid">
          {trustStrip.items.map((item) => (
            <li key={item.title} className="homepage-trust-band__item">
              <h3 className="homepage-trust-band__title">{item.title}</h3>
              <p className="homepage-trust-band__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
