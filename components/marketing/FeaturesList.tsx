/** Basal-style feature list — titles only, no card grid */
export function FeaturesList({
  title = "Features",
  intro,
  items,
}: {
  title?: string;
  intro?: string;
  items: string[];
}) {
  return (
    <div className="features-list">
      {title && <h2 className="text-h1-lg text-grey-9">{title}</h2>}
      {intro && <p className="features-list-intro text-body-lg text-pretty text-grey-7">{intro}</p>}
      <ul className="features-list-items">
        {items.map((item) => (
          <li key={item} className="features-list-item text-h4 text-grey-9">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
