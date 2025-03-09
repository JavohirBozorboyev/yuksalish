<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Haridor</th>
          <th scope="col" class="px-6 py-3">Tell</th>
          <th scope="col" class="px-6 py-3">Sotildi KG</th>
          <th scope="col" class="px-6 py-3">Sotilgan narxi 1 kg uchun</th>
          <th scope="col" class="px-6 py-3">Asl narxi 1 kg uchun</th>
          <th scope="col" class="px-6 py-3">Sotilgan vaqti</th>
          <th scope="col" class="px-6 py-3">O'chirish</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemKey) in productHistory" :key="itemKey"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.name }}
          </th>
          <td class="px-6 py-4">
            {{ item.phone }}
          </td>
          <td class="px-6 py-4">
            {{ item.size }} kg
          </td>
          <td class="px-6 py-4">
            {{ formatCurrency(item.sellingPrice) }}
          </td>
          <td class="px-6 py-4">
            {{ formatCurrency(item.originalPrice) }}
          </td>
          <td class="px-6 py-4">
            {{ formatDateTime(item.createdAt) }}
          </td>
          <td class="px-6 py-4">
            <button
            @click="deleteProductHistory(item._id)"
              class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-red-700 hover:text-red-500 focus:outline-none focus:text-red-600 transition ease-in-out duration-150 dark:text-red-400 dark:hover:text-red-500 dark:focus:text-red-500"
            >
              <IconTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import axios from "axios";
import { IconTrash } from "@tabler/icons-vue";
import formatCurrency from "../../utils/PriceFormatter";
import formatDateTime from "../../utils/DateTimeFormatter";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const id = useRoute().params.id;

const productHistory = ref([]);

const getProductHistory = async () => {
  try {
    const response = await axios.get(`/api/product-history/${id}`);
    productHistory.value = response.data;
    console.log(productHistory.value);
  } catch (error) {
    console.error(error);
  }
};

const deleteProductHistory = async (itemId) => {
    try {
       await axios.delete(`/api/product-history/delete/${itemId}`);
       getProductHistory();
    } catch (error) {
      console.error(error);
    }
  };

onMounted(() => {
  getProductHistory();
});
</script>
