import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";
export function VitalitySection() {
  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg leading-100 text-grey-9">
            Therapies are components of the protocol.
          </h2>
          <p className="text-lead max-w-[640px] text-pretty text-grey-7">
            Depending on eligibility and provider review, protocols may include GLP-1
            therapy, peptides, hormone-related care, labs, supplements, or other
            interventions—when clinically appropriate and purchased separately from
            membership.
          </p>
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
        </div>
      </div>
    </section>
  );
}
