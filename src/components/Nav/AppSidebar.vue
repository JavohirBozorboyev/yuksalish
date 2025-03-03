<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <!-- Hisob-Kitob -->
          <RouterLink
            to="/"
            class="hover:bg-gray-100 flex items-center gap-2 p-2 rounded-sm justify-start"
            :class="
              route.path === '/' ? 'fill-red-700 text-red-700' : 'fill-gray-400'
            "
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span class="">Hisob-kitob</span>
          </RouterLink>
          <!-- Tayyorlash -->
          <RouterLink
            to="/product"
            class="hover:bg-gray-100 flex items-center gap-2 p-2 rounded-sm justify-start"
            :class="
              route.path === '/product'
                ? 'fill-red-700 text-red-700'
                : 'fill-gray-400'
            "
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path
                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
              />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Tayyorlash</span>
          </RouterLink>
          <!-- Ombor -->
          <RouterLink
            to="/ombor"
            class="hover:bg-gray-100 flex items-center gap-2 p-2 rounded-sm justify-start"
            :class="
              route.path == '/ombor'
                ? 'fill-red-700 text-red-700'
                : 'fill-gray-400'
            "
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path
                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
              />
            </svg>
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
              >Ombor</span
            >
          </RouterLink>
          <!-- Hisobotlar -->
          <RouterLink
            to="/hisobotlar"
            class="hover:bg-gray-100 flex items-center gap-2 p-2 rounded-sm justify-start"
            :class="
              route.path == '/hisobotlar'
                ? 'fill-red-700 text-red-700'
                : 'fill-gray-400'
            "
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path
                d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"
              />
            </svg>
            <span class="ms-3">Hisobotlar</span>
          </RouterLink>
        </ul>
      </div>
    </aside>
  </div>
</template>
<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
console.log(route.path);
</script>
