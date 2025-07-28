import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    env: {
        NEXT_PUBLIC_APP_VERSION: `${process.env.NEXT_PUBLIC_ENVIRONMENT}-${process.env.VERCEL_GIT_COMMIT_SHA}`,
    },
};

export default nextConfig;
