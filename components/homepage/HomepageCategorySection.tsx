import Link from "next/link";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function HomepageCategorySection() {
  const { categories } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-categories">
      <div className="site-container">
        <h2 className="homepage-section__title">{categories.sectionTitle}</h2>
        <div className="homepage-categories__grid">
          {categories.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="homepage-category-card"
              data-analytics-event="homepage_to_glp_one_click"
              data-analytics-label={`category_${item.id}`}
              data-analytics-location="homepage_categories"
              data-analytics-href={item.href}
            >
              <img
                src={item.image}
                alt=""
                className="homepage-category-card__img"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <div className="homepage-category-card__overlay">
                <span className="homepage-category-card__label">{item.label}</span>
                <span className="homepage-category-card__shop">{item.shopLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
