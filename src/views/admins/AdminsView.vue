<template>
  <main>
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Admin Full Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3 flex justify-end">Taxrirlash</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item?.name }} {{ item?.lastname }}
            </th>
            <td class="px-6 py-4">{{ item?.email }}</td>
            <td class="px-6 py-4 flex justify-end gap-2">
              <!-- EDIT -->
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  class="fill-white"
                >
                  <path
                    d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"
                  ></path>
                </svg>
              </button>
              <!-- DELETE -->

              <button
                @click="deleteItem(item.id)"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  class="fill-white"
                >
                  <path
                    d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const data = ref();
const getAdmin = async () => {
  try {
    const res = await axios.get("/api/admin");
    data.value = res.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getAdmin();
});
</script>
