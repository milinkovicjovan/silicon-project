<template>
  <section class="container mt-n1 mt-md-0 py-5">
    <div
      class="row justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1"
    >
      <div class="col-xl-8 col-lg-9 col-md-10">
        <h2 class="h1 mb-lg-4">{{ title }}</h2>
        <p class="fs-lg text-muted mb-0">
          {{ description }}
        </p>
      </div>
    </div>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-lg-4 pb-md-3 pb-lg-5"
      v-for="item in items"
    >
      <!-- Item -->
      <div class="col">
        <div class="card card-body card-hover bg-light border-0">
          <img
            :src="`${SERVER_URL}${item.image.data.attributes.url}`"
            class="d-block mb-4"
            width="56"
            alt="Zoom"
          />
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const SERVER_URL = "http://138.197.108.65:8337";
defineProps({
  title: String,
  description: String,
  items: Array,
});
</script>
