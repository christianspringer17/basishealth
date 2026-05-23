import { MEDIA } from "@/lib/media";
import { VideoMedia } from "./VideoMedia";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-svh w-full items-center justify-center overflow-hidden"
    >
      <VideoMedia
        poster={MEDIA.heroPoster}
        videoSrc={MEDIA.heroVideo}
        alt=""
        priority
      />
      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

      <div className="site-container site-grid relative z-[2] w-full">
        <div className="col-span-full flex flex-col items-center gap-4 px-2 text-center md:col-span-16 md:col-start-5">
          <h1 className="text-h1-xl max-w-[900px] text-pretty text-grey-1">
            Personalized health protocols for long-term vitality.
          </h1>
        </div>
      </div>
    </section>
  );
}
