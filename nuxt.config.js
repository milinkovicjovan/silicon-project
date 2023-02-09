// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ["nuxt-swiper"],
  // swiper: {
  //   slidesPerView: 2,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     500: {
  //       slidesPerView: 3,
  //       spaceBetween: 8,
  //     },
  //     650: {
  //       slidesPerView: 4,
  //       spaceBetween: 8,
  //     },
  //     850: {
  //       slidesPerView: 5,
  //       spaceBetween: 8,
  //     },
  //     992: {
  //       slidesPerView: 6,
  //       spaceBetween: 8,
  //     },
  //   },
  //   // Swiper options
  //   //----------------------
  //   // prefix: 'Swiper',
  //   // styleLang: 'css',
  //   modules: ["navigation", "pagination"],
  //   // all modules are imported by default
  // },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/theme.css",
    "~/assets/vendor/boxicons/css/boxicons.min.css",
  ],
  // layouts: {
  //   default: "layouts/default",
  // },
});
