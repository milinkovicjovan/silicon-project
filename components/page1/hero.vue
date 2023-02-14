<template>
  <!-- HERO SECTION -->
  <section
    class="dark-mode bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 section-1"
  >
    <div
      class="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5"
    >
      <div class="row pt-3 pb-2 py-md-4">
        <!-- Text -->
        <div
          class="col-xl-5 col-md-6 pt-lg-5 text-center text-md-start mb-4 mb-md-0"
        >
          <h1 class="display-3 pb-2 pb-sm-3">
            {{ title }}
          </h1>
          <p class="fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">
            {{ description }}
          </p>
          <div
            class="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0"
          >
            <NuxtLink
              target="_blank"
              class="btn btn-lg btn-primary shadow-primary me-3 me-sm-4"
              >{{ primaryCallToAction }}</NuxtLink
            >
            <NuxtLink
              target="_blank"
              class="btn btn-lg btn-outline-secondary"
              >{{ secondaryCallToAction }}</NuxtLink
            >
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-md-start text-start pt-4 pt-lg-5 mt-xxl-5"
          >
            <div class="d-flex me-3">
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle"
                style="width: 52px; height: 52px"
              >
                <img
                  src="../../assets/img/avatar/14.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img
                  src="../../assets/img/avatar/08.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img
                  src="../../assets/img/avatar/15.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
            </div>
            <div class="text-light">
              <strong>400k+</strong> users already with us
            </div>
          </div>
        </div>

        <!-- Parallax gfx -->
        <div class="col-xl-7 col-md-6 d-md-flex justify-content-end">
          <div
            class="parallax mx-auto ms-md-0 me-md-n5"
            style="max-width: 675px"
          >
            <div class="parallax-layer zindex-2" data-depth="0.1">
              <img
                src="../../assets/img/landing/saas-3/hero/layer01.png"
                alt="Card"
              />
            </div>
            <div class="parallax-layer zindex-3" data-depth="0.25">
              <img
                src="../../assets/img/landing/saas-3/hero/layer02.png"
                alt="Bubble"
              />
            </div>
            <div class="parallax-layer" data-depth="-0.15">
              <img
                src="../../assets/img/landing/saas-3/hero/layer03.png"
                alt="Bubble"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  primaryCallToAction: String,
  secondaryCallToAction: String,
});
// import { onMounted } from "vue";

// const API_TOKEN =
//   "2f896640265cbb108e4a3863bd2ffcd37865dcd473a6c3b77df77c0cc87d2b8c4de885404a996fc3d957140eda649bec079e509843dc55f39cd827a0add80d4a30f4fbcdb040f243b551bfe98d6f8881a1be21464bcd21910dc97acfece21917b5d07c747e22f3802407f6b34abd538b08db588c5c41228adb63275b590eb8ba";
// const SERVER_URL = "http://138.197.108.65:8337";

// let allPages = [];
// const route = useRoute();
// // const hero = ref({});
// // console.log("hero", hero);
// // const logo = ref({});
// // // console.log("logo", logo);
// // const getTwoColumnsImageOnRight = ref({});
// // // console.log("gettwocolumns:", getTwoColumnsImageOnRight);
// // const getTwoColumnsImageOnLeft = ref({});
// // const getHowItWorks = ref({});
// // const getVideo = ref({});
// // const getTestimonials = ref({});
// // const getCTA = ref({});
// // const getFooter = ref({});

// onMounted(async () => {
//   await getAllSlugs();
//   if (route.params.slug) {
//     const response = await showPageContentOr404();
//     // console.log(response);
//   }
// });

// async function http(url) {
//   const response = await fetch(`${SERVER_URL}${url}`, {
//     credentials: "include",
//     headers: {
//       Authorization: `Bearer ${API_TOKEN}`,
//     },
//   }).then((response) => response.json());
//   return response;
// }

// async function getAllSlugs() {
//   const { data } = await http(
//     "/api/landing-pages?fields[0]=slug&fields[0]=title"
//   );
//   allPages.value = data;
// }

// function fetchLandingPageContent(slug) {
//   return http(
//     `/api/landing-pages?filters[slug][$eq]=${slug}&populate[blocks][on][blocks.trading-feature][populate]=*&populate[blocks][on][blocks.app-download-cta][populate]=*&populate[blocks][on][blocks.switch-between-light-and-dark-mode][populate]=*&populate[blocks][on][blocks.two-columns-image-right][populate]=*&populate[blocks][on][blocks.video][populate]=*&populate[blocks][on][blocks.two-columns-image-on-left][populate]=*&populate[blocks][on][blocks.hero][populate]=*&populate[blocks][on][blocks.logos][populate]=*&populate[blocks][on][blocks.how-does-it-work][populate]=*&populate[blocks][on][blocks.call-to-action][populate]=*&populate[blocks][on][blocks.hero-single-column][populate]=*&populate[blocks][on][blocks.2x3-grid][populate][0]=items&populate[blocks][on][blocks.2x3-grid][populate][1]=items.image&populate[blocks][on][blocks.testimonials][populate]=*&populate[blocks][on][blocks.pricing][populate][0]=items&populate[blocks][on][blocks.pricing][populate][1]=items.button&populate[blocks][on][blocks.4x2-grid][populate][0]=items&populate[blocks][on][blocks.4x2-grid][populate][1]=items.image&populate[blocks][on][blocks.call-to-action-1][populate]=*&populate[blocks][on][blocks.footer][populate]=*`
//   );
// }

// async function showPageContentOr404() {
//   try {
//     const { data } = await fetchLandingPageContent(route.params.slug);
//     console.log("route", route.params.slug);
//     console.log("data", data);
//     if (data && data.length) {
//       populateLandingPage(data[0]);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// // function showAvailablePagesListList() {
// //   const mainElement = document.querySelector("main");
// //   const addSectionToPage = (section) =>
// //     mainElement.insertAdjacentHTML("beforeend", section);
// //   if (allPages.length) {
// //     addSectionToPage(getAvailablePagesGridHTML());
// //   } else {
// //     addSectionToPage(getNoContentMessageHTML());
// //   }
// // }

// function populateLandingPage(pageContent) {
//   const { title, blocks } = pageContent.attributes;
//   document.title = title;
//   // blocks.forEach((block) => {
//   //   if (block.__component === "blocks.hero") {
//   //   } else if (block.__component === "blocks.two-columns-image-right") {
//   //   } else if (block.__component === "blocks.two-columns-image-on-left") {
//   //   } else if (block.__component === "blocks.how-does-it-work") {
//   //   } else if (block.__component === "blocks.video") {
//   //   } else if (block.__component === "blocks.testimonials") {
//   //   } else if (block.__component === "blocks.call-to-action") {
//   //   } else if (block.__component === "blocks.footer") {
//   //   }
//   // });
// }
</script>

<style scoped>
.section-1 {
  background-image: url(../../assets/img/landing/saas-3/hero/hero-bg.jpg);
}
</style>
