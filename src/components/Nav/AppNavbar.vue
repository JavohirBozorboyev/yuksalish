<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="container px-4 py-2 mx-auto flex items-center justify-between"
      >
        <img
          class="cursor-pointer"
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

        <button
          @click="addBtn"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4 fill-white font-semibold"
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
      </div>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

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

console.log(route.path);
</script>
