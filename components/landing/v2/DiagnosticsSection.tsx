import { HOME_DIAGNOSTICS } from "@/lib/content/home";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function DiagnosticsSection() {
  return (
    <HomeSection id="diagnostics">
      <HomeSectionIntro
        title={HOME_DIAGNOSTICS.headline}
        subtitle={HOME_DIAGNOSTICS.keyLine}
      />
      <HomeBodyCopy>{HOME_DIAGNOSTICS.body}</HomeBodyCopy>
      <HomeBodyCopy>{HOME_DIAGNOSTICS.detail}</HomeBodyCopy>
      <div className="site-container site-grid mt-8 w-full">
        <ul className="col-span-full grid gap-3 md:col-span-16 md:col-start-5">
          {HOME_DIAGNOSTICS.points.map((point) => (
            <li
              key={point}
              className="rounded-basal-lg border border-[var(--grey-3)] bg-[var(--grey-1)] px-5 py-4 text-body text-grey-7"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
      <HomeBodyCopy>{HOME_DIAGNOSTICS.statusNote}</HomeBodyCopy>
    </HomeSection>
  );
}
