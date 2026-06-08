import Image from "next/image";
import { BasalButton } from "@/components/landing/ui";
import { primaryCtaHref } from "@/lib/cta";
import { MEDIA } from "@/lib/media";

export type GlpOneFinalCtaContent = {
  title: string;
  subtitle: string;
  body: string;
  ctaLabel: string;
};

export const GLP_ONE_FINAL_CTA_DEFAULTS: GlpOneFinalCtaContent = {
  title: "GLP-1s change appetite.",
  subtitle: "Care determines outcomes.",
  body: "GLP-One is clinician-guided treatment with compounded tirzepatide. Eligibility review helps determine whether treatment is appropriate for you, with personalized dosing and ongoing clinical support.",
  ctaLabel: "Is GLP-One right for me?",
};

type GlpOneFinalCtaProps = {
  id?: string;
  className?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
} & Partial<GlpOneFinalCtaContent>;

export function GlpOneFinalCta({
  id = "glp-one-final-cta",
  className,
  ctaHref = primaryCtaHref(),
  imageSrc = MEDIA.glpOneHandVial,
  imageAlt = "Hand holding a GLP-One tirzepatide injection vial",
  ...content
}: GlpOneFinalCtaProps) {
  const copy = { ...GLP_ONE_FINAL_CTA_DEFAULTS, ...content };

  return (
    <section
      id={id}
      className={["glp-one-final-cta w-full", className].filter(Boolean).join(" ")}
      aria-labelledby={`${id}-heading`}
    >
      <div className="glp-one-final-cta__headline site-container site-grid w-full">
        <div className="glp-one-final-cta__headline-inner col-span-full md:col-span-16 md:col-start-5">
          <h2 id={`${id}-heading`} className="glp-one-final-cta__title text-h1-lg text-grey-9">
            {copy.title}
          </h2>
          <p className="glp-one-final-cta__subtitle text-subtitle text-grey-7">{copy.subtitle}</p>
        </div>
      </div>

      <p className="glp-one-final-cta__body">{copy.body}</p>

      <div className="glp-one-final-cta__cta">
        <BasalButton
          href={ctaHref}
          variant="accent"
          data-analytics-event="cta_click"
          data-analytics-label="glp_one_final_primary"
          data-analytics-location="glp_one_final_cta"
          data-analytics-href={ctaHref}
        >
          {copy.ctaLabel}
        </BasalButton>
      </div>

      <figure className="glp-one-final-cta__figure">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={2048}
          height={1536}
          className="glp-one-final-cta__hand"
          sizes="(max-width: 860px) 94vw, 800px"
          quality={100}
          loading="lazy"
          unoptimized
        />
      </figure>
    </section>
  );
}
