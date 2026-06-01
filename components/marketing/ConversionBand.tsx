import { BasalButton } from "@/components/landing/ui";
import {
  CHECKOUT_HREF,
  CTA_LABELS,
  WAITLIST_HREF,
  checkoutCtaLabel,
  isCheckoutLive,
  primaryCtaLabel,
} from "@/lib/cta";
import { ROUTES } from "@/lib/routes";

export function ConversionBand({
  title = "Begin with clarity.",
  description = "See if GLP–One is right for your body and goals.",
  primaryLabel = CTA_LABELS.viewPricing,
  primaryHref = ROUTES.glpOne,
  secondaryLabel = primaryCtaLabel(),
  secondaryHref = WAITLIST_HREF,
  showSecondary = true,
  className,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showSecondary?: boolean;
  className?: string;
}) {
  const checkoutIsExternal = isCheckoutLive();

  return (
    <section className={["section-shell w-full", className].filter(Boolean).join(" ")}>
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">{title}</h2>
          <p className="text-lead max-w-[620px] text-pretty text-grey-7">{description}</p>
          <div className="conversion-band__actions flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <BasalButton
              href={primaryHref}
              data-analytics-event="cta_click"
              data-analytics-label="conversion_primary"
              data-analytics-location="conversion_band"
              data-analytics-href={primaryHref}
            >
              {primaryLabel}
            </BasalButton>
            {showSecondary &&
              (checkoutIsExternal ? (
                <BasalButton
                  href={CHECKOUT_HREF}
                  data-analytics-event="cta_click"
                  data-analytics-label="conversion_checkout"
                  data-analytics-location="conversion_band"
                  data-analytics-href={CHECKOUT_HREF}
                >
                  {checkoutCtaLabel()}
                </BasalButton>
              ) : (
                secondaryLabel &&
                secondaryHref && (
                  <BasalButton
                    href={secondaryHref}
                    data-analytics-event="cta_click"
                    data-analytics-label="conversion_secondary"
                    data-analytics-location="conversion_band"
                    data-analytics-href={secondaryHref}
                  >
                    {secondaryLabel}
                  </BasalButton>
                )
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
