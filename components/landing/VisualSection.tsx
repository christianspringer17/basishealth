import { MEDIA } from "@/lib/media";
import { CinematicBlock } from "./CinematicBlock";

export function VisualSection() {
  return (
    <section className="flex w-full flex-col items-center py-100">
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
      </div>
    </section>
  );
}
