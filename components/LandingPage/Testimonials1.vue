<template>
  <!-- Testimonials -->
  <section class="container py-5 mb-2 mt-sm-2 my-md-4 my-lg-5">
    <div class="row pt-2 py-xl-3">
      <div class="col-lg-3 col-md-4">
        <h2
          class="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2"
          style="max-width: 300px"
        >
          {{ title }}
        </h2>

        <!-- Slider controls (Prev / next buttons) -->
        <div
          class="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5"
        >
          <div class="btn btn-prev btn-icon btn-sm me-2 prevArrow">
            <i class="bx bx-chevron-left"></i>
          </div>
          <div class="btn btn-next btn-icon btn-sm ms-2 nextArrow">
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <swiper
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :slides-per-view="1"
          :space-between="8"
          :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
          :loop="true"
          :breakpoints="{
            500: { slidesPerView: 2 },
            1000: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }"
          class="mx-n2"
        >
          <!-- Item -->
          <swiper-slide class="h-auto pt-4" v-for="comment in comments">
            <figure class="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div class="card h-100 position-relative border-0 shadow-sm pt-4">
                <span
                  class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
                >
                  <i class="bx bxs-quote-left"></i>
                </span>
                <blockquote class="card-body pb-3 mb-0">
                  <p class="mb-0">{{ comment.comment }}</p>
                </blockquote>
                <div class="card-footer border-0 text-nowrap pt-0">
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bx-star text-muted opacity-75"></i>
                  <i class="bx bx-star text-muted opacity-75"></i>
                </div>
              </div>
              <figcaption class="d-flex align-items-center ps-4 pt-4">
                <img
                  src="../../assets/img/avatar/40.jpg"
                  width="48"
                  class="rounded-circle"
                  alt="Robert Fox"
                />
                <div class="ps-3">
                  <h6 class="fs-sm fw-semibold mb-0">{{ comment.author }}</h6>
                  <span class="fs-xs text-muted">{{
                    comment.authorSubtitle
                  }}</span>
                </div>
              </figcaption>
            </figure>
          </swiper-slide>
          <swiper-slide class="h-auto pt-4" v-for="comment in comments">
            <figure class="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
              <div class="card h-100 position-relative border-0 shadow-sm pt-4">
                <span
                  class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
                >
                  <i class="bx bxs-quote-left"></i>
                </span>
                <blockquote class="card-body pb-3 mb-0">
                  <p class="mb-0">{{ comment.comment }}</p>
                </blockquote>
                <div class="card-footer border-0 text-nowrap pt-0">
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bxs-star text-warning"></i>
                  <i class="bx bx-star text-muted opacity-75"></i>
                  <i class="bx bx-star text-muted opacity-75"></i>
                </div>
              </div>
              <figcaption class="d-flex align-items-center ps-4 pt-4">
                <img
                  src="../../assets/img/avatar/40.jpg"
                  width="48"
                  class="rounded-circle"
                  alt="Robert Fox"
                />
                <div class="ps-3">
                  <h6 class="fs-sm fw-semibold mb-0">{{ comment.author }}</h6>
                  <span class="fs-xs text-muted">{{
                    comment.authorSubtitle
                  }}</span>
                </div>
              </figcaption>
            </figure>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

defineProps({
  title: String,
  comments: Array,
});
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
