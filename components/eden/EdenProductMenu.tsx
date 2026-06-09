import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { effectiveMonthly3Month, productByTier } from "@/lib/pricing";
import { EdenIconArrow } from "./eden-icons";
import { EdenReveal } from "./EdenReveal";

export function EdenProductMenu() {
  const { products } = EDEN_HOMEPAGE;

  return (
    <section id="menu" className="eden-product-menu">
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
                  `eden-product-card--${product.id}`,
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
                    loading={product.id === "lean" ? "eager" : "lazy"}
                  />
                  {fromPrice ? (
                    <span className="eden-product-card__price">
                      From ${fromPrice}
                      <span className="eden-product-card__price-note">/mo</span>
                    </span>
                  ) : null}
                  {"showLearnMore" in product && product.showLearnMore ? (
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
                  ) : null}
                </Link>
              </article>
            );
          })}
        </div>
        </EdenReveal>
      </div>
    </section>
  );
}
