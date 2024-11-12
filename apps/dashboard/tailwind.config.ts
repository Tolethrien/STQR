import baseConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";
const config: Config = {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx,vue}"],
};
export default config;
