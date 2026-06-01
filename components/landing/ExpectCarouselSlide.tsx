import Image from "next/image";
import { cn } from "./ui";

type ExpectCarouselSlideProps = {
  index: number;
  image: string;
  imageMobile?: string;
  alt: string;
  isActive: boolean;
};

export function ExpectCarouselSlide({
  index,
  image,
  imageMobile,
  alt,
  isActive,
}: ExpectCarouselSlideProps) {
  return (
    <figure
      className={cn("expect-carousel-slide__frame", isActive && "is-active")}
      aria-hidden={!isActive}
    >
      <div className="expect-carousel-slide__media">
        {imageMobile && (
          <Image
            src={imageMobile}
            alt={alt}
            fill
            className="object-cover md:hidden"
            sizes="78vw"
            priority={index === 0}
          />
        )}
        <Image
          src={image}
          alt={alt}
          fill
          className={cn("object-cover", imageMobile && "hidden md:block")}
          sizes="(max-width: 860px) 78vw, 720px"
          priority={index === 0 && !imageMobile}
        />
      </div>
    </figure>
  );
}
