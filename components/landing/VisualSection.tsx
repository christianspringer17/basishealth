import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";
import { TextBlock } from "./ui";

export function VisualSection() {
  return (
    <section className="flex w-full flex-col items-center gap-y-20 py-100">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-16 md:col-start-5">
          <TextBlock
            title="Clarity over noise."
            subtitle="A single plan that connects your goals, biomarkers, and provider guidance."
          />
        </div>
      </div>

      <div className="site-container site-grid w-full place-items-center">
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
        <p className="col-span-full mt-8 max-w-[420px] text-center text-h5 text-grey-7 md:col-span-10 md:col-start-8">
          Imagery is illustrative. Your protocol is shaped by clinical review and
          your individual health context.
        </p>
      </div>
    </section>
  );
}
