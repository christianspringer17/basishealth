import Image from "next/image";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { MEDIA } from "@/lib/media";

export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const IMAGES = MEDIA;

export const basalPlusIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1z" />
  </svg>
);

const basalArrowIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.172 12 8.222 7.05l1.415-1.415L16 12l-6.364 6.364-1.415-1.415z" />
  </svg>
);

function BasalButtonInner({
  children,
  icon = "plus",
}: {
  children: ReactNode;
  icon?: "plus" | "arrow" | "none";
}) {
  return (
    <>
      <span className="basal-btn__label">{children}</span>
      {icon !== "none" && (
        <span className="basal-btn__pill" aria-hidden>
          {icon === "arrow" ? basalArrowIcon : basalPlusIcon}
        </span>
      )}
    </>
  );
}

type BasalButtonVariant = "default" | "accent" | "intro" | "secondary";

function basalBtnVariantClass(variant: BasalButtonVariant) {
  if (variant === "accent") return "basal-btn--accent";
  if (variant === "intro") return "basal-btn--intro";
  if (variant === "secondary") return "basal-btn--secondary";
  return "basal-btn--primary";
}

function basalBtnIcon(variant: BasalButtonVariant): "plus" | "arrow" | "none" {
  if (variant === "secondary") return "arrow";
  if (variant === "intro") return "arrow";
  return "plus";
}

const basalBtnClass = (className?: string, variant: BasalButtonVariant = "default") =>
  cn(
    "group/button basal-btn focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--grey-3)]",
    basalBtnVariantClass(variant),
    className,
  );

export function BasalButton({
  href,
  children,
  className,
  variant = "default",
  onClick,
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: BasalButtonVariant;
  onClick?: (e: React.MouseEvent) => void;
} & Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className" | "onClick">) {
  return (
    <Link href={href} className={basalBtnClass(className, variant)} onClick={onClick} {...rest}>
      <BasalButtonInner icon={basalBtnIcon(variant)}>{children}</BasalButtonInner>
    </Link>
  );
}

export function BasalSubmitButton({
  children,
  className,
  variant = "default",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: BasalButtonVariant;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "type">) {
  return (
    <button
      type={props.type ?? "submit"}
      disabled={props.disabled}
      className={cn(basalBtnClass(className, variant), "cursor-pointer")}
    >
      <BasalButtonInner icon={basalBtnIcon(variant)}>{children}</BasalButtonInner>
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
      <div className="text-h1 text-grey-7 text-pretty md:text-h1-lg">{title}</div>
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
      aria-label="Learn more about GLP–One"
      onClick={onClick}
      className="basal-btn--intro-icon focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--grey-3)]"
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
  surface = "default",
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect?: "cinema" | "card" | "portrait" | "product";
  rounded?: "lg" | "2xl" | "none";
  objectFit?: "cover" | "contain";
  /** `transparent` — no frame fill (for PNG product shots on page background) */
  surface?: "default" | "transparent";
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
    surface === "transparent"
      ? "bg-transparent"
      : aspect === "product" || objectFit === "contain"
        ? "bg-white"
        : "bg-[var(--grey-2)]";

  const roundedClass =
    rounded === "none"
      ? ""
      : rounded === "2xl"
        ? "rounded-basal-2xl"
        : "rounded-basal-lg";

  const productImgPadding =
    surface === "transparent" ? "p-0 md:p-2" : "p-6 md:p-10";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        bgClass,
        aspectClass,
        roundedClass,
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
          className={cn(
            "absolute inset-0 h-full w-full object-contain",
            productImgPadding,
          )}
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
