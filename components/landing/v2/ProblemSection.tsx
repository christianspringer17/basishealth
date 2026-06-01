import { HOME_PROBLEM } from "@/lib/content/home";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function ProblemSection() {
  return (
    <HomeSection>
      <HomeSectionIntro title={HOME_PROBLEM.headline} />
      <HomeBodyCopy>{HOME_PROBLEM.body}</HomeBodyCopy>
      <HomeBodyCopy>{HOME_PROBLEM.conclusion}</HomeBodyCopy>
      <div className="site-container site-grid mt-10 w-full">
        <ul className="col-span-full grid gap-4 sm:grid-cols-2 md:col-span-16 md:col-start-5 lg:grid-cols-4">
          {HOME_PROBLEM.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-basal-lg border border-[var(--grey-3)] bg-[var(--grey-1)] px-5 py-6 text-center text-h5 text-grey-8"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
}
