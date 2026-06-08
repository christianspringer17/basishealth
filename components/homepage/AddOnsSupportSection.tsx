import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function AddOnsSupportSection() {
  const { addOns } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-addons">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2 homepage-addons__inner">
        <header className="homepage-section__header">
          <h2 className="homepage-section__title">{addOns.headline}</h2>
          <p className="homepage-section__subhead">{addOns.subhead}</p>
        </header>
        <ul className="homepage-addons__chips">
          {addOns.chips.map((chip) => (
            <li key={chip} className="homepage-addons__chip">
              {chip}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
