<template>
  <section class="container border-bottom-lg pt-sm-2">
    <swiper
      class="mx-n2 swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :slidesPerView="2"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      :breakpoints="{
        500: { slidesPerView: 3, spaceBetween: 8 },
        650: { slidesPerView: 4, spaceBetween: 8 },
        850: { slidesPerView: 5, spaceBetween: 8 },
        992: { slidesPerView: 6, spaceBetween: 8 },
      }"
    >
      <!-- Item -->
      <swiper-slide class="py-2" v-for="(image, index) in images" :key="index">
        <a href="#" class="px-2 mx-2">
          <img
            :src="`${SERVER_URL}${image.attributes.url}`"
            class="d-block mx-auto my-2"
            width="155"
            alt="Brand"
          />
        </a>
      </swiper-slide>

      <!-- Item -->
      <swiper-slide class="py-2">
        <a href="#" class="px-2 mx-2">
          <img
            src="../../assets/img/brands/01.svg"
            class="d-block mx-auto my-2"
            width="155"
            alt="Brand"
          />
        </a>
      </swiper-slide>

      <!-- Item -->
      <swiper-slide class="py-2">
        <a href="#" class="px-2 mx-2">
          <img
            src="../../assets/img/brands/02.svg"
            class="d-block mx-auto my-2"
            width="155"
            alt="Brand"
          />
        </a>
      </swiper-slide>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3"></div>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const SERVER_URL = "http://138.197.108.65:8337";

defineProps({
  images: Array,
});

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
