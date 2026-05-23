import { MEDIA } from "@/lib/media";
import { BasalButton, MediaFrame, TextBlock } from "./ui";

export function IntroSection() {
  return (
    <section className="flex w-full flex-col items-center gap-y-80 py-100">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 md:col-span-16 md:col-start-5">
          <TextBlock
            title="Introducing Eonic Health"
            subtitle="Provider-guided longevity and performance care."
          />
          <div className="flex justify-center pt-3">
            <BasalButton href="#waitlist">Get started</BasalButton>
          </div>
        </div>
      </div>

      <div className="site-container site-grid w-full place-items-center gap-y-80">
        <div className="col-span-full w-full md:col-span-16 md:col-start-5">
          <MediaFrame
            src={MEDIA.intro}
            alt="Clinical wellness consultation"
            aspect="cinema"
            rounded="2xl"
          />
        </div>
        <p className="col-span-full max-w-[300px] text-center text-h5 text-grey-7 md:col-span-8 md:col-start-9">
          Imagery is illustrative. Clinical services, where offered, follow
          eligibility review and licensed provider oversight.
        </p>
      </div>
    </section>
  );
}
