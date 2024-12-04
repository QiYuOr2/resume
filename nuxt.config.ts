import path from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/resume/",
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/icon"],
});
