import { LearnArticleCard } from "@/components/marketing/LearnArticleCard";
import { HOME_PROTOCOL_NOTES } from "@/lib/content/home";
import { learnIndexEntries } from "@/lib/content/learn-index";
import { PROTOCOL_NOTES_LABEL } from "@/lib/positioning";
import { ROUTES } from "@/lib/routes";
import { BasalButton } from "../ui";
import { HomeSection, HomeSectionIntro } from "./HomeSection";

const TEASER_SLUGS = [
  "protocol-areas",
  "meet-your-metabolism",
  "what-we-measure",
] as const;

export function ProtocolNotesSection() {
  const entries = TEASER_SLUGS.map(
    (slug) => learnIndexEntries.find((e) => e.slug === slug)!,
  ).filter(Boolean);

  return (
    <HomeSection id="protocol-notes" className="section-shell section-gap-lg w-full bg-[var(--grey-1)]">
      <HomeSectionIntro title={HOME_PROTOCOL_NOTES.headline} subtitle={HOME_PROTOCOL_NOTES.body} />
      <div className="site-container site-grid mt-10 w-full">
        <div className="col-span-full grid gap-5 md:col-span-20 md:col-start-3 md:grid-cols-3">
          {entries.map((entry) => (
            <LearnArticleCard key={entry.slug} entry={entry} variant="carousel" />
          ))}
        </div>
      </div>
      <div className="site-container site-grid mt-8 w-full">
        <div className="col-span-full flex justify-center md:col-span-16 md:col-start-5">
          <BasalButton href={ROUTES.learn}>Browse {PROTOCOL_NOTES_LABEL}</BasalButton>
        </div>
      </div>
    </HomeSection>
  );
}
