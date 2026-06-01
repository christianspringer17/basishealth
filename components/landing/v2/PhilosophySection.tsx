import { HOME_PHILOSOPHY } from "@/lib/content/home";
import { ROUTES } from "@/lib/routes";
import { BasalButton } from "../ui";
import { HomeBodyCopy, HomeSection, HomeSectionIntro } from "./HomeSection";

export function PhilosophySection() {
  return (
    <HomeSection id="philosophy">
      <HomeSectionIntro title={HOME_PHILOSOPHY.headline} />
      <HomeBodyCopy>{HOME_PHILOSOPHY.body}</HomeBodyCopy>
      <HomeBodyCopy>{HOME_PHILOSOPHY.detail}</HomeBodyCopy>
      <div className="site-container site-grid mt-8 w-full">
        <p className="col-span-full text-center text-body-lg text-grey-7 md:col-span-16 md:col-start-5">
          Basis exists between{" "}
          {HOME_PHILOSOPHY.pillars.map((pillar, i) => (
            <span key={pillar}>
              {i > 0 ? (i === HOME_PHILOSOPHY.pillars.length - 1 ? ", and " : ", ") : null}
              {pillar}
            </span>
          ))}
          . {HOME_PHILOSOPHY.center}
        </p>
      </div>
      <div className="site-container site-grid mt-6 w-full">
        <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
          <BasalButton href={ROUTES.about}>About Basis</BasalButton>
        </div>
      </div>
    </HomeSection>
  );
}
