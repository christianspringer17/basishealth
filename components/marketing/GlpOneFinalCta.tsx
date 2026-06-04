import Image from "next/image";
import { BasalButton } from "@/components/landing/ui";
import { primaryCtaHref } from "@/lib/cta";
import { MEDIA } from "@/lib/media";

const HEADLINE = {
  title: "GLP-One changes metabolism.",
  subtitle: "Care determines outcomes.",
} as const;

export function GlpOneFinalCta() {
  const href = primaryCtaHref();

  return (
    <section
      id="glp-one-final-cta"
      className="glp-one-final-cta w-full"
      aria-labelledby="glp-one-final-cta-heading"
    >
      <div className="glp-one-final-cta__headline site-container site-grid w-full">
        <div className="glp-one-final-cta__headline-inner col-span-full md:col-span-16 md:col-start-5">
          <h2 id="glp-one-final-cta-heading" className="glp-one-final-cta__title text-h1-lg text-grey-9">
            {HEADLINE.title}
          </h2>
          <p className="glp-one-final-cta__subtitle text-subtitle text-grey-7">
            {HEADLINE.subtitle}
          </p>
        </div>
      </div>

      <div className="glp-one-final-cta__cta">
        <BasalButton
          href={href}
          variant="accent"
          data-analytics-event="cta_click"
          data-analytics-label="glp_one_final_primary"
          data-analytics-location="glp_one_final_cta"
          data-analytics-href={href}
        >
          Is GLP-One right for me?
        </BasalButton>
      </div>

      <figure className="glp-one-final-cta__figure">
        <Image
          src={MEDIA.glpOneHandVial}
          alt="Hand holding a GLP-One tirzepatide injection vial"
          width={2048}
          height={1536}
          className="glp-one-final-cta__hand"
          sizes="(max-width: 860px) 94vw, 800px"
          quality={100}
          priority
          unoptimized
        />
      </figure>
    </section>
  );
}
