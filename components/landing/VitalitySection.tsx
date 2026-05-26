import { MEDIA } from "@/lib/media";
import { BasalButton, MediaFrame } from "./ui";

export function VitalitySection() {
  return (
    <section className="flex w-full flex-col items-center section-shell section-gap-md w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg leading-100 text-grey-9">
            Built for long-term vitality
          </h2>
          <p className="text-h3 max-w-[640px] text-pretty text-grey-7">
            Begin again—with a provider-guided plan designed to support your goals
            where medically appropriate.
          </p>
          <div className="pt-2">
            <BasalButton href="/#waitlist">Join the waitlist</BasalButton>
          </div>
        </div>
      </div>
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-20 md:col-start-3">
          <MediaFrame
            src={MEDIA.vitality}
            alt="Wellness and vitality"
            aspect="cinema"
            rounded="2xl"
          />
        </div>
      </div>
    </section>
  );
}
