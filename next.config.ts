import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Native assets only — see public/images and public/videos */
  async redirects() {
    return [
      /* 1.x routes removed in 2.0 — point to closest equivalent */
      { source: "/glp-one", destination: "/pricing", permanent: true },
      { source: "/glp-one/:path*", destination: "/pricing", permanent: true },
      { source: "/membership", destination: "/pricing", permanent: true },
      { source: "/our-approach", destination: "/about", permanent: true },
      { source: "/about/how-it-works", destination: "/about", permanent: true },
      { source: "/about/vitality", destination: "/treatments/vitality", permanent: true },
      { source: "/account", destination: "/", permanent: true },
      { source: "/signup", destination: "/", permanent: true },
      { source: "/connect", destination: "/contact", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: false },
    ];
  },
};

export default nextConfig;
