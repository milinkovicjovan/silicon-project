<template>
  <div v-for="block in blocks" :key="block.id">
    <LandingPageHeroSectionBank
      v-if="block.__component === 'blocks.hero'"
      v-bind="block.attributes"
      :title="block.title"
      :description="block.description"
      :primaryCallToAction="block.primaryCallToAction.title"
      :secondaryCallToAction="block.secondaryCallToAction.title"
    ></LandingPageHeroSectionBank>
    <LandingPageBrands
      v-if="block.__component === 'blocks.logos'"
      v-bind="block.attributes"
      :images="block.images.data"
    ></LandingPageBrands>
    <LandingPageTradingFeature
      v-if="block.__component === 'blocks.trading-feature'"
      v-bind="block.attributes"
    ></LandingPageTradingFeature>
    <LandingPageAppFeature
      v-if="block.__component === 'blocks.two-columns-image-right'"
      :title="block.title"
      :subtitle="block.subtitle"
      :image="block.image.data.attributes.url"
    >
    </LandingPageAppFeature>
    <LandingPageCryptoFeature
      v-if="block.__component === 'blocks.two-columns-image-on-left'"
      :title="block.title"
      :subtitle="block.subtitle"
      :image="block.image.data.attributes.url"
    ></LandingPageCryptoFeature>
    <LandingPageHowItWorks
      v-if="block.__component === 'blocks.how-does-it-work'"
      :title="block.title"
      :description="block.description"
      :steps="block.steps"
    ></LandingPageHowItWorks>
    <LandingPageVideo
      v-if="block.__component === 'blocks.video'"
      :link="block.link"
      :video="block.thumbnail.data.attributes.url"
    >
    </LandingPageVideo>
    <LandingPageTestimonials1
      v-if="block.__component === 'blocks.testimonials'"
      :title="block.title"
      :comments="block.comments"
    >
    </LandingPageTestimonials1>
    <LandingPageCallToAction
      v-if="block.__component === 'blocks.call-to-action'"
      :title="block.title"
      :buttonTitle="block.button.title"
      :link="block.link"
      :points="block.points"
    ></LandingPageCallToAction>
    <LandingPageFooter
      v-if="block.__component === 'blocks.footer'"
      :heading="block.heading"
      :image="block.footerImage.data.attributes.url"
      :links="block.links"
      :madeBy="block.madeBy"
      :socialMediaLinks="block.socialMediaLinks"
    ></LandingPageFooter>
    <!-- Back to top button -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const { slug } = useRoute().params;
const blocks = ref([]);

const API_TOKEN =
  "2f896640265cbb108e4a3863bd2ffcd37865dcd473a6c3b77df77c0cc87d2b8c4de885404a996fc3d957140eda649bec079e509843dc55f39cd827a0add80d4a30f4fbcdb040f243b551bfe98d6f8881a1be21464bcd21910dc97acfece21917b5d07c747e22f3802407f6b34abd538b08db588c5c41228adb63275b590eb8ba";
const SERVER_URL = "http://138.197.108.65:8337";

let allPages = [];
const route = useRoute();

onMounted(async () => {
  await getAllSlugs();
  if (route.params.slug) {
    const { data } = await fetchLandingPageContent(route.params.slug);
    blocks.value = data[0].attributes.blocks;
    console.log("route", route.params.slug);
    console.log("data", data);
  }
});

async function http(url) {
  const response = await fetch(`${SERVER_URL}${url}`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then((response) => response.json());
  return response;
}

async function getAllSlugs() {
  const { data } = await http(
    "/api/landing-pages?fields[0]=slug&fields[0]=title"
  );
  allPages.value = data;
}

function fetchLandingPageContent(slug) {
  return http(
    `/api/landing-pages?filters[slug][$eq]=${slug}&populate[blocks][on][blocks.trading-feature][populate]=*&populate[blocks][on][blocks.app-download-cta][populate]=*&populate[blocks][on][blocks.switch-between-light-and-dark-mode][populate]=*&populate[blocks][on][blocks.two-columns-image-right][populate]=*&populate[blocks][on][blocks.video][populate]=*&populate[blocks][on][blocks.two-columns-image-on-left][populate]=*&populate[blocks][on][blocks.hero][populate]=*&populate[blocks][on][blocks.logos][populate]=*&populate[blocks][on][blocks.how-does-it-work][populate]=*&populate[blocks][on][blocks.call-to-action][populate]=*&populate[blocks][on][blocks.hero-single-column][populate]=*&populate[blocks][on][blocks.2x3-grid][populate][0]=items&populate[blocks][on][blocks.2x3-grid][populate][1]=items.image&populate[blocks][on][blocks.testimonials][populate]=*&populate[blocks][on][blocks.pricing][populate][0]=items&populate[blocks][on][blocks.pricing][populate][1]=items.button&populate[blocks][on][blocks.4x2-grid][populate][0]=items&populate[blocks][on][blocks.4x2-grid][populate][1]=items.image&populate[blocks][on][blocks.call-to-action-1][populate]=*&populate[blocks][on][blocks.footer][populate]=*`
  );
}
</script>
