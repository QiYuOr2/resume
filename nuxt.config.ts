// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/resume/",
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/icon"],
});
