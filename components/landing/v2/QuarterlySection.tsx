import { HOME_QUARTERLY } from "@/lib/content/home";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function QuarterlySection() {
  return (
    <HomeSection id="quarterly" className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
      <HomeSectionIntro title={HOME_QUARTERLY.headline} />
      <HomeBodyCopy>{HOME_QUARTERLY.body}</HomeBodyCopy>
      <div className="site-container site-grid mt-8 w-full">
        <ul className="col-span-full flex flex-wrap justify-center gap-3 md:col-span-18 md:col-start-4">
          {HOME_QUARTERLY.language.map((phrase) => (
            <li
              key={phrase}
              className="rounded-full border border-[var(--grey-3)] bg-white px-4 py-2 text-h5 text-grey-8"
            >
              {phrase}
            </li>
          ))}
        </ul>
      </div>
      <HomeBodyCopy>{HOME_QUARTERLY.disclaimer}</HomeBodyCopy>
    </HomeSection>
  );
}
