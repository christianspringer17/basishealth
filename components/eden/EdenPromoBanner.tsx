import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";

export function EdenPromoBanner() {
  const items = [...EDEN_HOMEPAGE.promoBanner, ...EDEN_HOMEPAGE.promoBanner];

  return (
    <div className="eden-promo" aria-hidden>
      <div className="eden-promo__track">
        {items.map((item, index) => (
          <Link key={`${item.href}-${index}`} href={item.href} className="eden-promo__item">
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
