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
        <div className="col-span-full flex flex-col items-center gap-4 px-2 text-center md:col-span-14 md:col-start-6">
          <h1 className="text-hero-title max-w-[720px] text-pretty text-grey-1">
            Metabolism is the signal.
            <br />
            The signal is broken.
          </h1>
          <p className="text-hero-lead max-w-[480px] text-pretty text-grey-8">
            When biological signals are distorted, effort fails. You don&apos;t need
            more discipline. You need the noise to stop—and clinician-guided care
            built around how your body actually works.
          </p>
        </div>
      </div>
    </section>
  );
}
