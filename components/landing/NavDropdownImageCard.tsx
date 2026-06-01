import Image from "next/image";
import Link from "next/link";
import type { NavImageCard } from "./nav-config";

export function NavDropdownImageCard({
  card,
  onNavigate,
  pillClassName = "nav-dropdown-glass-pill",
}: {
  card: NavImageCard;
  onNavigate?: () => void;
  pillClassName?: string;
}) {
  return (
    <Link
      href={card.href}
      className="nav-dropdown-image-card group focus"
      onClick={onNavigate}
    >
      <Image
        src={card.image}
        alt={card.imageAlt}
        fill
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        sizes="380px"
        quality={88}
      />
      <span className="nav-dropdown-image-scrim" aria-hidden />
      <span className={pillClassName}>
        {card.label}
        {card.showPlayIcon && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 size-3"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </span>
    </Link>
  );
}
