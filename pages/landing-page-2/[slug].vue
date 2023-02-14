<template>
  <div v-for="block in blocks" :key="block.id">
    <Page2Hero
      v-if="block.__component === 'blocks.hero-single-column'"
      v-bind="block.attributes"
      :title="block.title"
      :description="block.description"
      :callToActionButton="block.callToAction"
    ></Page2Hero>
    <Page2OurTool
      v-if="block.__component === 'blocks.2x3-grid'"
      :title="block.title"
      :description="block.description"
      :items="block.items"
    >
    </Page2OurTool>
    <Page2SwitchBetween
      v-if="block.__component === 'blocks.switch-between-light-and-dark-mode'"
    >
    </Page2SwitchBetween>
    <Page2Testimonials
      v-if="block.__component === 'blocks.testimonials'"
      :title="block.title"
      :comments="block.comments"
    >
    </Page2Testimonials>
    <Page2AppDownload v-if="block.__component === 'blocks.app-download-cta'">
    </Page2AppDownload>
    <Page2Pricing
      v-if="block.__component === 'blocks.pricing'"
      :title="block.title"
      :description="block.description"
      :items="block.items"
    ></Page2Pricing>
    <Page2WorkTools
      v-if="block.__component === 'blocks.4x2-grid'"
      :title="block.title"
      :description="block.description"
      :items="block.items"
    ></Page2WorkTools>
    <Page2CallToAction
      v-if="block.__component === 'blocks.call-to-action-1'"
      :title="block.title"
      :description="block.description"
      :button="block.button"
    >
    </Page2CallToAction>
    <Page2Footer
      v-if="block.__component === 'blocks.footer'"
      :heading="block.heading"
      :image="block.footerImage.data.attributes.url"
      :links="block.links"
      :madeBy="block.madeBy"
      :socialMediaLinks="block.socialMediaLinks"
    >
    </Page2Footer>
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
