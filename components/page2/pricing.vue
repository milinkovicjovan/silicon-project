<template>
  <!-- Pricing -->
  <section class="container pt-5">
    <div
      class="row justify-content-center text-center pt-2 pt-md-4 pt-lg-5 pb-4 pb-lg-5 mb-1"
    >
      <div class="col-xl-6 col-lg-7 col-md-9 col-sm-11 pt-xl-3">
        <h2 class="h1 mb-lg-4">{{ title }}</h2>
        <p class="fs-lg text-muted mb-0">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="table-responsive-lg">
      <div class="d-flex align-items-center pb-4">
        <!-- Pricing plan -->
        <div
          class="bg-primary rounded-3 shadow-primary p-4"
          style="width: 36%; min-width: 18rem"
        >
          <div class="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
            <div class="card-body text-light text-center">
              <h3 class="text-light mb-2">{{ items[0].title }}</h3>
              <div class="fs-lg opacity-70 pb-4 mb-3">
                {{ items[0].subtitle }}
              </div>
              <div class="display-5 mb-1">${{ items[0].price }}</div>
              <div class="opacity-50 mb-5">
                {{ items[0].priceDescription }}
              </div>
            </div>
            <div class="card-footer border-0 text-center pt-0 pb-4">
              <a
                href="#"
                target="__blank"
                class="btn btn-light btn-lg shadow-secondary"
              >
                {{ items[0].button.title }}
              </a>
            </div>
          </div>
        </div>
        <div
          class="row flex-nowrap border rounded-3 rounded-start-0 shadow-sm g-0"
          style="width: 64%; min-width: 32rem"
        >
          <!-- Pricing plan -->
          <div class="col" v-for="(item, index) in items">
            <div
              class="card bg-light h-100 border-0 border-end rounded-0 py-3 py-sm-4 py-lg-5"
              v-if="index > 0"
            >
              <div class="card-body text-center">
                <h3 class="mb-2">{{ item.title }}</h3>
                <div class="fs-lg pb-4 mb-3">{{ item.subtitle }}</div>
                <div class="display-5 text-dark mb-1">${{ item.price }}</div>
                <div class="text-muted mb-5">{{ item.priceDescription }}</div>
              </div>
              <div class="card-footer border-0 text-center pt-0 pb-4">
                <a
                  href="#"
                  target="__blank"
                  class="btn btn-light btn-lg shadow-secondary"
                >
                  {{ item.button.title }}
                </a>
              </div>
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
  items: Array,
});
</script>
