import { MEDIA } from "@/lib/media";
import { BasalButton, MediaFrame, TextBlock } from "./ui";

export function IntroSection() {
  return (
    <section id="intro" className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 md:col-span-16 md:col-start-5">
          <TextBlock
            title="Introducing GLP–One"
            subtitle="Clinician-guided care with personalized dosing support, built for long-term metabolic health."
          />
          <div className="flex justify-center pt-3">
            <BasalButton href="/signup">Get started</BasalButton>
          </div>
        </div>
      </div>

      <div className="site-container site-grid w-full">
        <div className="section-stack col-span-full md:col-span-16 md:col-start-5">
          <MediaFrame
            src={MEDIA.intro}
            alt="GLP-One clinical protocol supplies"
            aspect="product"
            objectFit="contain"
            rounded="2xl"
          />
          <p className="max-w-[420px] text-center text-h5 text-grey-7">
            Includes medication and personalized dosing support where medically
            appropriate. Imagery is illustrative; actual medication appearance may
            vary by compounding pharmacy partner.
          </p>
        </div>
      </div>
    </section>
  );
}
