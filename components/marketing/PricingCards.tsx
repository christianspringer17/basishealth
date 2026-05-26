import { BasalButton } from "@/components/landing/ui";

export type PlanTerm = "3-month" | "6-month";

export const PLANS = [
  {
    id: "3-month" as const,
    name: "3-Month Protocol",
    priceMonthly: 249,
    description:
      "Establish your baseline protocol with clinician review, personalized dosing support, and structured check-ins.",
    features: [
      "Clinical eligibility review",
      "Personalized protocol design",
      "Scheduled provider check-ins",
      "Metabolic marker tracking",
    ],
    badge: undefined as string | undefined,
  },
  {
    id: "6-month" as const,
    name: "6-Month Protocol",
    priceMonthly: 199,
    description:
      "Our recommended plan for meaningful metabolic adaptation—deeper titration cycles and long-horizon care.",
    features: [
      "Everything in 3-month",
      "Extended titration window",
      "Priority check-in scheduling",
      "Quarterly biomarker review",
    ],
    badge: "Recommended",
  },
] as const;

export function PricingCards({
  selected,
  onSelect,
  ctaHref = "/signup",
}: {
  selected?: PlanTerm;
  onSelect?: (plan: PlanTerm) => void;
  ctaHref?: string;
}) {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2">
      {PLANS.map((plan) => {
        const isSelected = selected === plan.id;
        const interactive = Boolean(onSelect);

        return (
          <div
            key={plan.id}
            className={[
              "relative flex flex-col gap-6 rounded-basal-2xl border p-8 transition-colors",
              isSelected
                ? "border-[var(--grey-7)] bg-[var(--grey-1)]"
                : "border-[var(--grey-3)] bg-[var(--grey-1)]",
              interactive ? "cursor-pointer hover:border-[var(--grey-7)]" : "",
            ].join(" ")}
            onClick={interactive ? () => onSelect?.(plan.id) : undefined}
            onKeyDown={
              interactive
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") onSelect?.(plan.id);
                  }
                : undefined
            }
            role={interactive ? "button" : undefined}
            tabIndex={interactive ? 0 : undefined}
          >
            {plan.badge && (
              <span className="absolute top-6 right-6 rounded-full border border-[var(--grey-3)] bg-white px-3 py-1 text-h5 text-grey-9">
                {plan.badge}
              </span>
            )}
            <div>
              <h3 className="text-h1-lg text-grey-9">{plan.name}</h3>
              <p className="mt-2 text-h5 text-pretty text-grey-7">{plan.description}</p>
            </div>
            <div>
              <p className="text-h1-xl text-grey-9">
                From ${plan.priceMonthly}
                <span className="text-h5 text-grey-7">/month</span>
              </p>
              <p className="text-h5 text-grey-7">
                Pricing confirmed after clinical review
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-h5 text-grey-7">
                  <span className="mt-1 text-grey-9" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            {!interactive && (
              <BasalButton href={`${ctaHref}?plan=${plan.id}`}>
                Begin assessment
              </BasalButton>
            )}
          </div>
        );
      })}
    </div>
  );
}
