import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // public/ assets aren't bundled into serverless functions by default, so the
  // routes that read the meal plan folder need it traced in explicitly.
  outputFileTracingIncludes: {
    '/api/meal-plans': ['./public/meal-plans/**/*'],
    '/api/send-meal-plans': ['./public/meal-plans/**/*'],
  },
};

export default nextConfig;
