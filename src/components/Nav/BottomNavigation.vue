<template>
  <div>
    <div
      class="fixed z-50 w-full h-14 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600"
    >
      <div class="grid h-full max-w-lg grid-cols-4 mx-auto">
        <!-- <!-1-  -->
        <RouterLink
          to="/"
          data-tooltip-target="tooltip-home"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          :class="route.path == '/' ? 'fill-red-600' : 'fill-gray-400'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              d="M28.447,11.583c-0.18-1.417-1.257-2.871-2.817-3.797c-1.425-0.832-2.82-1.674-4.167-2.487	c-1.407-0.85-2.763-1.667-4.045-2.41c-0.834-0.484-1.791-0.49-2.626-0.02c-1.409,0.794-2.904,1.682-4.46,2.604	C9.057,6.231,7.741,7.013,6.391,7.791c-1.572,0.92-2.66,2.38-2.84,3.812c-0.479,3.857-0.266,7.769,0.638,11.644	c0.502,1.978,2.587,4.092,4.572,4.623c2.402,0.592,4.82,0.888,7.239,0.888s4.837-0.296,7.239-0.888	c0.006-0.001,0.013-0.003,0.019-0.005c1.967-0.526,4.052-2.641,4.558-4.637C28.716,19.366,28.929,15.449,28.447,11.583z M20.115,25.303c-0.107,0.681-0.635,1.233-1.321,1.302c-1.856,0.188-3.714,0.189-5.567,0.004c-0.686-0.069-1.215-0.621-1.322-1.302	c-0.325-2.069-0.24-4.138,0.255-6.208c0.154-0.641,0.647-1.154,1.267-1.38c1.722-0.628,3.443-0.628,5.165,0	c0.62,0.226,1.113,0.739,1.267,1.38C20.355,21.167,20.44,23.235,20.115,25.303z"
            ></path>
          </svg>

          <span class="sr-only">Hisob-kitob</span>
        </RouterLink>
        <div
          id="tooltip-home"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Hisob-kitob
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <!-- <!-2-  -->
        <RouterLink
          to="/product"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          :class="route.path == '/product' ? 'fill-red-600' : 'fill-gray-400'"
        >
          <button data-tooltip-target="tooltip-wallet" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                d="M 24 6 C 23.048235 6 22.141037 6.095179 21.275391 6.2265625 A 1.50015 1.50015 0 1 0 21.724609 9.1914062 C 22.492963 9.0747896 23.247765 9 24 9 C 32.3024 9 39 15.6976 39 24 C 39 27.934257 37.472499 31.480462 35 34.150391 L 35 30.5 A 1.50015 1.50015 0 0 0 33.476562 28.978516 A 1.50015 1.50015 0 0 0 32 30.5 L 32 37.5 A 1.50015 1.50015 0 0 0 33.5 39 L 40.5 39 A 1.50015 1.50015 0 1 0 40.5 36 L 37.394531 36 C 40.25285 32.815876 42 28.609324 42 24 C 42 14.0764 33.9236 6 24 6 z M 7.5 9 A 1.50015 1.50015 0 1 0 7.5 12 L 10.605469 12 C 7.7471496 15.184124 6 19.390676 6 24 C 6 33.9236 14.0764 42 24 42 C 24.951765 42 25.858963 41.90482 26.724609 41.773438 A 1.50015 1.50015 0 1 0 26.275391 38.808594 C 25.507037 38.925211 24.752235 39 24 39 C 15.6976 39 9 32.3024 9 24 C 9 20.065743 10.527501 16.519538 13 13.849609 L 13 17.5 A 1.50015 1.50015 0 1 0 16 17.5 L 16 10.5 A 1.50015 1.50015 0 0 0 14.5 9 L 7.5 9 z M 24 18 C 20.691 18 18 20.691 18 24 C 18 27.309 20.691 30 24 30 C 27.309 30 30 27.309 30 24 C 30 20.691 27.309 18 24 18 z"
              ></path>
            </svg>

            <span class="sr-only">Tayyorlash</span>
          </button></RouterLink
        >
        <div
          id="tooltip-wallet"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Tayyorlash
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <!-- <!-3-  -->
        <RouterLink
          to="/ombor"
          class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          data-tooltip-target="tooltip-settings"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            :class="route.path == '/ombor' ? 'fill-red-600' : 'fill-gray-400'"
          >
            <path
              d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm0 10h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm7.293-14.707-3.586-3.586a.999.999 0 0 0-1.414 0l-3.586 3.586a.999.999 0 0 0 0 1.414l3.586 3.586a.999.999 0 0 0 1.414 0l3.586-3.586a.999.999 0 0 0 0-1.414z"
            ></path>
          </svg>

          <span class="sr-only">Ombor</span>
        </RouterLink>
        <div
          id="tooltip-settings"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Ombor
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <!-- <!-4-  -->

        <RouterLink
          to="/hisobotlar"
          data-tooltip-target="tooltip-profile"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            :class="
              route.path == '/hisobotlar' ? 'fill-red-600' : 'fill-gray-400'
            "
          >
            <path
              d="m20 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9 19H7v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2v-3h2v3zM14 9h-1V4l5 5h-4z"
            ></path>
          </svg>

          <RouterLink to="/hisobotlar"></RouterLink>
          <span class="sr-only">Hisobot</span>
        </RouterLink>
        <div
          id="tooltip-profile"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Hisobot
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
</script>
