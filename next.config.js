/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: "https",
    //         hostname: "ml5ga5m43e.ufs.sh",
    //       },
    //     ],
    //   },
};

export default config;
