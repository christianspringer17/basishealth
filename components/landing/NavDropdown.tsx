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
      <LearnMenu menu={menu} onNavigate={onNavigate} />
    </div>
  );
}
