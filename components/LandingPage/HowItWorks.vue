<template>
  <!-- How it works Steps -->
  <section class="container">
    <div
      class="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto"
      style="max-width: 530px"
    >
      <h2 class="h1">{{ title }}</h2>
      <p class="mb-0">{{ description }}</p>
    </div>

    <!-- Steps -->
    <div
      class="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3"
    >
      <template v-for="(step, index) in steps">
        <div class="step">
          <div class="step-number">
            <div class="step-number-inner">{{ index + 1 }}</div>
          </div>
          <div class="step-body">
            <h3 class="h4 mb-3">{{ step.title }}</h3>
            <p class="mb-0">{{ step.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  steps: Array,
});
</script>
