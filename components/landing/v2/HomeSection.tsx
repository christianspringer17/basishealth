import type { ReactNode } from "react";
import { TextBlock } from "../ui";

export function HomeSection({
  id,
  children,
  className = "section-shell section-gap-lg w-full",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

export function HomeSectionIntro({
  title,
  subtitle,
  centered = true,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className="site-container site-grid w-full">
      <div
        className={
          centered
            ? "col-span-full flex flex-col items-center md:col-span-16 md:col-start-5"
            : "col-span-full md:col-span-18 md:col-start-4"
        }
      >
        <TextBlock title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}

export function HomeBodyCopy({
  children,
  className = "text-body-lg text-pretty text-grey-7",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="site-container site-grid w-full">
      <div className="col-span-full md:col-span-16 md:col-start-5">
        <p className={`${className} text-center`}>{children}</p>
      </div>
    </div>
  );
}
