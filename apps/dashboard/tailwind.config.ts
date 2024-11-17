import baseConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";
const config: Config = {
  ...baseConfig,
  content: ["./src/**/*.{ts,tsx,vue}"],
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        ".text-input-third": {
          "@apply  bg-dash-third shadow-button-inner placeholder:text-dash-TextInactive rounded-md px-4 py-2 outline-none":
            {},
        },
        ".text-input-sec": {
          "@apply  bg-dash-sec shadow-button-inner placeholder:text-dash-TextInactive rounded-md px-4 py-2 outline-none":
            {},
        },
      });
    },
  ],
  theme: {
    extend: {
      animation: {
        shakeAndFlash: "shakeAndFlash 1s ease-in-out",
      },
      keyframes: {
        shakeAndFlash: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-5px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(5px)",
          },
          "50%": {
            backgroundColor: "#7f1d1d",
          },
        },
      },
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
        side: "4px 5px 5px 0 rgba(0, 0, 0, 0.25)",
        "button-inner": "inset 2px 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
export default config;
