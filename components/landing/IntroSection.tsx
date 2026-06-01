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
            title="Membership is the foundation of care."
            subtitle="Basis membership starts at $60/month and includes portal access, physician review, personalized protocol recommendations, ongoing support, and quarterly recalibration."
          />
          <p className="max-w-[620px] text-center text-body text-pretty text-grey-7">
            Medications, peptides, labs, and supplements are purchased separately
            when clinically appropriate. Optional diagnostics may be available to
            help refine your protocol over time.
          </p>
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
          <p className="max-w-[480px] text-center text-body text-grey-7">
            Membership starts at $60/month. Therapies are purchased separately when
            clinically appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}
