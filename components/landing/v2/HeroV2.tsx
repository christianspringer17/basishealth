import {
  HOME_HERO,
} from "@/lib/content/home";
import {
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
} from "@/lib/cta";
import { MEDIA } from "@/lib/media";
import { VideoMedia } from "../VideoMedia";
import { BasalButton } from "../ui";

export function HeroV2() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full items-end justify-center overflow-hidden pb-24 pt-32 md:items-center md:pb-0 md:pt-0"
    >
      <VideoMedia
        poster={MEDIA.heroPoster}
        videoSrc={MEDIA.heroVideo}
        alt=""
        priority
      />
      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

      <div className="site-container site-grid relative z-[2] w-full">
        <div className="col-span-full flex flex-col items-center gap-6 px-2 text-center md:col-span-18 md:col-start-4">
          <h1 className="text-hero-title max-w-[920px] text-pretty text-grey-1">
            {HOME_HERO.headline}
          </h1>
          <p className="text-lead max-w-[720px] text-pretty text-grey-1/90 md:text-subtitle">
            {HOME_HERO.subheadline}
          </p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <BasalButton href={primaryCtaHref()}>{primaryCtaLabel()}</BasalButton>
            <BasalButton href={secondaryCtaHref()}>{secondaryCtaLabel()}</BasalButton>
          </div>
          <p className="text-h5 max-w-[640px] text-pretty text-grey-1/80">
            {HOME_HERO.supportingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
