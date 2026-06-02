"use client";

import { PaperTexture } from "@paper-design/shaders-react";
import { EDITORIAL_IMAGES } from "@/lib/media";

export function AboutPaperTextureBackground() {
  return (
    <PaperTexture
      contrast={0}
      roughness={0.4}
      fiber={0.44}
      fiberSize={0.53}
      crumples={0.23}
      crumpleSize={0.35}
      folds={0.65}
      foldCount={5}
      fade={0}
      drops={0.2}
      seed={5.8}
      image={EDITORIAL_IMAGES.aboutPaperTexture}
      scale={1.18}
      fit="cover"
      colorBack="#00000000"
      colorFront="#9FADBC"
      className="about-page__paper-texture"
      aria-hidden
    />
  );
}
