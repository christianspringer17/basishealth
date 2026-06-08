import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";
import { EdenIconPerson, EdenIconShield, EdenIconTruck } from "./eden-icons";
import { EdenReveal } from "./EdenReveal";
import { EdenSectionHeader } from "./EdenSectionHeader";

const FEATURE_ICONS = {
  person: EdenIconPerson,
  truck: EdenIconTruck,
  shield: EdenIconShield,
} as const;

const FEATURE_ACCENTS = ["blue", "violet", "sea", "dawn"] as const;

export function EdenOnlineSection() {
  const { online } = EDEN_HOMEPAGE;

  return (
    <section className="eden-online" aria-labelledby="eden-online-title">
      <div className="site-container">
        <EdenSectionHeader
          id="eden-online-title"
          title={online.headline}
          subhead={online.subhead}
        />

        <EdenReveal>
        <div className="eden-online__layout">
          <div className="eden-online__visual eden-dash-card eden-online__visual--tinted">
            <div className="eden-online__visual-inner">
              <img
                src={online.image}
                alt={online.imageAlt}
                className="eden-online__product"
                width={480}
                height={480}
                loading="lazy"
              />
            </div>
            <p className="eden-online__visual-caption">
              Everything you need — assessment, provider review, and ongoing support in one place.
            </p>
          </div>

          <div className="eden-online__grid">
            {online.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[feature.icon];
              const accent = FEATURE_ACCENTS[index % FEATURE_ACCENTS.length];
              return (
                <article
                  key={feature.title}
                  className="eden-online__feature eden-dash-card eden-online__feature--tinted"
                  data-accent={accent}
                >
                  <span className="eden-online__feature-icon" aria-hidden>
                    <Icon />
                  </span>
                  <h3 className="eden-online__feature-title">{feature.title}</h3>
                  <p className="eden-online__feature-desc">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
        </EdenReveal>

        <p className="eden-online__disclaimer">{online.disclaimer}</p>
      </div>
    </section>
  );
}
