// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dashboard",
      meta: [
        { name: "description", content: "STQR Dashbard" },
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  srcDir: "src/",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  ssr: false,
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    MONGO_PASS: process.env.MONGO_PASS,
  },
});
