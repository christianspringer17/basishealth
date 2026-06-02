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
        <div className="col-span-full flex justify-center px-2 text-center">
          <h1 className="text-hero-title max-w-[920px] text-pretty text-grey-1">
            The body doesn&apos;t need a trend. It needs a protocol.
          </h1>
        </div>
      </div>
    </section>
  );
}
