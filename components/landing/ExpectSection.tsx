import {
  LIFE_UNLOCKED_SECTION,
} from "@/lib/content/life-unlocked-carousel";
import { MixedReviewCarousel } from "./mixed-carousel/MixedReviewCarousel";

export function ExpectSection() {
  return (
    <section
      id="how-it-works"
      className="life-unlocked-section section-shell section-gap-lg w-full overflow-hidden scroll-mt-28"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full flex flex-col items-center gap-3 text-center md:col-span-16 md:col-start-5">
          <h2 className="section-accent-title">
            {LIFE_UNLOCKED_SECTION.title}
          </h2>
          <p className="max-w-[540px] text-body-lg text-pretty text-grey-7">
            {LIFE_UNLOCKED_SECTION.subtitle}
          </p>
        </div>
      </div>

      <MixedReviewCarousel />
    </section>
  );
}
