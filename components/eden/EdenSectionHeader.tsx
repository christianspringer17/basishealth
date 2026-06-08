type EdenSectionHeaderProps = {
  id?: string;
  title: string;
  subhead?: string;
  align?: "left" | "center";
  cta?: { label: string; href: string };
  className?: string;
};

export function EdenSectionHeader({
  id,
  title,
  subhead,
  align = "left",
  cta,
  className = "",
}: EdenSectionHeaderProps) {
  const alignClass = align === "center" ? "eden-section-head--center" : "";

  return (
    <header className={`eden-section-head ${alignClass} ${className}`.trim()}>
      <div className="eden-section-head__text">
        <h2 id={id} className="eden-section-title">
          {title}
        </h2>
        {subhead ? <p className="eden-section-subhead">{subhead}</p> : null}
      </div>
      {cta ? (
        <a href={cta.href} className="eden-btn eden-btn--primary eden-section-head__cta">
          {cta.label}
        </a>
      ) : null}
    </header>
  );
}
