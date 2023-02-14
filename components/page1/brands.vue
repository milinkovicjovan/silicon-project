<template>
  <!-- BRANDS SECTION-->
  <section class="container border-bottom-lg pt-sm-2">
    <div class="swiper mx-n2">
      <div class="swiper-wrapper" v-for="logo in logos">
        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              :src="`${SERVER_URL}${logo.attributes.url}`"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../../assets/img/brands/01.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../../assets/img/brands/02.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>
      </div>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  logos: Array,
});
const SERVER_URL = "http://138.197.108.65:8337";
</script>
