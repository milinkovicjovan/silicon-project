<template>
  <!-- Features -->
  <section class="position-relative py-5">
    <div
      class="container position-relative zindex-5 pb-md-4 pt-md-2 pt-lg-3 pb-lg-5"
    >
      <div class="row justify-content-center text-center pb-3 mb-sm-2 mb-lg-3">
        <div class="col-xl-6 col-lg-7 col-md-9">
          <h2 class="h1 mb-lg-4">{{ title }}</h2>
          <p class="fs-lg text-muted mb-0">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 pb-xl-3">
        <div v-for="(item, index) in items">
          <!-- Item -->
          <div class="col position-relative">
            <div class="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
              <div
                class="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4"
              >
                <img
                  :src="`${SERVER_URL}${item.image.data.attributes.url}`"
                  width="40"
                  alt="Comments"
                />
              </div>
              <div class="card-body text-center">
                <h3 class="h5 pb-1 mb-2">{{ item.title }}</h3>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>
            <div v-if="index < 3">
              <hr
                class="position-absolute top-100 start-0 w-100 h-100 d-none d-lg-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="position-absolute top-0 start-0 w-100 h-100"
      style="background-color: rgba(255, 255, 255, 0.05)"
    ></div>
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
