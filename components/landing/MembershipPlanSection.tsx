import Image from "next/image";
import Link from "next/link";
import {
  PROTOCOL_PLANS_SECTION,
  type ProtocolPlanCard,
} from "@/lib/content/membership-plan";
import { CTA_LABELS, primaryCtaHref, primaryCtaLabel } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import { BasalButton, cn } from "./ui";

function PlanCard({ plan }: { plan: ProtocolPlanCard }) {
  return (
    <div
      className={cn(
        "membership-plan__card",
        plan.recommended && "membership-plan__card--recommended",
        plan.comingSoon && "opacity-90",
      )}
    >
      <div className="membership-plan__header">
        {plan.eyebrow ? (
          <p
            className={cn(
              "membership-plan__eyebrow",
              plan.recommended && "membership-plan__eyebrow--recommended",
            )}
          >
            {plan.eyebrow}
          </p>
        ) : null}
        <h2 className="membership-plan__headline">{plan.name}</h2>
      </div>

      <div className="membership-plan__price">
        <span className="membership-plan__price-value">{plan.priceValue}</span>
        {plan.priceUnit ? (
          <span className="membership-plan__price-unit">{plan.priceUnit}</span>
        ) : null}
      </div>

      {plan.priceSecondary ? (
        <p className="membership-plan__disclaimer">{plan.priceSecondary}</p>
      ) : null}

      <ul className="membership-plan__features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export function MembershipPlanSection() {
  const { backgroundImage, backgroundAlt, plans, plansDisclaimer } =
    PROTOCOL_PLANS_SECTION;

  return (
    <section
      id="plans"
      className="membership-plan-section section-shell section-gap-lg w-full scroll-mt-28"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-18 md:col-start-4">
          <div className="membership-plan membership-plan--multi">
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

            <div className="membership-plan__cards">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>

            <p className="membership-plan__section-disclaimer">{plansDisclaimer}</p>

            <div className="membership-plan__section-actions">
              <BasalButton href={primaryCtaHref()}>{primaryCtaLabel()}</BasalButton>
              <Link href={ROUTES.glpOneFaq} className="membership-plan__learn-more">
                {CTA_LABELS.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
