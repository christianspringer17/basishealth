import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import type { NavMenu } from "./nav-config";
import { NavDropdownImageCard } from "./NavDropdownImageCard";
import { cn } from "./ui";

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
              prefetch={link.href === ROUTES.learn ? false : undefined}
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
        prefetch={menu.allTopics.href === ROUTES.learn ? false : undefined}
        className="nav-dropdown-all-topics"
        onClick={onNavigate}
      >
        {menu.allTopics.label}
      </Link>
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
      {menu.imageCards.map((card) => (
        <NavDropdownImageCard key={card.label} card={card} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

function MembershipMenu({
  menu,
  onNavigate,
}: {
  menu: Extract<NavMenu, { variant: "membership" }>;
  onNavigate?: () => void;
}) {
  const { featured } = menu;

  return (
    <div className="nav-dropdown-panel nav-dropdown-panel--membership">
      <Link
        href={featured.href}
        className="nav-dropdown-featured-media group focus"
        onClick={onNavigate}
      >
        <Image
          src={featured.image}
          alt={featured.imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="360px"
          quality={88}
        />
        <span className="nav-dropdown-image-scrim" aria-hidden />
        <span className="nav-dropdown-glass-pill">{featured.label}</span>
      </Link>

      <div className="nav-dropdown-divider-list">
        {menu.links.map((link, index) => (
          <div key={link.label}>
            {index > 0 && <hr className="nav-dropdown-divider" />}
            <Link href={link.href} className="nav-dropdown-divider-link" onClick={onNavigate}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
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
      {menu.variant === "learn" ? (
        <LearnMenu menu={menu} onNavigate={onNavigate} />
      ) : menu.variant === "about" ? (
        <AboutMenu menu={menu} onNavigate={onNavigate} />
      ) : (
        <MembershipMenu menu={menu} onNavigate={onNavigate} />
      )}
    </div>
  );
}
