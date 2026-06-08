import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function HowItWorksSteps() {
  const { howItWorks } = HOMEPAGE_CONTENT;

  return (
    <section id="how-it-works" className="homepage-section homepage-how-it-works scroll-mt-28">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
        <h2 className="homepage-section__title">How it works</h2>
        <ol className="homepage-how-it-works__steps">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="homepage-how-it-works__step">
              <span className="homepage-how-it-works__number" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="homepage-card__title">{step.title}</h3>
                <p className="homepage-card__body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="homepage-how-it-works__microcopy">{howItWorks.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
