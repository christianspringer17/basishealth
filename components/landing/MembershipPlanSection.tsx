import Image from "next/image";
import Link from "next/link";
import { MEMBERSHIP_PLAN } from "@/lib/content/membership-plan";
import { CTA_LABELS, primaryCtaHref, primaryCtaLabel } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import { BasalButton } from "./ui";

export function MembershipPlanSection() {
  const { eyebrow, headline, price, priceUnit, disclaimer, features, backgroundImage, backgroundAlt } =
    MEMBERSHIP_PLAN;

  return (
    <section
      id="membership-plan"
      className="membership-plan-section section-shell section-gap-lg w-full scroll-mt-28"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-18 md:col-start-4">
          <div className="membership-plan">
            <div className="membership-plan__media" aria-hidden>
              <Image
                src={backgroundImage}
                alt={backgroundAlt}
                fill
                className="object-cover"
                sizes="(max-width: 860px) 100vw, 960px"
              />
              <div className="membership-plan__media-overlay" />
            </div>

            <div className="membership-plan__card">
              <div className="membership-plan__header">
                <p className="membership-plan__eyebrow">{eyebrow}</p>
                <h2 className="membership-plan__headline">{headline}</h2>
              </div>

              <div className="membership-plan__price">
                <span className="membership-plan__price-value">${price}</span>
                <span className="membership-plan__price-unit">/{priceUnit}</span>
              </div>

              <p className="membership-plan__disclaimer">{disclaimer}</p>

              <ul className="membership-plan__features">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="membership-plan__actions">
                <BasalButton href={primaryCtaHref()} variant="accent">{primaryCtaLabel()}</BasalButton>
                <Link href={ROUTES.membershipFaq} className="membership-plan__learn-more">
                  {CTA_LABELS.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
