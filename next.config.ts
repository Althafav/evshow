import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  i18n: {
    locales: ["en", "ar", "zh"],
    defaultLocale: "en",
  },
};

export default nextConfig;
