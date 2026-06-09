import Link from "next/link";
import { EDEN_HOMEPAGE } from "@/lib/content/eden-homepage";

function PromoGroup({
  items,
  groupKey,
  hidden,
}: {
  items: typeof EDEN_HOMEPAGE.promoBanner;
  groupKey: string;
  hidden?: boolean;
}) {
  return (
    <div className="eden-promo__group" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <Link
          key={`${groupKey}-${item.href}-${index}`}
          href={item.href}
          className="eden-promo__item"
        >
          <span className="eden-promo__dot" aria-hidden />
          {item.text}
          <span className="eden-promo__chev" aria-hidden>
            →
          </span>
        </Link>
      ))}
    </div>
  );
}

export function EdenPromoBanner() {
  const items = EDEN_HOMEPAGE.promoBanner;

  return (
    <div className="eden-promo" role="region" aria-label="Program highlights">
      <div className="eden-promo__fade eden-promo__fade--left" aria-hidden />
      <div className="eden-promo__fade eden-promo__fade--right" aria-hidden />
      <div className="eden-promo__track">
        <PromoGroup items={items} groupKey="a" />
        <PromoGroup items={items} groupKey="b" hidden />
      </div>
    </div>
  );
}
