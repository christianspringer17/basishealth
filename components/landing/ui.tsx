import Image from "next/image";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { MEDIA } from "@/lib/media";

export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const IMAGES = MEDIA;

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.172 12 8.222 7.05l1.415-1.415L16 12l-6.364 6.364-1.415-1.415z" />
  </svg>
);

function BasalButtonInner({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="basal-btn__label">{children}</span>
      <span className="basal-btn__pill" aria-hidden>
        {arrowIcon}
      </span>
    </>
  );
}

const basalBtnClass = (className?: string) =>
  cn(
    "group/button basal-btn basal-btn--grey focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--grey-3)]",
    className,
  );

export function BasalButton({
  href,
  children,
  className,
  onClick,
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
} & Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className" | "onClick">) {
  return (
    <Link href={href} className={basalBtnClass(className)} onClick={onClick} {...rest}>
      <BasalButtonInner>{children}</BasalButtonInner>
    </Link>
  );
}

export function BasalSubmitButton({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "type">) {
  return (
    <button
      type={props.type ?? "submit"}
      disabled={props.disabled}
      className={cn(basalBtnClass(className), "cursor-pointer")}
    >
      <BasalButtonInner>{children}</BasalButtonInner>
    </button>
  );
}

export function TextBlock({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="text-h1 text-grey-9 text-pretty md:text-h1-lg">{title}</div>
      {subtitle && (
        <div className="text-lead text-grey-7 text-pretty md:text-subtitle">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export function PlusButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label="Learn more about the program"
      onClick={onClick}
      className="flex h-[44px] w-[44px] items-center justify-center rounded-[14px] border border-[var(--grey-3)] bg-[var(--grey-1)] text-grey-7 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1z" />
      </svg>
    </button>
  );
}

export function MediaFrame({
  src,
  alt,
  aspect = "cinema",
  rounded = "2xl",
  objectFit = "cover",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: "cinema" | "card" | "portrait" | "product";
  rounded?: "lg" | "2xl";
  objectFit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
}) {
  const aspectClass =
    aspect === "product"
      ? "aspect-[4/3] md:aspect-[3/2]"
      : aspect === "cinema"
        ? "aspect-[0.75] md:aspect-[16/9]"
        : aspect === "portrait"
          ? "aspect-[0.75] md:aspect-[1.78]"
          : "aspect-[0.85] md:aspect-video";

  const bgClass =
    aspect === "product" || objectFit === "contain"
      ? "bg-white"
      : "bg-[var(--grey-2)]";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        bgClass,
        aspectClass,
        rounded === "2xl" ? "rounded-basal-2xl" : "rounded-basal-lg",
        className,
      )}
    >
      {aspect === "product" ? (
        // Native img — full-resolution PNG, no optimizer downscaling
        <img
          src={src}
          alt={alt}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-contain p-6 md:p-10"
          draggable={false}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={75}
          className={objectFit === "contain" ? "object-contain" : "object-cover"}
          sizes="(max-width: 860px) 90vw, 70vw"
        />
      )}
    </div>
  );
}
