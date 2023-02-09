<template>
  <!-- HERO SECTION -->
  <section
    class="dark-mode bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 section-1"
  >
    <div
      class="container position-relative zindex-2 pt-5 pb-md-2 pb-lg-4 pb-xl-5"
    >
      <div class="row pt-3 pb-2 py-md-4">
        <!-- Text -->
        <div
          class="col-xl-5 col-md-6 pt-lg-5 text-center text-md-start mb-4 mb-md-0"
        >
          <h1 class="display-3 pb-2 pb-sm-3">
            {{ hero.title }}
          </h1>
          <p class="fs-lg d-md-none d-xl-block pb-2 pb-md-0 mb-4 mb-md-5">
            {{ hero.description }}
          </p>
          <div
            class="d-flex justify-content-center justify-content-md-start pb-2 pt-lg-2 pt-xl-0"
          >
            <!-- <NuxtLink
              target="_blank"
              class="btn btn-lg btn-primary shadow-primary me-3 me-sm-4"
              >{{ hero._rawValue.primaryCallToAction.title }}</NuxtLink
            >
            <NuxtLink
              target="_blank"
              class="btn btn-lg btn-outline-secondary"
              >{{ hero._rawValue.secondaryCallToAction.title }}</NuxtLink
            > -->
          </div>
          <div
            class="d-flex align-items-center justify-content-center justify-content-md-start text-start pt-4 pt-lg-5 mt-xxl-5"
          >
            <div class="d-flex me-3">
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle"
                style="width: 52px; height: 52px"
              >
                <img
                  src="../assets/img/avatar/14.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img
                  src="../assets/img/avatar/08.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
              <div
                class="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"
                style="width: 52px; height: 52px"
              >
                <img
                  src="../assets/img/avatar/15.jpg"
                  class="rounded-circle"
                  width="48"
                  alt="Avatar"
                />
              </div>
            </div>
            <div class="text-light">
              <strong>400k+</strong> users already with us
            </div>
          </div>
        </div>

        <!-- Parallax gfx -->
        <div class="col-xl-7 col-md-6 d-md-flex justify-content-end">
          <div
            class="parallax mx-auto ms-md-0 me-md-n5"
            style="max-width: 675px"
          >
            <div class="parallax-layer zindex-2" data-depth="0.1">
              <img
                src="../assets/img/landing/saas-3/hero/layer01.png"
                alt="Card"
              />
            </div>
            <div class="parallax-layer zindex-3" data-depth="0.25">
              <img
                src="../assets/img/landing/saas-3/hero/layer02.png"
                alt="Bubble"
              />
            </div>
            <div class="parallax-layer" data-depth="-0.15">
              <img
                src="../assets/img/landing/saas-3/hero/layer03.png"
                alt="Bubble"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- BRANDS SECTION-->
  <section class="container border-bottom-lg pt-sm-2">
    <div
      class="swiper mx-n2"
      data-swiper-options='{
          "slidesPerView": 2,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "500": {
              "slidesPerView": 3,
              "spaceBetween": 8
            },
            "650": {
              "slidesPerView": 4,
              "spaceBetween": 8
            },
            "850": {
              "slidesPerView": 5,
              "spaceBetween": 8
            },
            "992": {
              "slidesPerView": 6,
              "spaceBetween": 8
            }
          }
        }'
    >
      <div class="swiper-wrapper">
        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../assets/img/brands/01.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../assets/img/brands/02.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../assets/img/brands/03.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../assets/img/brands/04.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../assets/img/brands/05.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>

        <!-- Item -->
        <div class="swiper-slide py-2">
          <a href="#" class="px-2 mx-2">
            <img
              src="../assets/img/brands/06.svg"
              class="d-block mx-auto my-2"
              width="155"
              alt="Brand"
            />
          </a>
        </div>
      </div>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative pt-3"></div>
    </div>
  </section>
  <!-- TRADING FEATURE SECTION-->
  <section class="container py-5 my-md-2 my-lg-4 my-xl-5">
    <!-- Text -->
    <h2
      class="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2"
      style="max-width: 530px"
    >
      Get Possibilities for Better Trading with Silicon
    </h2>
    <ul class="list-unstyled d-flex flex-wrap justify-content-center mb-5">
      <li class="d-flex fs-xl mx-3 mt-2 mt-sm-3">
        <i class="bx bx-check lead text-primary mt-1 me-2"></i>
        <span
          >Spend with the Crypto and get up to
          <strong class="text-primary ms-1">12% back</strong></span
        >
      </li>
      <li class="d-flex fs-xl mx-3 mt-2 mt-sm-3">
        <i class="bx bx-check lead text-primary mt-1 me-2"></i>
        <span
          >Invite friends and get
          <strong class="text-primary ms-1">new opportunities</strong></span
        >
      </li>
      <li class="d-flex fs-xl mx-3 mt-2 mt-sm-3">
        <i class="bx bx-check lead text-primary mt-1 me-2"></i>
        <span
          >Trade and earn
          <strong class="text-primary mx-1">200+ cryptocurrencies</strong> and
          get a permanent
          <strong class="text-primary ms-1">5% discount</strong></span
        >
      </li>
    </ul>

    <!-- Parallax gfx -->
    <div class="position-relative px-4 px-sm-5 mb-3 mb-md-4">
      <img
        src="../assets/img/landing/saas-3/feature-1/main.png"
        width="1079"
        class="d-block mx-auto"
        style="
          border-radius: 1.5rem;
          box-shadow: 0 1.875rem 7.5rem -0.625rem rgba(124, 125, 152, 0.2);
        "
        alt="Dashboard"
      />
      <div
        class="position-absolute w-100"
        style="left: 0; bottom: 13%; padding-right: 74.33%"
      >
        <img
          src="../assets/img/landing/saas-3/feature-1/popup01.png"
          width="308"
          class="rellax d-block"
          style="
            border-radius: 0.75rem;
            box-shadow: rgba(124, 125, 152, 0.2) 0px 0.75rem 3.75rem -0.625rem;
            transform: translate3d(-28px, 102px, 0px);
          "
          alt="Popup"
          data-rellax-percentage="0.5"
          data-rellax-speed="1"
          data-disable-parallax-down="lg"
        />
      </div>
      <div
        class="position-absolute w-100"
        style="right: 0; top: 12%; padding-left: 74.16%"
      >
        <img
          src="../assets/img/landing/saas-3/feature-1/popup02.png"
          width="310"
          class="rellax d-block"
          style="
            border-radius: 0.75rem;
            box-shadow: rgba(126, 123, 160, 0.2) -0.46875rem 2.25rem 6.5rem 0px;
            transform: translate3d(28px, 57px, 0px);
          "
          alt="Popup"
          data-rellax-percentage="0.5"
          data-rellax-speed="1"
          data-disable-parallax-down="lg"
        />
      </div>
      <div
        class="position-absolute w-100"
        style="
          right: 0;
          bottom: 9.4%;
          padding-left: 64.83%;
          padding-right: 5.5%;
        "
      >
        <img
          src="../assets/img/landing/saas-3/feature-1/popup03.png"
          width="322"
          class="rellax d-block ms-auto"
          style="
            border-radius: 0.75rem;
            box-shadow: rgba(120, 118, 148, 0.14) -0.46875rem 2.25rem 6.5rem 0px;
            transform: translate3d(11px, 67px, 0px);
          "
          alt="Popup"
          data-rellax-percentage="0.5"
          data-rellax-speed=".5"
          data-disable-parallax-down="lg"
        />
      </div>
    </div>
  </section>
  <!-- Feature section (App) -->
  <section class="container pb-5 mb-md-2 mb-lg-4 mb-xl-5">
    <div class="row align-items-center pt-2 pb-3">
      <!-- Text -->
      <div class="col-md-6 col-xl-5 text-center text-md-start mb-5 mb-md-0">
        <h2 class="h1 pb-2 pb-lg-3">{{ getTwoColumnsImageOnRight.title }}</h2>
        <p class="pb-2 mb-4 mb-lg-5">
          {{ getTwoColumnsImageOnRight.subtitle }}
        </p>
        <hr />
        <div
          class="d-flex justify-content-center justify-content-md-between pt-4 pt-lg-5"
        >
          <div class="mx-3 mx-md-0">
            <div class="display-3 text-dark mb-1">23%</div>
            <span>Nulla venenatis everys</span>
          </div>
          <div class="mx-3 mx-md-0">
            <div class="display-3 text-dark mb-1">132b</div>
            <span>Dictum in marko elementum</span>
          </div>
        </div>
      </div>

      <!-- Parallax gfx -->
      <div class="col-md-6 offset-xl-1">
        <div class="parallax ratio ratio-1x1 mx-auto" style="max-width: 550px">
          <div
            class="parallax-layer position-absolute zindex-2"
            data-depth="-0.15"
          >
            <!-- <img
              :src="`${SERVER_URL}${getTwoColumnsImageOnRight._rawValue.image.data.attributes.url}`"
              alt="Avatar"
            /> -->
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
            data-depth="0.1"
          >
            <div
              class="rounded-circle bg-primary"
              style="width: 70%; height: 70%; opacity: 0.06"
            ></div>
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
            data-depth="0.2"
          >
            <div
              class="rounded-circle bg-primary"
              style="width: 55%; height: 55%; opacity: 0.06"
            ></div>
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 zindex-3"
            data-depth="0.4"
          >
            <div
              class="d-flex justify-content-center align-items-center rounded-circle bg-primary"
              style="
                width: 93px;
                height: 93px;
                box-shadow: 0 0.1875rem 1.875rem -0.125rem rgba(99, 102, 241, 0.95);
              "
            >
              <span class="h5 text-light mb-0">400K+</span>
            </div>
          </div>
          <div
            class="parallax-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
            data-depth="0.3"
          >
            <div
              class="rounded-circle bg-primary"
              style="width: 40%; height: 40%; opacity: 0.06"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Feature section (Crypto bank) -->
  <section class="container pt-2 pt-sm-4 pb-5 mb-md-2 mb-lg-4 mb-xl-5">
    <div class="row align-items-center mb-2 pb-sm-3 pb-md-4">
      <!-- Text -->
      <div
        class="col-md-5 col-lg-6 col-xl-5 offset-xl-1 order-md-2 text-center text-md-start mb-5 mb-md-0"
      >
        <h2 class="h1 pb-2 pb-lg-3">{{ getTwoColumnsImageOnLeft.title }}</h2>
        <p class="pb-2 mb-4 mb-xl-5">
          {{ getTwoColumnsImageOnLeft.subtitle }}
        </p>
        <hr />
        <div
          class="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-md-between pt-3"
        >
          <img
            src="../assets/img/landing/saas-3/feature-3/binance.svg"
            width="48"
            class="d-block m-2 mx-md-0"
            alt="Bitcoin"
          />
          <img
            src="../assets/img/landing/saas-3/feature-3/ens.svg"
            width="48"
            class="d-block m-2 mx-md-0"
            alt="Ens"
          />
          <img
            src="../assets/img/landing/saas-3/feature-3/tether.svg"
            width="48"
            class="d-block m-2 mx-md-0"
            alt="Tether"
          />
          <img
            src="../assets/img/landing/saas-3/feature-3/alqo.svg"
            width="48"
            class="d-block m-2 mx-md-0"
            alt="Alqo"
          />
          <img
            src="../assets/img/landing/saas-3/feature-3/blockfi.svg"
            width="48"
            class="d-block m-2 mx-md-0"
            alt="BlockFi"
          />
          <img
            src="../assets/img/landing/saas-3/feature-3/bitcoin.svg"
            width="48"
            class="d-block m-2 mx-md-0"
            alt="Bitcoin"
          />
        </div>
      </div>

      <!-- Parallax gfx -->
      <div class="col-md-7 col-lg-6 order-md-1">
        <div class="position-relative pt-5" style="max-width: 636px">
          <img
            src="../assets/img/landing/saas-3/feature-3/popup.png"
            class="rellax position-absolute top-0 mt-n5"
            alt="Card"
            data-rellax-percentage="0.5"
            data-rellax-speed="1"
            data-disable-parallax-down="lg"
          />
          <img
            src="../assets/img/landing/saas-3/feature-3/dashboard.jpg"
            class="d-block rounded-3 mt-sm-4 mt-md-0 mt-lg-4"
            alt="Dashboard"
            style="
              box-shadow: 0 1.875rem 7.5rem -0.625rem rgba(124, 125, 152, 0.2);
            "
          />
        </div>
      </div>
    </div>
  </section>
  <!-- How it works Steps -->
  <section class="container">
    <div
      class="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto"
      style="max-width: 530px"
    >
      <h2 class="h1">{{ getHowItWorks.title }}</h2>
      <p class="mb-0">{{ getHowItWorks.description }}</p>
    </div>

    <!-- Steps -->
    <div
      class="steps steps-sm steps-horizontal-md steps-center pb-5 mb-md-2 mb-lg-3"
    >
      ${ howItWorks.steps.map((step, index) => `
      <div class="step">
        <div class="step-number">
          <div class="step-number-inner">${index + 1}</div>
        </div>
        <div class="step-body">
          <!-- <h3 class="h4 mb-3">{{ getHowItWorks.step.title }}</h3> -->
          <p class="mb-0">${step.description ? step.description : ""}</p>
        </div>
      </div>
      `).join("") }
    </div>
  </section>
  <!-- VIDEO SECTION-->
  <section class="container">
    <div
      class="bg-secondary position-relative rounded-3 overflow-hidden px-4 px-sm-5"
    >
      <div
        class="position-absolute top-50 start-50 w-75 h-75 translate-middle d-flex align-items-center justify-content-center zindex-5"
      >
        <a
          href="${video.link}"
          class="btn btn-video btn-icon btn-xl bg-white stretched-link"
          data-bs-toggle="video"
        >
          <i class="bx bx-play"></i>
        </a>
      </div>
      <div class="pt-4 mt-sm-3 px-3 px-sm-5 mx-md-5">
        <img
          src="{{SERVER_URL}} {{video.thumbnail.data.attributes.url}}"
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
  <!-- Testimonials -->
  <section class="container py-5 mb-2 mt-sm-2 my-md-4 my-lg-5">
    <div class="row pt-2 py-xl-3">
      <div class="col-lg-3 col-md-4">
        <h2
          class="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2"
          style="max-width: 300px"
        >
          {{ getTestimonials.title }}
        </h2>

        <!-- Slider controls (Prev / next buttons) -->
        <div
          class="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5"
        >
          <button
            type="button"
            id="prev-testimonial"
            class="btn btn-prev btn-icon btn-sm me-2"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <button
            type="button"
            id="next-testimonial"
            class="btn btn-next btn-icon btn-sm ms-2"
          >
            <i class="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <div
          class="swiper mx-n2"
          data-swiper-options='{
            "slidesPerView": 1,
            "spaceBetween": 8,
            "loop": true,
            "navigation": {
              "prevEl": "#prev-testimonial",
              "nextEl": "#next-testimonial"
            },
            "breakpoints": {
              "500": {
                "slidesPerView": 2
              },
              "1000": {
                "slidesPerView": 2
              },
              "1200": {
                "slidesPerView": 3
              }
            }
          }'
        >
          <div class="swiper-wrapper">
            <!-- Item -->
            ${ tesimonials.comments.map(comment => `
            <div class="swiper-slide h-auto pt-4">
              <figure class="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                <div
                  class="card h-100 position-relative border-0 shadow-sm pt-4"
                >
                  <span
                    class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
                  >
                    <i class="bx bxs-quote-left"></i>
                  </span>
                  <blockquote class="card-body pb-3 mb-0">
                    <p class="mb-0">${comment.comment}</p>
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
                    src="../assets/img/avatar/40.jpg"
                    width="48"
                    class="rounded-circle"
                    alt="${comment.author}"
                  />
                  <div class="ps-3">
                    <h6 class="fs-sm fw-semibold mb-0">${comment.author}</h6>
                    <span class="fs-xs text-muted"
                      >${comment.authorSubtitle}</span
                    >
                  </div>
                </figcaption>
              </figure>
            </div>
            `).join("") }
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- CTA -->
  <section class="container mb-3">
    <div
      class="dark-mode bg-dark bg-size-cover bg-position-center bg-repeat-0 position-relative overflow-hidden rounded-3 py-lg-3 py-xl-5 px-4 px-lg-5 px-xl-0 div-1"
    >
      <div class="row position-relative zindex-2 py-5 my-1 my-md-3">
        <div class="col-md-6">
          <div class="mx-auto" style="max-width: 440px">
            <h2 class="h1 pb-1 pb-md-3 pb-lg-4">{{ getCTA.title }}</h2>
            <ul class="list-unstyled fs-lg d-md-none pb-3">
              ${ cta.points.length ? `
              <ul class="list-unstyled fs-lg d-none d-md-block">
                ${ cta.points.map(point => `
                <li class="d-flex mb-2">
                  <i
                    class="bx bx-check lead text-primary me-2"
                    style="margin-top: 0.125rem"
                  ></i>
                  ${point.title}
                </li>
                `).join("") }
              </ul>
              ` : "" }
            </ul>
            <!-- <NuxtLink
              href="${cta.button.link}"
              target="__blank"
              class="btn btn-lg btn-primary shadow-primary w-100 w-sm-auto"
              >{{ getCTA.button.title }}</NuxtLink
            > -->
          </div>
        </div>
        <div class="col-md-6 pt-lg-3 pt-xl-4">
          ${ cta.points.length ? `
          <ul class="list-unstyled fs-lg d-none d-md-block">
            ${ cta.points.map(point => `
            <li class="d-flex mb-2">
              <i
                class="bx bx-check lead text-primary me-2"
                style="margin-top: 0.125rem"
              ></i>
              ${point.title}
            </li>
            `).join("") }
          </ul>
          ` : "" }
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="footer bg-dark dark-mode pt-5 pb-4 pb-lg-5">
    <div class="container text-center pt-lg-3">
      <div class="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
        ${ footer.footerImage?.data ? `
        <img
          src="${SERVER_URL}${footer.footerImage.data.attributes.url}"
          class="me-2"
          width="60"
          alt="Silicon"
        />
        ` : "" }
        <span class="fs-4">{{ getFooter.heading }}</span>
      </div>
      ${ footer.links.length ? `
      <ul class="nav justify-content-center pt-3 pb-4 pb-lg-5">
        ${ footer.links.map(link => `
        <li class="nav-item">
          <a href="${link.link}" class="nav-link">${link.name}</a>
        </li>
        `).join("") }
      </ul>
      ` : "" }
      <div class="d-flex flex-column flex-sm-row justify-content-center">
        ${ footer.googlePlayLink ? `
        <a
          href="${footer.googlePlayLink}"
          class="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3"
        >
          <img
            src="../assets/img/market/appstore-light.svg"
            class="light-mode-img"
            width="124"
            alt="App Store"
          />
          <img
            src="../assets/img/market/appstore-dark.svg"
            class="dark-mode-img"
            width="124"
            alt="App Store"
          />
        </a>
        ` : "" } ${ footer.appleStoreLink ? `
        <a
          href="${footer.appleStoreLink}"
          class="btn btn-dark btn-lg px-3 py-2 mb-3"
        >
          <img
            src="../assets/img/market/googleplay-light.svg"
            class="light-mode-img"
            width="139"
            alt="Google Play"
          />
          <img
            src="../assets/img/market/googleplay-dark.svg"
            class="dark-mode-img"
            width="139"
            alt="Google Play"
          />
        </a>
        ` : "" }
      </div>
      <div class="d-flex justify-content-center pt-4 mt-lg-3">
        ${ footer.socialMediaLinks.map(link => `
        <a
          href="${link.link}"
          class="btn btn-icon btn-secondary btn-${link.icon} mx-2"
        >
          <i class="bx bxl-${link.icon}"></i>
        </a>
        `).join("") }
      </div>
      <p class="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
        <span class="text-light opacity-60"
          >&copy; All rights reserved.
          {{ getFooter.madeBy ? "Made by " : "" }}</span
        >
        <a class="nav-link d-inline-block p-0" target="_blank" rel="noopener">{{
          getFooter.madeBy
        }}</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";

const API_TOKEN =
  "2f896640265cbb108e4a3863bd2ffcd37865dcd473a6c3b77df77c0cc87d2b8c4de885404a996fc3d957140eda649bec079e509843dc55f39cd827a0add80d4a30f4fbcdb040f243b551bfe98d6f8881a1be21464bcd21910dc97acfece21917b5d07c747e22f3802407f6b34abd538b08db588c5c41228adb63275b590eb8ba";
const SERVER_URL = "http://138.197.108.65:8337";

let allPages = [];
const route = useRoute();
const hero = ref({});
// console.log("hero", hero);
const logo = ref({});
// console.log("logo", logo);
const getTwoColumnsImageOnRight = ref({});
// console.log("gettwocolumns:", getTwoColumnsImageOnRight);
const getTwoColumnsImageOnLeft = ref({});
const getHowItWorks = ref({});
const getVideo = ref({});
const getTestimonials = ref({});
const getCTA = ref({});
const getFooter = ref({});

onMounted(async () => {
  await getAllSlugs();
  if (route.params.slug) {
    const response = await showPageContentOr404();
    // console.log(response);
  }
});

async function http(url) {
  const response = await fetch(`${SERVER_URL}${url}`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then((response) => response.json());
  return response;
}

async function getAllSlugs() {
  const { data } = await http(
    "/api/landing-pages?fields[0]=slug&fields[0]=title"
  );
  allPages.value = data;
}

function fetchLandingPageContent(slug) {
  return http(
    `/api/landing-pages?filters[slug][$eq]=${slug}&populate[blocks][on][blocks.trading-feature][populate]=*&populate[blocks][on][blocks.app-download-cta][populate]=*&populate[blocks][on][blocks.switch-between-light-and-dark-mode][populate]=*&populate[blocks][on][blocks.two-columns-image-right][populate]=*&populate[blocks][on][blocks.video][populate]=*&populate[blocks][on][blocks.two-columns-image-on-left][populate]=*&populate[blocks][on][blocks.hero][populate]=*&populate[blocks][on][blocks.logos][populate]=*&populate[blocks][on][blocks.how-does-it-work][populate]=*&populate[blocks][on][blocks.call-to-action][populate]=*&populate[blocks][on][blocks.hero-single-column][populate]=*&populate[blocks][on][blocks.2x3-grid][populate][0]=items&populate[blocks][on][blocks.2x3-grid][populate][1]=items.image&populate[blocks][on][blocks.testimonials][populate]=*&populate[blocks][on][blocks.pricing][populate][0]=items&populate[blocks][on][blocks.pricing][populate][1]=items.button&populate[blocks][on][blocks.4x2-grid][populate][0]=items&populate[blocks][on][blocks.4x2-grid][populate][1]=items.image&populate[blocks][on][blocks.call-to-action-1][populate]=*&populate[blocks][on][blocks.footer][populate]=*`
  );
}

async function showPageContentOr404() {
  try {
    const { data } = await fetchLandingPageContent(route.params.slug);
    console.log("route", route.params.slug);
    // console.log("data", data);
    if (data && data.length) {
      populateLandingPage(data[0]);
    }
  } catch (error) {
    console.error(error);
  }
}

// function showAvailablePagesListList() {
//   const mainElement = document.querySelector("main");
//   const addSectionToPage = (section) =>
//     mainElement.insertAdjacentHTML("beforeend", section);
//   if (allPages.length) {
//     addSectionToPage(getAvailablePagesGridHTML());
//   } else {
//     addSectionToPage(getNoContentMessageHTML());
//   }
// }

function populateLandingPage(pageContent) {
  const { title, blocks } = pageContent.attributes;
  document.title = title;

  blocks.forEach((block) => {
    if (block.__component === "blocks.hero") {
      hero.value = block;
    } else if (block.__component === "blocks.logos") {
      logo.value = block;
      // initSwiper(mainElement.lastElementChild.querySelector(".swiper"));
    } else if (block.__component === "blocks.two-columns-image-right") {
      getTwoColumnsImageOnRight.value = block;
      // console.log(
      //   "gettwocolumnsonright",
      //   getTwoColumnsImageOnRight._rawValue.image.data.attributes.url
      // );
      // console.log(block.image.data.attributes.url);
    } else if (block.__component === "blocks.two-columns-image-on-left") {
      getTwoColumnsImageOnLeft.value = block;
    } else if (block.__component === "blocks.how-does-it-work") {
      getHowItWorks.value = block;
    } else if (block.__component === "blocks.video") {
      getVideo.value = block;
      // blocks.video;
      // console.log("blocksvideo", blocks.video);
      // console.log(getVideo._rawValue.video.thumbnail.data.attributes.url);
    } else if (block.__component === "blocks.testimonials") {
      getTestimonials.value = block;
      // initSwiper(mainElement.lastElementChild.querySelector(".swiper"));
    } else if (block.__component === "blocks.call-to-action") {
      getCTA.value = block;
    } else if (block.__component === "blocks.footer") {
      getFooter.value = block;
    }
  });
}
</script>

<style scoped>
.section-1 {
  background-image: url(../assets/img/landing/saas-3/hero/hero-bg.jpg);
}
.div-1 {
  background-image: url(../assets/img/landing/saas-3/cta-bg.jpg);
}
</style>
