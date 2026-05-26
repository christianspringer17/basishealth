import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";
import { TextBlock } from "./ui";

export function VisualSection() {
  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-16 md:col-start-5">
          <TextBlock
            title="GLP-1 changes appetite."
            subtitle="Care determines outcomes."
          />
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
          <p className="max-w-[480px] text-center text-h5 text-grey-7">
            GLP–One is clinician-guided treatment with ongoing clinical support.
            Eligibility review helps determine whether treatment is appropriate for
            you.
          </p>
        </div>
      </div>
    </section>
  );
}
