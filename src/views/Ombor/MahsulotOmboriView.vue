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
      <ProductCard
        v-for="item in data"
        :item="item"
        @getProduct="getProduct"
      ></ProductCard>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import ProductCard from "../../module/Product/ProductCard.vue";

const data = ref();
const getProduct = async () => {
  try {
    const res = await axios.get("/api/product");
    data.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getProduct();
});
</script>
