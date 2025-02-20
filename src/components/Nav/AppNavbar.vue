<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="px-4 py-2 mx-auto flex items-center justify-between">
        <!-- LOGO -->
        <img
          class="cursor-pointer w-10 h-10 lg:w-12 lg:h-12"
          src="..//../IMG/yuksalish logo 1.svg"
          alt=""
        />
        <h1 class="text-[#1F1F1F] font-semibold" v-if="route.path == '/'">
          Hisob Kitob
        </h1>
        <h1
          class="text-[#1F1F1F] font-semibold"
          v-if="route.path == '/home/add'"
        >
          Hisob Kitob
        </h1>

        <h1
          class="text-[#1F1F1F] font-semibold"
          v-if="route.path == '/product'"
        >
          Tayyorlash
        </h1>
        <h1
          class="text-[#1F1F1F] font-semibold"
          v-if="route.path == '/product/add'"
        >
          Tayyorlash
        </h1>
        <h1 class="text-[#1F1F1F] font-semibold" v-if="route.path == '/ombor'">
          Ombor
        </h1>
        <h1
          class="text-[#1F1F1F] font-semibold"
          v-if="route.path == '/ombor/add'"
        >
          Ombor
        </h1>

        <div class="flex gap-2">
          <!-- PLUS -->
          <button
            @click="addBtn"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5 fill-white font-semibold"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                fill-rule="nonzero"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
          <!-- Admin -->
          <RouterLink to="/admins">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <box-icon
                type="solid"
                name="group"
                class="fill-white h-5 w-5"
              ></box-icon>
              <span class="sr-only">Icon description</span>
            </button>
          </RouterLink>

          <!-- LOG OUT -->

          <button
            @click="logout"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <box-icon name="log-out" class="fill-white h-5 w-5"></box-icon>
            <span class="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const logout = () => {
  sessionStorage.clear();
  location.reload();
};

function addBtn() {
  if (route.path == "/") {
    router.push("/home");
  }
  if (route.path == "/") {
    router.push("/home/add");
  }
  if (route.path == "/product") {
    router.push("/product");
  }
  if (route.path == "/product") {
    router.push("/product/add");
  }
  if (route.path == "/ombor") {
    router.push("/ombor");
  }
  if (route.path == "/ombor") {
    router.push("/ombor/add");
  }
}
</script>
