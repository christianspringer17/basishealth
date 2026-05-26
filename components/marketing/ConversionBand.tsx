import { BasalButton } from "@/components/landing/ui";

export function ConversionBand({
  title = "Begin with clarity.",
  description = "See if Athene Health is right for your goals. Choose a 3- or 6-month protocol and start with a licensed provider review.",
  primaryLabel = "Join the waitlist",
  primaryHref = "/signup",
  secondaryLabel = "How it works",
  secondaryHref = "/about/how-it-works",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section-shell w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">{title}</h2>
          <p className="text-h3 max-w-[620px] text-pretty text-grey-7">{description}</p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
            <BasalButton href={primaryHref}>{primaryLabel}</BasalButton>
            <BasalButton href={secondaryHref}>{secondaryLabel}</BasalButton>
          </div>
          <p className="text-h5 max-w-[480px] text-pretty text-grey-7">
            Transparent upfront pricing for 3- and 6-month care plans. No hidden
            fees—just clinician-guided metabolic care built for long-term results.
          </p>
        </div>
      </div>
    </section>
  );
}
