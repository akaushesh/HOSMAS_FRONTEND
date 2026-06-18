/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    // Pre-existing ESLint violations (unused vars, non-nullable assertions,
    // no-console, naming conventions, etc.) should be fixed incrementally.
    // They should not block production builds.
    ignoreDuringBuilds: true,
  },
};

export default config;
