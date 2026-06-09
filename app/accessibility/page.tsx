import type { Metadata } from "next";
import { EdenLegalPage } from "@/components/eden/EdenLegalPage";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility — Basis Health",
  description: "Basis Health accessibility commitment and how to request assistance.",
};

export default function AccessibilityPage() {
  return (
    <EdenLegalPage title="Accessibility" lastUpdated="May 27, 2026">
      <div className="prose">
        <section className="prose__section" aria-labelledby="accessibility-commitment">
          <h2 id="accessibility-commitment" className="prose__heading prose__heading--h2">
            Our commitment
          </h2>
          <div className="prose__section-body">
            <p className="prose__paragraph">
              Basis Health is committed to making our website and digital experiences
              accessible to people with disabilities. We aim to conform to widely
              recognized guidelines, including WCAG 2.1 Level AA, where practicable.
            </p>
          </div>
        </section>

        <section className="prose__section" aria-labelledby="accessibility-measures">
          <h2 id="accessibility-measures" className="prose__heading prose__heading--h2">
            Measures we take
          </h2>
          <div className="prose__section-body">
            <ul className="prose__list prose__list--bullet">
              <li className="prose__list-item">
                Semantic HTML and descriptive labels for interactive elements
              </li>
              <li className="prose__list-item">
                Keyboard-accessible navigation and focus states on primary controls
              </li>
              <li className="prose__list-item">Sufficient color contrast for body text and links</li>
              <li className="prose__list-item">Alternative text for meaningful images</li>
              <li className="prose__list-item">
                Respect for reduced-motion preferences where supported
              </li>
            </ul>
          </div>
        </section>

        <section className="prose__section" aria-labelledby="accessibility-limitations">
          <h2 id="accessibility-limitations" className="prose__heading prose__heading--h2">
            Known limitations
          </h2>
          <div className="prose__section-body">
            <p className="prose__paragraph">
              Some third-party embeds, video content, or legacy PDFs may not meet every
              accessibility standard. We review new content before publication and
              remediate issues when identified.
            </p>
          </div>
        </section>

        <section className="prose__section" aria-labelledby="accessibility-feedback">
          <h2 id="accessibility-feedback" className="prose__heading prose__heading--h2">
            Feedback
          </h2>
          <div className="prose__section-body">
            <p className="prose__paragraph">
              If you encounter a barrier on our site or need content in an alternative
              format, contact us at{" "}
              <a className="prose__link" href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
              . Please include the page URL and a brief description of the issue. We aim
              to respond within a reasonable timeframe.
            </p>
          </div>
        </section>
      </div>
    </EdenLegalPage>
  );
}
