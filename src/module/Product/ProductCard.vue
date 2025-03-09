<template>
  <div
    class="w-full bg-white border relative border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 md:p-4"
  >
    <div class="flex justify-between items-center relative">
      <h1 class="text-base font-bold">{{ item?.name }}</h1>
      <button
        class="inline-block w-40 peer text-gray-500 bg-gray-200 p-1 rounded-md"
        type="button"
      >
        Sozlamalar
      </button>
      <!-- Begin modal dropdown -->
      <div
        class="absolute hidden peer-hover:grid hover:grid w-40 p-2 bg-white border right-0 top-8 z-10 cursor-pointer rounded-md grid-cols-1 gap-2"
      >
        <RouterLink
          :to="'/ombor/' + item._id"
          class="bg-gray-100 p-1 px-2 w-full rounded active:scale-95 duration-300 text-sm"
          >Ko'rish</RouterLink
        >
        <span
          class="bg-gray-100 p-1 px-2 w-full rounded active:scale-95 duration-300 text-sm"
          >Taxrirlash</span
        >
        <span
          class="bg-red-200 p-1 px-2 w-full rounded active:scale-95 duration-300 text-sm"
          >O'chirish</span
        >
      </div>
      <!-- End modal dropdown -->
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
          <p class="text-[10px] uppercase text-gray-400">1-kg Sotilish Narxi</p>
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
        @click="openModalAdd(item)"
          class="border-2 text-sm border-blue-500 text-blue-500 px-3 p-1 rounded-md active:scale-95 duration-200"
        >
          Qo'shish
        </button>
      </div>
    </div>
  </div>
  <!-- Begin Sell Product modal -->
  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      sellModal
        ? 'flex  overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 bg-white w-full md:inset-0'
        : 'hidden '
    "
  >
    <!-- Modal content -->
    <div class="w-full shadow-sm dark:bg-gray-700 border">
      <!-- Modal header -->
      <div
        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
      >
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Mahsulot Sotish
        </h3>
        <button
          @click="closeModal()"
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
          ><h1 class="block text-sm font-medium text-gray-900 dark:text-white">
            Mahsulot nomi:
          </h1>
          {{ sellProductName }}
        </span>
        <span class="flex flex-col gap-1 font-bold"
          ><h1 class="block text-sm font-medium text-gray-900 dark:text-white">
            Tannarxi
          </h1>
          {{ formatCurrency(sellProduct.buyyingPrice) }}
        </span>
        <span class="flex flex-col gap-1 font-bold"
          ><h1 class="block text-sm font-medium text-gray-900 dark:text-white">
            Jami mahsulot:
          </h1>
          {{ sellProductSize }} Kg</span
        >
      </div>
      <div class="w-full p-4 md:p-5">
        <form class="w-full" action="#">
          <div class="grid gap-3">
            <div class="col-span-2 md:col-span-1">
              <label
                for="buyer"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Xaridor</label
              >
              <input
                type="text"
                name="buyer"
                v-model="sellProduct.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Jahongir MCHJ"
              />
            </div>
            <div class="col-span-2 md:col-span-1">
              <label
                for="buyerNumber"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Xaridor raqami</label
              >
              <input
                type="tel"
                name="buyerNumber"
                v-model="sellProduct.phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="+998(91)123-45-67"
              />
            </div>
            <div class="col-span-2 md:col-span-1">
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
            <div class="col-span-2 md:col-span-1">
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
            <div class="col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Tafsilot</label
              >
              <textarea
                id="message"
                v-model="sellProduct.description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-2 md:flex md:justify-between py-4 mt-4 dark:border-gray-600 border-gray-200"
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
                  formatCurrency(
                    sellProduct.price ? sellProduct.price * sellProduct.size : 0
                  )
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
                  formatCurrency(
                    sellProduct.price
                      ? sellProduct.price * sellProduct.size -
                          sellProduct.buyyingPrice * sellProduct.size
                      : 0
                  )
                }}
              </h1></span
            >
          </div>
          <button
            type="button"
            @click="sellProductfunction()"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ isLoading ? "Loading..." : "Sotish" }}
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- End Sell Product modal -->
  <!-- Begin Add Product modal -->
  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      addProduct
        ? 'flex  overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 bg-white w-full md:inset-0'
        : 'hidden '
    "
  >
    <!-- Modal content -->
    <div class="w-full shadow-sm dark:bg-gray-700 border">
      <!-- Modal header -->
      <div
        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
      >
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
          Mahsulot Sotish
        </h3>
        <button
          @click="closeAddModal()"
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
      <div class="w-full px-4 pt-4 flex justify-between flex-wrap">
        <span class="flex flex-col xs:text-sm gap-1 font-bold"
          ><h1 class="block text-sm xs:text-xs font-medium text-gray-900 dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
            Mahsulot nomi
          </h1>
          {{ addProductInfo.name }}
        </span>
        <span class="flex flex-col gap-1 xs:text-sm font-bold"
          ><h1 class="block text-sm xs:text-xs font-medium text-gray-900 dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
            Tannarxi
          </h1>
          {{ formatCurrency(addProductInfo.buyyingPrice) }}
        </span>
        <span class="flex flex-col xs:text-sm gap-1 font-bold"
          ><h1 class="block text-sm xs:text-xs font-medium text-gray-900 dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">
            Jami mahsulot:
          </h1>
          {{ addProductInfo.size }} Kg</span
        >
      </div>
      <div class="w-full p-4 md:p-5">
        <form class="w-full" action="#">
          <div class="grid gap-3">
            <div class="col-span-2 md:col-span-1">
              <label
                for="numberheigh"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Mahsulot Hajmi(kg)</label
              >
              <input
                type="number"
                name="numberheigh"
                v-model="addProductSize"
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
          </div>
          <div
            class="grid grid-cols-2 gap-2 md:flex md:justify-between py-4 mt-4 dark:border-gray-600 border-gray-200"
          >
            <span
              ><label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Qo'shiladigan mahsulot</label
              >
              <h1 class="font-bold xs:text-sm overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">
                {{ addProductSize ? addProductSize : 0 }} kg
              </h1></span
            >
            <span
              ><label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Sarflanadigan summa</label
              >
              <h1 class="font-bold xs:text-sm overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">
                {{
                  formatCurrency(
                    addProductInfo?.price ? addProductInfo?.buyyingPrice * addProductSize : 0
                  )
                }}
              </h1></span
            >
            <span
              ><label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Jami mahsulot</label
              >
              <h1 class="font-bold xs:text-sm overflow-hidden whitespace-nowrap text-ellipsis text-gray-500">
                {{
                    addProductSize
                      ? addProductInfo?.size + addProductSize
                      : 0
                }} kg
              </h1></span
            >
          </div>
          <button
            type="button"
            @click="addProductById(addProductInfo?._id)"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ isLoading ? "Loading..." : "Qo'shish"}}
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Product modal -->
</template>
<script setup>
import axios from "axios";
import { defineProps, defineEmits, ref, reactive } from "vue";
import formatCurrency from "../../utils/PriceFormatter";
import { RouterLink } from "vue-router";
import Swal from 'sweetalert2';

const props = defineProps({ item: {} });
const emits = defineEmits(["getProduct"]);

const sellProduct = reactive({
  name: null,
  size: null,
  price: null,
  productId: null,
  phone: null,
  buyyingPrice: null,
  currency: "UZS",
  description: null,
});
const sellProductSize = ref();
const sellProductName = ref("");
const sellModal = ref(false);
const addProduct= ref(false);
const addProductInfo = ref({});
const addProductSize= ref(null)
const isLoading = ref(false);

const openModalSell = async (item) => {
  sellModal.value = true;
  sellProduct.price = item.price;
  sellProduct.productId = item._id;
  sellProduct.buyyingPrice = item.buyyingPrice;
  sellProductSize.value = item.size;
  sellProductName.value = item.name;
};

const openModalAdd = async (item) => {
  addProduct.value = true;
  addProductInfo.value=item
  console.log(item);
};

const sellProductfunction = async () => {
  isLoading.value = true;
  try {
    const res = await axios.post(`/api/product-history`, {
      name: sellProduct.name,
      productId: sellProduct.productId,
      size: sellProduct.size,
      sellingPrice: sellProduct.price,
      originalPrice: sellProduct.buyyingPrice,
      phone: sellProduct.phone,
      currency: sellProduct.currency,
      description: sellProduct.description,
      totalAmount: sellProduct.price * sellProduct.size,
      profit:
        sellProduct.price * sellProduct.size -
        sellProduct.buyyingPrice * sellProduct.size,
    });
    if (res.status == 201) {
      Swal.fire({
        position: 'top-center',
        icon:'success',
        title: `Mahsulot Sotildi`,
        showConfirmButton: false,
        timer: 1500
      });
      isLoading.value = false;
      emits("getProduct");
      closeModal();
    }
  } catch (error) {
    isLoading.value = false;
    console.log(error);
  }
};

const addProductById=async (id) => {
  isLoading.value = true
  try{
    const res = await axios.put(`/api/product/size/${id}`, {
      size: addProductSize.value,
    });
    if (res.status == 200) {
       Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `Mahsulot qo'shildi`,
                    showConfirmButton: false,
                    timer: 1500
                });
                addProductSize.value =""
                isLoading.value = false;
      emits("getProduct");
      closeAddModal();
    }
  }
  catch (error) {
    isLoading.value = false;
    console.log(error);
  };
}

const closeModal = () => {
  sellModal.value = false;
  sellProduct.name = null;
  sellProduct.size = null;
  sellProduct.price = null;
  sellProductSize.value = null;
  sellProduct.phone = null;
  sellProduct.description = null;
};
const closeAddModal = () => {
  addProduct.value = false;
};
</script>
