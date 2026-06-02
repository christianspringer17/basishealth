import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Native assets only — see public/images and public/videos */
  async redirects() {
    return [
      {
        source: "/faq",
        destination: "/membership#faq",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
