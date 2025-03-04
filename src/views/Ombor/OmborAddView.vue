<template>
  <div class="h-screen w-full p-4">
    <h1 class="text-[#000] font-semibold">Mahsulot Tarkibi</h1>
    <div
      class="w-full h-screen mx-auto bg-white p-8 rounded-2xl mt-5 flex flex-col gap-5"
    >
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Mahsulotlat</label
      >

      <form class="grid grid-cols-2 gap-5">
        <div>
          <label>Maxsulot nomi</label>
          <input
            v-model="product.name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Maxsulot nomi"
            required
          />
        </div>
        <div>
          <label>Miqdori (Kg)</label>
          <input
            v-model="product.size"
            type="number"
            id="zip-input"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0kg"
            pattern="^\d{5}(-\d{4})?$"
            required
          />
        </div>
        <div>
          <label>Sotib olish narxi</label>
          <input
            v-model="product.buyyingPrice"
            type="number"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="UZS"
            required
          />
        </div>
        <div>
          <label>Sotilish Narxi</label>
          <input
            v-model="product.price"
            type="number"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="UZS"
            required
          />
        </div>
      </form>

      <div class="mt-10 flex justify-end gap-3">
        <button
          @click="PostProduct"
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:text-red-700 hover:bg-white hover:border hover:border-black font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-white dark:focus:ring-red-900"
        >
          Saqlash
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const product = ref({
  name: "",
  price: null,
  currency: "UZS",
  buyyingPrice: null,
  size: null,
});

const PostProduct = async () => {
  try {
    if (
      !product.value.name ||
      !product.value.price ||
      !product.value.buyyingPrice ||
      !product.value.size
    ) {
      alert("⚠️ Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const res = await axios.post("/api/product", product.value);

    if (res.status === 201) {
      product.value = {
        name: "",
        price: null,
        currency: "UZS",
        buyyingPrice: null,
        size: null,
      };
      router.push("/ombor");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
