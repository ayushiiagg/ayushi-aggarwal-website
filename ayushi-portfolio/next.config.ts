import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root to this app so parent lockfiles cannot confuse Turbopack.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
