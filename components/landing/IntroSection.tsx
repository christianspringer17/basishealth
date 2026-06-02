import Link from "next/link";
import { MEDIA } from "@/lib/media";
import {
  CTA_LABELS,
  primaryCtaHref,
  primaryCtaLabel,
  WAITLIST_HREF,
} from "@/lib/cta";
import { BasalButton, MediaFrame, TextBlock } from "./ui";

export function IntroSection() {
  return (
    <section id="membership" className="section-shell section-gap-lg w-full scroll-mt-28">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 md:col-span-16 md:col-start-5">
          <TextBlock
            title="Basis Metabolic is the first protocol."
            subtitle="Basis begins with metabolic health because it is where demand, clinical need, and measurable outcomes intersect. Members start with an assessment, provider review, and a personalized metabolic protocol."
          />
          <p className="max-w-[620px] text-center text-body text-pretty text-grey-7">
            When appropriate, care may include GLP-1 therapy, peptides, labs,
            supplements, or other interventions—subject to provider review and
            eligibility.
          </p>
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-h5 text-grey-9">Membership is the foundation of care.</h3>
            <p className="max-w-[620px] text-body text-pretty text-grey-7">
              Membership starts at $60/month and includes access to the Basis portal,
              provider review, protocol recommendations, ongoing support, and
              recalibration. Therapies, labs, medications, peptides, supplements, and
              other interventions are purchased separately when clinically appropriate.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 pt-3">
            <BasalButton href={primaryCtaHref()}>{primaryCtaLabel()}</BasalButton>
            <Link
              href={WAITLIST_HREF}
              className="text-h5 text-grey-7 underline underline-offset-4 transition-colors hover:text-grey-9"
            >
              {CTA_LABELS.startAssessment}
            </Link>
          </div>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="section-stack col-span-full md:col-span-16 md:col-start-5">
          <MediaFrame
            src={MEDIA.intro}
            alt="Physician-guided metabolic care"
            aspect="product"
            objectFit="contain"
            rounded="2xl"
            priority
          />
          <p className="max-w-[520px] text-center text-body text-pretty text-grey-7">
            Diagnostics can help refine a protocol, but they are not required to begin.
            Labs are optional and may be recommended when clinically useful.
          </p>
        </div>
      </div>
    </section>
  );
}
