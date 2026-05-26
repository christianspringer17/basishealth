import { MEDIA } from "@/lib/media";
import { BasalButton, MediaFrame } from "./ui";

export function VitalitySection() {
  return (
    <section className="section-shell section-gap-lg w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-4 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg leading-100 text-grey-9">This is life unlocked</h2>
          <p className="text-h3 max-w-[640px] text-pretty text-grey-7">
            Long-horizon metabolic care for people ready to invest in energy,
            recovery, and vitality—with a provider who adapts the plan as you evolve.
          </p>
        </div>
      </div>
      <div className="site-container site-grid w-full place-items-center gap-y-80">
        <div className="col-span-full w-full md:col-span-20 md:col-start-3">
          <MediaFrame
            src={MEDIA.vitality}
            alt="Wellness and vitality"
            aspect="cinema"
            rounded="2xl"
          />
        </div>
        <div className="col-span-full flex justify-center">
          <BasalButton href="/signup">Begin again</BasalButton>
        </div>
      </div>
    </section>
  );
}
