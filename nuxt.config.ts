// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig:{
      API_URL: "http://127.0.0.1:8000",
      public:{
        API_URL: "http://127.0.0.1:8000",
      }
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: ["@/assets/css/main.css"],
})
