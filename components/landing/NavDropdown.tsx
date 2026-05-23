import Link from "next/link";
import type { NavDropdownItem } from "./nav-config";
import { cn } from "./ui";

export function NavDropdown({
  items,
  open,
  onNavigate,
}: {
  items: NavDropdownItem[];
  open: boolean;
  onNavigate?: () => void;
}) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "nav-dropdown-basal nav-dropdown-basal--positioned",
        open ? "nav-dropdown-basal--open" : "nav-dropdown-basal--closed",
      )}
      role="menu"
      aria-hidden={!open}
    >
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label} role="none">
            <Link
              href={item.href}
              role="menuitem"
              className="nav-dropdown-link"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
