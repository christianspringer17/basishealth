import { CategorizedFaqSection } from "@/components/marketing/CategorizedFaqSection";

export function HomeFaqSection() {
  return (
    <section
      id="faq"
      className="faq-categorized-section section-shell section-gap-md w-full scroll-mt-28"
    >
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-20 md:col-start-3">
          <CategorizedFaqSection />
        </div>
      </div>
    </section>
  );
}
