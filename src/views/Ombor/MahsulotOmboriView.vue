<template>
  <div class="">
    <div class="flex justify-between items-center bg-white p-2 rounded-md">
      <h1 class="text-[#000] font-semibold">Ombor</h1>
      <RouterLink to="/ombor/add">
        <button
          class="bg-blue-500 text-white p-2 px-4 rounded-md active:scale-95 duration-300"
        >
          Maxsulot Qo'shish
        </button>
      </RouterLink>
    </div>
    
    <div
      v-if="!data"
      class="w-full h-full bg-white min-h-[60vh] rounded-md flex items-center justify-center mt-5"
    >
      <h1 class="text-xl">Loading...</h1>
    </div>
    <div
      class="relative rounded-sm mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2"
    >
      <div
        v-for="(item, index) in data"
        class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 md:p-4"
      >
        <div class="flex justify-between items-center">
          <h1 class="text-base font-bold">{{ item?.name }}</h1>
          <button
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path
                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
              />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
          >
            <ul class="py-2">
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Edit</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Export Data</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Delete</a
                >
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-4" />
        <div>
          <div class="flex items-center justify-between gap-2">
            <div>
              <p class="text-[10px] uppercase text-gray-400">Miqdor</p>
              <p class="font-medium">{{ item?.size }} kg</p>
            </div>
            <div>
              <p class="text-[10px] uppercase text-gray-400">Jami Summa</p>
              <p class="font-medium text-base">
                {{ formatCurrency(Number(item?.size) * Number(item?.price)) }}
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between gap-2 mt-4">
            <div>
              <p class="text-[10px] uppercase text-gray-400">1-kg Narxi</p>
              <p class="font-medium">
                {{ formatCurrency(item?.buyyingPrice) }}
              </p>
            </div>
            <div>
              <p class="text-[10px] uppercase text-gray-400">
                1-kg Sotilish Narxi
              </p>
              <p class="font-medium">
                {{ formatCurrency(item?.price) }}
              </p>
            </div>
          </div>
          <hr class="my-4" />
          <div class="grid grid-cols-2 gap-2">
            <button
              class="bg-blue-500 text-white px-3 p-1 rounded-md active:scale-95 duration-200 text-sm"
            >
              Sotish
            </button>
            <button
              class="border-2 text-sm border-blue-500 text-blue-500 px-3 p-1 rounded-md active:scale-95 duration-200"
            >
              Qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import formatCurrency from "../../utils/PriceFormatter";

const data = ref();
const getProduct = async () => {
  try {
    const res = await axios.get("/api/product");
    data.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const isConfirmed = confirm("Maxsulotni o'chirmoqchimisiz");
    if (isConfirmed) {
      const res = await axios.delete(`/api/product/${id}`);
      if (res.status == 200) {
        getProduct();
      }
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  console.log(data);

  getProduct();
});
</script>
