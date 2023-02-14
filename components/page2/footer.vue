<template>
  <!-- Footer -->
  <footer class="footer bg-dark dark-mode pt-5 pb-4 pb-lg-5">
    <div class="container text-center pt-lg-3">
      <div class="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
        <img
          :src="`${SERVER_URL}${image}`"
          class="me-2"
          width="60"
          alt="Silicon"
        />
        <span class="fs-4">{{ heading }}</span>
      </div>
      <ul
        class="nav justify-content-center pt-3 pb-4 pb-lg-5"
        v-if="links.length"
      >
        <li class="nav-item" v-for="link in links">
          <a href="${link.link}" class="nav-link">{{ link.name }}</a>
        </li>
      </ul>
      <div class="d-flex flex-column flex-sm-row justify-content-center">
        <a href="#" class="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3">
          <img
            src="../../assets/img/market/appstore-light.svg"
            class="light-mode-img"
            width="124"
            alt="App Store"
          />
          <img
            src="../../assets/img/market/appstore-dark.svg"
            class="dark-mode-img"
            width="124"
            alt="App Store"
          />
        </a>
        <a href="#" class="btn btn-dark btn-lg px-3 py-2 mb-3">
          <img
            src="../../assets/img/market/googleplay-light.svg"
            class="light-mode-img"
            width="139"
            alt="Google Play"
          />
          <img
            src="../../assets/img/market/googleplay-dark.svg"
            class="dark-mode-img"
            width="139"
            alt="Google Play"
          />
        </a>
      </div>
      <div class="d-flex justify-content-center flex-row pt-4 mt-lg-3">
        <div v-for="socialMediaLink in socialMediaLinks">
          <a
            href="#"
            :class="`btn btn-icon btn-secondary btn-${socialMediaLink.icon} mx-2`"
          >
            <i :class="`bx bxl-${socialMediaLink.icon}`"></i>
          </a>
        </div>
      </div>
      <p class="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
        <span class="text-light opacity-60"
          >&copy; All rights reserved. Made by
        </span>
        <a
          class="nav-link d-inline-block p-0"
          href="#"
          target="_blank"
          rel="noopener"
          >{{ madeBy }}</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
const SERVER_URL = "http://138.197.108.65:8337";
defineProps({
  heading: String,
  image: String,
  links: Array,
  madeBy: String,
  socialMediaLinks: Array,
});
</script>
