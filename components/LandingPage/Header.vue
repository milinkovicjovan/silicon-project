<template>
  <header
    class="header navbar navbar-expand-lg position-absolute navbar-sticky"
  >
    <div class="container px-3">
      <a href="index.html" class="navbar-brand pe-3">
        <img src="../../assets/img/logo.svg" width="47" alt="Silicon" />
        Pareto
      </a>
      <div id="navbarNav" class="offcanvas offcanvas-end">
        <div class="offcanvas-header border-bottom border-light">
          <h5 class="offcanvas-title text-white">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle active"
                data-bs-toggle="dropdown"
                aria-current="page"
                >Landing Pages</a
              >
              <div class="dropdown-menu p-0">
                <div class="d-lg-flex">
                  <div
                    class="mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0 div-1"
                  ></div>
                  <div class="mega-dropdown-column pt-lg-3 pb-lg-4">
                    <ul
                      id="navbar-landing-pages-dp-ul"
                      class="list-unstyled mb-0"
                    >
                      <li>
                        <NuxtLink
                          to="/landing-page-2/saas-landing-v-2"
                          class="dropdown-item"
                          >SaaS Landing v.2</NuxtLink
                        >
                      </li>

                      <li>
                        <NuxtLink
                          to="/landing-page-1/saas-landing-v-3"
                          class="dropdown-item"
                          >SaaS Landing v.3</NuxtLink
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="offcanvas-header border-top border-light"></div>
      </div>
      <div class="pe-lg-1 ms-auto me-4">
        <div class="form-check form-switch mode-switch" data-bs-toggle="mode">
          <input type="checkbox" class="form-check-input" id="theme-mode" />
          <label class="form-check-label d-none d-sm-block" for="theme-mode"
            >Light</label
          >
          <label class="form-check-label d-none d-sm-block" for="theme-mode"
            >Dark</label
          >
        </div>
      </div>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.div-1 {
  background-image: url(../../assets/img/landings.jpg);
  margin: -1px;
}
</style>
