import { BasalButton } from "@/components/landing/ui";

export function ConversionBand({
  title = "Begin with clarity.",
  description = "See if GLP–One is right for your body and goals. Complete a short clinical assessment—your provider will confirm eligibility and discuss plan options.",
  primaryLabel = "Begin clinical assessment",
  primaryHref = "/signup",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const showSecondary = Boolean(secondaryHref && secondaryLabel);
  return (
    <section className="section-shell w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">{title}</h2>
          <p className="text-h3 max-w-[620px] text-pretty text-grey-7">{description}</p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <BasalButton href={primaryHref}>{primaryLabel}</BasalButton>
            {showSecondary && (
              <BasalButton href={secondaryHref!}>{secondaryLabel}</BasalButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
