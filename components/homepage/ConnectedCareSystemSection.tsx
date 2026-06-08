import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

/** Basalt “Smart Skincare” — single feature statement block */
export function ConnectedCareSystemSection() {
  const { connectedCare } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-feature">
      <div className="site-container homepage-feature__inner">
        <h2 className="homepage-feature__title">{connectedCare.headline}</h2>
        <p className="homepage-feature__body">{connectedCare.subhead}</p>
      </div>
    </section>
  );
}
