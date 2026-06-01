import { HOME_FAQS } from "@/lib/content/faqs";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";

export function HomeFaqSection() {
  return (
    <section id="faq" className="section-shell section-gap-md w-full scroll-mt-28">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-14 md:col-start-6">
          <FaqAccordion title="Common questions" items={HOME_FAQS} />
        </div>
      </div>
    </section>
  );
}
