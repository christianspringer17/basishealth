import Link from "next/link";
import type { NavDropdownItem } from "./nav-config";
import { cn } from "./ui";

export function NavDropdown({
  items,
  open,
}: {
  items: NavDropdownItem[];
  open: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "nav-dropdown-basal",
        open ? "nav-dropdown-basal--open" : "nav-dropdown-basal--closed",
      )}
      role="menu"
      aria-hidden={!open}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label} role="none">
            <Link href={item.href} role="menuitem" className="nav-dropdown-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
