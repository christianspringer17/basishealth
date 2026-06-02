"use client";

import { PaperTexture } from "@paper-design/shaders-react";
import { EDITORIAL_IMAGES } from "@/lib/media";

export function BrandLockupTextureBackground() {
  return (
    <PaperTexture
      contrast={0}
      roughness={0.6}
      fiber={0.18}
      fiberSize={0.56}
      crumples={0.3}
      crumpleSize={0.35}
      folds={0.65}
      foldCount={5}
      fade={0}
      drops={0.2}
      seed={5.8}
      image={EDITORIAL_IMAGES.brandLockupTexture}
      scale={1}
      fit="cover"
      colorBack="#00000000"
      colorFront="#9FADBC"
      className="brand-lockup-texture"
      aria-hidden
    />
  );
}
