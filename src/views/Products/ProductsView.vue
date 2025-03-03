<template>
  <div class="">
    <div class="flex justify-between items-center bg-white p-2 rounded-md mb-5">
      <h1 class="text-[#000] font-semibold">Mahsulotlar</h1>
      <RouterLink to="/product/add">
        <button
          class="bg-blue-500 text-white p-2 px-4 rounded-md active:scale-95 duration-300"
        >
          Mahsulotlar Qo'shish
        </button>
      </RouterLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
      <!-- C1 -->
      <div class="p-6 bg-white w-[250px] border shadow-md rounded-md">
        <form class="">
          <label
            for="quantity-input"
            class="block mb-2 text-center text-sm font-bold text-gray-900 dark:text-white"
            >A mahsulot</label
          >
          <div class="relative flex items-center max-w-[full]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-red-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="999"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-blue-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>
        <p
          class="py-[5px] text-center px-[20px] cursor-pointer transform active:scale-75 transition duration-150 border border-gray-400 text-gray-600 font-medium text-[12px] rounded-lg mt-5"
        >
          <RouterLink to="/tarkibi">Tarkibi</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
