import { HOME_MODEL } from "@/lib/content/home";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function ModelSection() {
  return (
    <HomeSection id="model" className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
      <HomeSectionIntro title={HOME_MODEL.headline} subtitle={HOME_MODEL.coreIdea} />
      <HomeBodyCopy>{HOME_MODEL.body}</HomeBodyCopy>
      <HomeBodyCopy>{HOME_MODEL.detail}</HomeBodyCopy>
      <div className="site-container site-grid mt-12 w-full">
        <ol className="col-span-full flex flex-wrap items-center justify-center gap-3 md:col-span-18 md:col-start-4">
          {HOME_MODEL.framework.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-[var(--grey-3)] bg-white px-4 py-2 text-h5 text-grey-8">
                {step}
              </span>
              {index < HOME_MODEL.framework.length - 1 ? (
                <span className="hidden text-grey-5 sm:inline" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </HomeSection>
  );
}
