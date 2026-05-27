import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "@/components/landing/CinematicBlock";
import { BasalButton } from "@/components/landing/ui";
import { SIGNUP_HREF } from "@/lib/cta";

export function MarketingVisualBlock({
  title = "GLP-1 changes appetite.",
  subtitle = "Care determines outcomes.",
  caption = "GLP–One is clinician-guided treatment with compounded tirzepatide. Eligibility review helps determine whether treatment is appropriate for you.",
  ctaLabel = "Is GLP-One right for me?",
}: {
  title?: string;
  subtitle?: string;
  caption?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-2 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">{title}</h2>
          <p className="text-h1-lg text-grey-7">{subtitle}</p>
        </div>
      </div>
      <div className="site-container site-grid w-full">
        <div className="section-stack col-span-full md:col-span-22 md:col-start-2">
          <CinematicBlock
            poster={MEDIA.visualPoster}
            videoSrc={MEDIA.visualVideo}
            alt="Clinical care and metabolic health"
            aspect="portrait"
            rounded="2xl"
            showControls
          />
          <p className="max-w-[480px] text-center text-h5 text-grey-7">{caption}</p>
          <div className="flex justify-center pt-2">
            <BasalButton href={SIGNUP_HREF}>{ctaLabel}</BasalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
