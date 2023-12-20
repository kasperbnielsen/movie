// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: { SERVER_HOST: process.env.NUXT_SERVER_HOST },
  },
});
