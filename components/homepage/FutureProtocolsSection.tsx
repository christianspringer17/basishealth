import { HOMEPAGE_CONTENT } from "@/lib/content/homepage";

export function FutureProtocolsSection() {
  const { futureProtocols } = HOMEPAGE_CONTENT;

  return (
    <section className="homepage-section homepage-future-protocols">
      <div className="site-container site-grid w-full">
        <div className="col-span-full md:col-span-22 md:col-start-2">
        <h2 className="homepage-section__title">{futureProtocols.headline}</h2>
        <div className="homepage-future-protocols__grid">
          {futureProtocols.tracks.map((track) => (
            <article key={track.name} className="homepage-card homepage-future-protocols__card">
              <h3 className="homepage-card__title">{track.name}</h3>
              <p className="homepage-future-protocols__status">{track.status}</p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
