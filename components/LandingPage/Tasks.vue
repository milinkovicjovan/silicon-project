<template>
  <section class="bg-secondary py-5">
    <div class="container text-center py-1 py-md-4 py-lg-5">
      <h2 class="h1 mb-4">{{ title }}</h2>
      <p class="lead pb-3 mb-3">{{ description }}</p>
      <a
        href="#"
        target="__blank"
        class="btn btn-primary shadow-primary btn-lg mb-1"
      >
        {{ button.title }}
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  button: Object,
});
</script>
