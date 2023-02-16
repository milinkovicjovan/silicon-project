<template>
  <!-- CTA -->
  <section class="container mb-3">
    <div
      class="dark-mode bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0 div-1"
    >
      <div class="row position-relative zindex-2 py-5 my-1 my-md-3">
        <div class="col-md-6">
          <div class="mx-auto" style="max-width: 440px">
            <h2 class="h1 pb-1 pb-md-3 pb-lg-4">{{ title }}</h2>
            <ul class="list-unstyled fs-lg d-md-none pb-3" v-if="points.length">
              <ul class="list-unstyled fs-lg d-none d-md-block">
                <li class="d-flex mb-2" v-for="point in points">
                  <i
                    class="bx bx-check lead text-primary me-2"
                    style="margin-top: 0.125rem"
                  ></i>
                  {{ point.title }}
                </li>
              </ul>
            </ul>
            <a
              :href="`${link}`"
              target="__blank"
              class="btn btn-lg btn-primary shadow-primary w-100 w-sm-auto"
              >{{ buttonTitle }}</a
            >
          </div>
        </div>
        <div class="col-md-6 pt-lg-3 pt-xl-4">
          <ul
            class="list-unstyled fs-lg d-none d-md-block"
            v-if="points.length"
          >
            <li class="d-flex mb-2" v-for="point in points">
              <i
                class="bx bx-check lead text-primary me-2"
                style="margin-top: 0.125rem"
              ></i>
              {{ point.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  title: String,
  buttonTitle: String,
  link: String,
  points: Array,
});
</script>

<style scoped>
.div-1 {
  background-image: url(../../assets/img/landing/saas-3/cta-bg.jpg);
}
</style>
