import { BasalButton } from "@/components/landing/ui";
import { primaryCtaHref, primaryCtaLabel } from "@/lib/cta";

export function ConversionBand({
  title = "Start your assessment.",
  description = "See whether physician-guided GLP-1 care may be appropriate for you. You won't be charged unless a provider approves treatment.",
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  accentPrimary = false,
  id,
  className,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Light blue + icon — last CTA on page (homepage waitlist, GLP-One footer band) */
  accentPrimary?: boolean;
  id?: string;
  className?: string;
}) {
  const href = primaryHref ?? primaryCtaHref();
  const label = primaryLabel ?? primaryCtaLabel();

  return (
    <section
      id={id}
      className={["section-shell w-full", className].filter(Boolean).join(" ")}
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">{title}</h2>
          <p className="text-lead max-w-[620px] text-pretty text-grey-7">{description}</p>
          <div className="conversion-band__actions flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <BasalButton
              href={href}
              variant={accentPrimary ? "accent" : "default"}
              data-analytics-event="cta_click"
              data-analytics-label="conversion_primary"
              data-analytics-location="conversion_band"
              data-analytics-href={href}
            >
              {label}
            </BasalButton>
            {secondaryLabel && secondaryHref ? (
              <BasalButton
                href={secondaryHref}
                data-analytics-event="cta_click"
                data-analytics-label="conversion_secondary"
                data-analytics-location="conversion_band"
                data-analytics-href={secondaryHref}
              >
                {secondaryLabel}
              </BasalButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
