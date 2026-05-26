import { BasalButton } from "./ui";

export function AssessmentSection() {
  return (
    <section id="get-started" className="section-shell section-gap-md w-full">
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-6 text-center md:col-span-16 md:col-start-5">
          <h2 className="text-h1-lg text-grey-9">Begin with clarity.</h2>
          <p className="text-h3 max-w-[620px] text-pretty text-grey-7">
            See if GLP–One is right for your body and your goals. Complete a short
            clinical assessment—no commitment until your provider reviews eligibility.
          </p>
          <BasalButton href="/signup">Begin clinical assessment</BasalButton>
          <p className="text-h5 max-w-[480px] text-pretty text-grey-7">
            Licensed clinicians · HIPAA-compliant care · 3- & 6-month protocol options
          </p>
        </div>
      </div>
    </section>
  );
}
