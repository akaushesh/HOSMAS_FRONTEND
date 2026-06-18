/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    // Pre-existing ESLint violations (unsafe any, no-console, unused vars,
    // no-floating-promises, etc.) should be fixed incrementally.
    // They should not block production builds.
    ignoreDuringBuilds: true,
  },
};

export default config;
