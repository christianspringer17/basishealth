import { BasalButton } from "./ui";
import { primaryCtaLabel, WAITLIST_HREF } from "@/lib/cta";

export function AssessmentSection() {
  return (
    <section id="get-started" className="section-shell section-gap-md w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">Begin with clarity.</h2>
          <p className="text-lead max-w-[620px] text-pretty text-grey-7">
            See if GLP–One is right for your body and goals. Join the waitlist for
            launch updates—clinical intake runs through our partner at checkout when
            enrollment opens.
          </p>
          <BasalButton href={WAITLIST_HREF} variant="accent">{primaryCtaLabel()}</BasalButton>
          <p className="text-body max-w-[480px] text-pretty text-grey-7">
            Licensed clinicians · HIPAA-compliant care · Microdose & Weight Loss tiers
          </p>
        </div>
      </div>
    </section>
  );
}
