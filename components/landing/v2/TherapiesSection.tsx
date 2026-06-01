import { HOME_THERAPIES } from "@/lib/content/home";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function TherapiesSection() {
  return (
    <HomeSection id="therapies" className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
      <HomeSectionIntro title={HOME_THERAPIES.headline} subtitle={HOME_THERAPIES.body} />
      <HomeBodyCopy>{HOME_THERAPIES.detail}</HomeBodyCopy>
      <div className="site-container site-grid mt-8 w-full">
        <ul className="col-span-full flex flex-wrap justify-center gap-3 md:col-span-16 md:col-start-5">
          {HOME_THERAPIES.categories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-[var(--grey-3)] bg-white px-4 py-2 text-h5 text-grey-8"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <HomeBodyCopy>{HOME_THERAPIES.disclaimer}</HomeBodyCopy>
    </HomeSection>
  );
}
