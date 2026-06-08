import Link from "next/link";
import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";
import { glpOneAssessmentHref } from "@/lib/cta";
import { MEDIA } from "@/lib/media";
import {
  effectiveMonthly3Month,
  GLP_PRODUCTS,
  lowestEffectiveMonthly,
  type ProductTier,
} from "@/lib/pricing";
import { ROUTES } from "@/lib/routes";

const PRODUCT_IMAGES: Record<ProductTier, string> = {
  microdose: MEDIA.glpOnePricingVial,
  weightloss: MEDIA.homeIntroProduct,
};

export function ActiveProtocolSection() {
  const { activeProtocols } = HOMEPAGE_CONTENT;
  const assessmentHref = glpOneAssessmentHref();

  return (
    <section id="best-sellers" className="homepage-section homepage-best-sellers scroll-mt-28">
      <div className="site-container">
        <h2 className="homepage-section__title">Best Sellers</h2>
      </div>

      <div className="homepage-rail-wrap">
        <div className="homepage-rail">
          {activeProtocols.protocols.map((protocol) => {
            const product = GLP_PRODUCTS.find((p) => p.id === protocol.id);
            const price = product ? effectiveMonthly3Month(product) : null;

            return (
              <article key={protocol.id} className="homepage-product-tile">
                <Link
                  href={assessmentHref}
                  className="homepage-product-tile__link"
                  data-analytics-event="protocol_card_click"
                  data-analytics-label={`protocol_${protocol.id}`}
                  data-analytics-location={`homepage_protocol_${protocol.id}`}
                  data-analytics-href={assessmentHref}
                >
                  <div className="homepage-product-tile__media">
                    <img
                      src={PRODUCT_IMAGES[protocol.id]}
                      alt={protocol.name}
                      className="homepage-product-tile__img"
                      width={400}
                      height={500}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="homepage-product-tile__name">{protocol.name}</h3>
                  {price !== null ? (
                    <p className="homepage-product-tile__price">
                      <span className="homepage-product-tile__currency">$</span>
                      {price.toFixed(0)}
                      <span className="homepage-product-tile__decimals">.00</span>
                    </p>
                  ) : null}
                </Link>
              </article>
            );
          })}

          <article className="homepage-product-tile">
            <Link
              href={ROUTES.glpOnePlans}
              className="homepage-product-tile__link"
              data-analytics-event="homepage_to_glp_one_click"
              data-analytics-label="view_all_plans"
              data-analytics-location="homepage_best_sellers"
              data-analytics-href={ROUTES.glpOnePlans}
            >
              <div className="homepage-product-tile__media homepage-product-tile__media--alt">
                <img
                  src={MEDIA.glpOneHandVial}
                  alt="Compare GLP-One plans"
                  className="homepage-product-tile__img"
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="homepage-product-tile__name">Compare plans</h3>
              <p className="homepage-product-tile__price">
                <span className="homepage-product-tile__currency">$</span>
                {lowestEffectiveMonthly()}
                <span className="homepage-product-tile__decimals">.00</span>
              </p>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
