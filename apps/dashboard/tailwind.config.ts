import baseConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";
const config: Config = {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dash-main": "#202036",
        "dash-sec": "#323253",
        "dash-third": "#58588B",
        "dash-accent": "#08849D",
        "dash-stroke": "#5D5D96",
        "dash-TextActive": "#FFFFFF",
        "dash-TextInactive": "#D1D1D1",
        "dash-listOdd": "#33334C",
        "dash-listEven": "#2B2B45",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        "window-4": "4px 4px 4px 0 rgba(0, 0, 0, 0.5)",
        "window-6": "6px 6px 5px 0 rgba(0, 0, 0, 0.5)",
        "button-inner": "inset 2px 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
export default config;
