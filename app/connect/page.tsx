import Link from "next/link";
import { ConversionBand } from "@/components/marketing/ConversionBand";
import { InfoPageLayout } from "@/components/marketing/InfoPageLayout";
import { WAITLIST_HREF } from "@/lib/cta";
import { ROUTES } from "@/lib/routes";
import {
  SITE_EMAIL,
  SOCIAL_LABELS,
  SOCIAL_PLATFORMS,
  SOCIAL_URLS,
  socialHref,
  isExternalSocial,
} from "@/lib/site";

export const metadata = {
  title: "Connect",
  description: "Follow Basis Health and get in touch with our team.",
};

export default function ConnectPage() {
  return (
    <>
      <InfoPageLayout
        title="Connect"
        subtitle="Follow our work and reach the team when you need us."
        backHref={ROUTES.home}
        backLabel="Home"
      >
        <div className="info-page-sections">
          <section className="info-page-block">
            <h2 className="info-page-heading">Email</h2>
            <p className="text-body-lg text-grey-7">
              The fastest way to reach us:
            </p>
            <p>
              <a href={`mailto:${SITE_EMAIL}`} className="info-page-link">
                {SITE_EMAIL}
              </a>
            </p>
          </section>

          <section className="info-page-block">
            <h2 className="info-page-heading">Social</h2>
            <ul className="connect-list">
              {SOCIAL_PLATFORMS.map((platform) => {
                const href = socialHref(platform);
                const external = isExternalSocial(platform);
                const label = SOCIAL_LABELS[platform];
                return (
                  <li key={platform}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-list__link"
                      >
                        {label}
                        <span className="connect-list__hint">Opens in new tab</span>
                      </a>
                    ) : (
                      <span className="connect-list__pending">
                        <span className="connect-list__name">{label}</span>
                        <span className="connect-list__hint">
                          Coming soon — email us in the meantime
                        </span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            {!SOCIAL_PLATFORMS.some((p) => SOCIAL_URLS[p]) && (
              <p className="text-body-lg text-grey-7">
                We&apos;re setting up our social channels. For updates, join via the{" "}
                <Link href={WAITLIST_HREF} className="info-page-link">
                  waitlist
                </Link>{" "}
                or{" "}
                <Link href={ROUTES.contact} className="info-page-link">
                  contact page
                </Link>
                .
              </p>
            )}
          </section>
        </div>
      </InfoPageLayout>
      <ConversionBand />
    </>
  );
}
