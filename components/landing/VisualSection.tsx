import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";
import { TextBlock } from "./ui";

export function VisualSection() {
  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-16 md:col-start-5">
          <TextBlock
            title="Clarity over noise."
            subtitle="A single plan that connects your goals, biomarkers, and provider guidance."
          />
        </div>
      </div>

      <div className="site-container site-grid w-full place-items-center gap-y-80">
        <div className="col-span-full w-full md:col-span-22 md:col-start-2">
          <CinematicBlock
            poster={MEDIA.visualPoster}
            videoSrc={MEDIA.visualVideo}
            alt="Health and diagnostics"
            aspect="portrait"
            rounded="2xl"
            showControls
          />
        </div>
        <p className="col-span-full max-w-[420px] text-center text-h5 text-grey-7 md:col-span-10 md:col-start-8">
          Imagery is illustrative. Your protocol is shaped by clinical review and
          your individual health context.
        </p>
      </div>
    </section>
  );
}
