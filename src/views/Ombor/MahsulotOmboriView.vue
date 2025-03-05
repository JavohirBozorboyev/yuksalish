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
              @click="openModalSell(item)"
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
  <!-- Begin Edit Product modal -->
  <!-- Main modal -->
  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      sellModal
        ? 'flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full '
        : 'hidden '
    "
    class=""
  >
    <div
      class="relative flex items-center justify-center p-4 w-full max-w-full max-h-full"
    >
      <!-- Modal content -->
      <div
        class="relative bg-white w-full md:w-1/2 rounded-lg shadow-sm dark:bg-gray-700 border"
      >
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Mahsulot Sotish
          </h3>
          <button
            @click="closeModeal()"
            type="button"
            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="w-full px-4 pt-4 flex justify-between">
          <span class="flex flex-col gap-1 font-bold"
            ><h1
              class="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Mahsulot nomi:
            </h1>
            {{ sellProduct.name }}</span
          >
          <span class="flex flex-col gap-1 font-bold"
            ><h1
              class="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Mahsulot hajmi:
            </h1>
            {{ sellProductSize }} Kg</span
          >
        </div>
        <div class="w-full p-4 md:p-5">
          <form class="space-y-4 w-full" action="#">
            <div class="flex gap-4">
              <div class="w-1/2">
                <label
                  for="numberheigh"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Mahsulot Hajmi(kg)</label
                >
                <input
                  type="number"
                  name="numberheigh"
                  v-model="sellProduct.size"
                  :class="
                    sellProduct.size > sellProductSize
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : ''
                  "
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="500"
                  required
                />
              </div>
              <div class="w-1/2">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Sotish Narxi(UZS)</label
                >
                <input
                  type="number"
                  name="price"
                  v-model="sellProduct.price"
                  placeholder="5000"
                  :class="
                    sellProduct.price < sellProduct.buyyingPrice
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : ''
                  "
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div
              class="flex justify-between border-t pt-2 rounded-t dark:border-gray-600 border-gray-200"
            >
              <span
                ><label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Sotiladigan mahsulot</label
                >
                <h1 class="font-bold">
                  {{ sellProduct.size ? sellProduct.size : 0 }} kg
                </h1></span
              >
              <span
                ><label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Tushkan Summa</label
                >
                <h1 class="font-bold">
                  {{
                    formatCurrency(sellProduct.price ? sellProduct.price * sellProduct.size : 0)
                  }}
                </h1></span
              >
              <span
                ><label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Sof Foyda</label
                >
                <h1 class="font-bold">
                  {{
                    formatCurrency(sellProduct.price
                      ? sellProduct.price * sellProduct.size -
                        sellProduct.buyyingPrice * sellProduct.size
                      : 0)
                  }}
                </h1></span
              >
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sotish
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- End Edit Product modal -->
</template>
<script setup>
import axios from "axios";
import { onMounted, ref, reactive } from "vue";
import formatCurrency from "../../utils/PriceFormatter";

const sellProduct = reactive({
  name: null,
  size: null,
  price: null,
  buyyingPrice: null,
});
const sellProductSize = ref();
const sellModal = ref(false);
const data = ref();
const getProduct = async () => {
  try {
    const res = await axios.get("/api/product");
    data.value = res.data;
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
const openModalSell = async (item) => {
  sellModal.value = true;
  sellProduct.price = item.price;
  sellProduct.buyyingPrice = item.buyyingPrice;
  sellProduct.name = item.name;
  sellProductSize.value = item.size;
  console.log(sellProduct.buyyingPrice);
};
const closeModeal = () => {
  sellModal.value = false;
  sellProduct.name = null;
  sellProduct.size = null;
  sellProduct.price = null;
  sellProductSize.value = null;
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
