import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { effectiveMonthly3Month, productByTier } from "@/lib/pricing";
import { EdenIconArrow } from "./eden-icons";
import { EdenReveal } from "./EdenReveal";

export function EdenProductMenu() {
  const { products, treatments } = EDEN_HOMEPAGE;

  return (
    <section id="menu" className="eden-product-menu" aria-labelledby="eden-product-menu-title">
      <div className="eden-product-menu__inner site-container">
        <EdenReveal>
        <div className="eden-product-menu__grid">
          {products.map((product) => {
            const fromPrice =
              "tier" in product && product.tier
                ? Math.round(effectiveMonthly3Month(productByTier(product.tier)))
                : null;

            return (
              <article
                key={product.id}
                className={[
                  "eden-product-card",
                  `eden-product-card--${product.id.replace("glp1-", "")}`,
                  product.available ? "" : "eden-product-card--soon",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Link href={product.href} className="eden-product-card__link">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="eden-product-card__img"
                    width={1024}
                    height={576}
                    loading={product.id === "glp1-weight-loss" ? "eager" : "lazy"}
                  />
                  {fromPrice ? (
                    <span className="eden-product-card__price">
                      From ${fromPrice}
                      <span className="eden-product-card__price-note">/mo</span>
                    </span>
                  ) : null}
                  <span
                    className={[
                      "eden-product-card__learn",
                      product.ctaTone === "dark" ? "eden-product-card__learn--dark" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    Learn More
                    <span className="eden-product-card__learn-icon" aria-hidden>
                      <EdenIconArrow />
                    </span>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
        </EdenReveal>

        <EdenReveal delay={100}>
        <div className="eden-product-menu__footer">
          <h2 id="eden-product-menu-title" className="eden-section-title eden-product-menu__title">
            {treatments.title}
          </h2>
          <p className="eden-product-menu__intro">{treatments.intro}</p>
          <p className="eden-product-menu__supporting">{treatments.supporting}</p>
          <Link
            href={treatments.compareHref}
            className="eden-btn eden-btn--secondary eden-product-menu__compare"
            data-analytics-event="homepage_to_glp_one_click"
            data-analytics-label="compare_plans"
            data-analytics-location="eden_treatments"
            data-analytics-href={treatments.compareHref}
          >
            {treatments.compareCta}
          </Link>
        </div>
        </EdenReveal>
      </div>
    </section>
  );
}
