<template>
  <section class="container">
    <div
      class="bg-secondary position-relative rounded-3 overflow-hidden px-4 px-sm-5"
    >
      <div
        class="position-absolute top-50 start-50 w-75 h-75 translate-middle d-flex align-items-center justify-content-center zindex-5"
      >
        <a
          :href="`${link}`"
          class="btn btn-video btn-icon btn-xl bg-white stretched-link"
          data-bs-toggle="video"
        >
          <i class="bx bx-play"></i>
        </a>
      </div>
      <div class="pt-4 mt-sm-3 px-3 px-sm-5 mx-md-5">
        <img
          :src="`${SERVER_URL}${video}`"
          width="786"
          class="rellax d-block mx-auto mt-lg-4"
          alt="Card"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.1"
          data-disable-parallax-down="lg"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
const SERVER_URL = "http://138.197.108.65:8337";

defineProps({
  video: String,
  link: String,
});
</script>
