import { HOME_HOW_IT_WORKS } from "@/lib/content/home";
import { HomeSection, HomeSectionIntro } from "./HomeSection";

export function HowItWorksSection() {
  return (
    <HomeSection id="how-it-works">
      <HomeSectionIntro title={HOME_HOW_IT_WORKS.headline} />
      <div className="site-container site-grid mt-10 w-full">
        <ol className="col-span-full grid gap-6 md:col-span-18 md:col-start-4 md:grid-cols-1">
          {HOME_HOW_IT_WORKS.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-4 rounded-basal-2xl border border-[var(--grey-3)] bg-white p-6 md:grid-cols-[72px_1fr] md:p-8"
            >
              <p className="text-h5 tracking-wide text-grey-7">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-h4 font-semibold text-grey-9">{step.title}</h3>
                <p className="text-body-lg text-pretty text-grey-7">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="site-container site-grid mt-8 w-full">
        <p className="col-span-full text-center text-h5 text-pretty text-grey-7 md:col-span-16 md:col-start-5">
          {HOME_HOW_IT_WORKS.disclaimer}
        </p>
      </div>
    </HomeSection>
  );
}
