import Image from "next/image";
import Link from "next/link";
import type { NavMenu } from "./nav-config";
import { NavDropdownImageCard } from "./NavDropdownImageCard";
import { BasalButton, cn } from "./ui";

function FeaturedMenu({
  menu,
  onNavigate,
}: {
  menu: Extract<NavMenu, { variant: "featured" }>;
  onNavigate?: () => void;
}) {
  return (
    <div className="nav-dropdown-panel nav-dropdown-panel--featured">
      <div className="nav-dropdown-featured-media">
        <Image
          src={menu.image}
          alt={menu.imageAlt}
          fill
          className="object-cover"
          sizes="360px"
          priority
        />
      </div>
      <div className="nav-dropdown-featured-copy">
        <p className="text-h4 text-grey-9">{menu.title}</p>
        <p className="text-h5 text-pretty text-grey-7">{menu.description}</p>
        <BasalButton href={menu.cta.href} onClick={onNavigate}>
          {menu.cta.label}
        </BasalButton>
      </div>
    </div>
  );
}

function AboutMenu({
  menu,
  onNavigate,
}: {
  menu: Extract<NavMenu, { variant: "about" }>;
  onNavigate?: () => void;
}) {
  return (
    <div className="nav-dropdown-panel nav-dropdown-panel--about">
      {menu.cards.map((card) => (
        <NavDropdownImageCard key={card.label} card={card} onNavigate={onNavigate} />
      ))}
      <p className="nav-dropdown-footer">
        <Link
          href={menu.contactHref}
          className="nav-dropdown-footer-link"
          onClick={onNavigate}
        >
          {menu.contactLabel}
          <span aria-hidden className="ml-0.5">
            ↗
          </span>
        </Link>
      </p>
    </div>
  );
}

function LearnMenu({
  menu,
  onNavigate,
}: {
  menu: Extract<NavMenu, { variant: "learn" }>;
  onNavigate?: () => void;
}) {
  return (
    <div className="nav-dropdown-panel nav-dropdown-panel--learn">
      {menu.imageCards.map((card) => (
        <NavDropdownImageCard key={card.label} card={card} onNavigate={onNavigate} />
      ))}
      <div className="nav-dropdown-divider-list">
        {menu.links.map((link, index) => (
          <div key={link.label}>
            {index > 0 && <hr className="nav-dropdown-divider" />}
            <Link
              href={link.href}
              className="nav-dropdown-divider-link"
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      <Link
        href={menu.allTopics.href}
        className="nav-dropdown-all-topics"
        onClick={onNavigate}
      >
        {menu.allTopics.label}
      </Link>
    </div>
  );
}

export function NavDropdown({
  menu,
  open,
  onNavigate,
}: {
  menu: NavMenu;
  open: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div
      className={cn(
        "nav-dropdown-basal nav-dropdown-basal--positioned",
        `nav-dropdown-basal--${menu.variant}`,
        open ? "nav-dropdown-basal--open" : "nav-dropdown-basal--closed",
      )}
      role="menu"
      aria-hidden={!open}
    >
      {menu.variant === "featured" && (
        <FeaturedMenu menu={menu} onNavigate={onNavigate} />
      )}
      {menu.variant === "about" && <AboutMenu menu={menu} onNavigate={onNavigate} />}
      {menu.variant === "learn" && <LearnMenu menu={menu} onNavigate={onNavigate} />}
    </div>
  );
}
