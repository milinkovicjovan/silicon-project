// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    { src: "~/plugins/theme-mode-switch.js", mode: "client" },
    "~/plugins/sticky-navbar.js",
  ],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/theme.css",
    "~/assets/vendor/boxicons/css/boxicons.min.css",
  ],
});
