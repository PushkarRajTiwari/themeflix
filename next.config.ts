import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Template downloads are zipped at request time from these source files.
  outputFileTracingIncludes: {
    "/api/download": ["./template-kit/**/*", "./src/app/demos/**/*"],
  },
};

export default nextConfig;
