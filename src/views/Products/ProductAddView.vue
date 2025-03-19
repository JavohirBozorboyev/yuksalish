<template>
  <div class="h-screen w-full">
    <h1 class="text-[#000] font-semibold">Mahsulot Tarkibi</h1>
    <div class="w-full h-screen mx-auto bg-white p-4 rounded-2xl mt-5 flex flex-col gap-5">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">
        Mahsulotlar
      </label>
      
      <form class="grid grid-cols-4 md:grid-cols-1 gap-5" @submit.prevent="createProduct">
        <div>
          <input
            type="text"
            v-model="productName"
            :class="ifError ? 'border-red-300' : ''"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Mahsulot nomini"
            required
          />
        </div>
        <div :class="ifError ? 'text-red-600 absolute text-xs mt-0' : 'hidden'">Nomi kiritilmagan</div>
        <select
          id="countries"
          @change="changeProduct"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Mahsulot tanlang</option>
          <option v-for="(item, index) in products" :key="index" :value="JSON.stringify(item)">
            {{ item.name }}
          </option>
        </select>

        <div class="relative">
          <input
            type="text"
            v-model="changeAmount"
            :class="ifError ? 'border-red-300' : ''"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="0kg"
            required
          />
          <div :class="changedProduct?.size < changeAmount ? 'text-red-600 absolute text-xs mt-0' : 'hidden'">Mavjut {{ changedProduct?.size }} kg</div>
        </div>

        <button @click="todoNewProduct" type="button" class="text-white bg-blue-700 hover:text-blue-700 hover:bg-white border font-medium rounded-3xl text-sm px-5 py-2.5">
          Qo'shish
        </button>
      </form>

      <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50">
            <tr>
              <th class="px-6 py-3">ID</th>
              <th class="px-6 py-3">Qo'shilgan mahsulotlar</th>
              <th class="px-6 py-3">Hajmi</th>
              <th class="px-6 py-3">Narx</th>
              <th class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, itemKey) in newProduct.composition" :key="itemKey" class="border-b bg-white">
              <td class="px-6 py-4">{{ itemKey + 1 }}</td>
              <td class="px-6 py-4">{{ item.name }}</td>
              <td class="px-2 py-4">{{ item.size }} Kg</td>
              <td class="px-2 py-4">{{ formatCurrency(item.price) }}</td>
              <td class="px-6 py-4 flex gap-5">
                <button @click="deleteProduct(itemKey)" class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-10 flex justify-end gap-3">
        <button @click="creatNewProduct" type="button" class="text-white bg-red-700 hover:text-red-700 hover:bg-white border font-medium rounded-3xl text-sm px-5 py-2.5">
          Saqlash
        </button>
        <button @click="clearProducts" type="button" class="text-black bg-white border border-gray-300 hover:text-white hover:bg-red-700 font-medium rounded-3xl text-sm px-5 py-2.5">
          Bekor qilish
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch, onMounted} from "vue";
import formatCurrency from "../../utils/PriceFormatter";

import { useRouter } from "vue-router"; // Routerni import qilish

const router = useRouter(); // Router obyektini olish

const products = ref([]);
const changeAmount = ref("");
const productName = ref("");
const changedProduct = ref(null);
const ifError = ref(false);

// **LocalStorage-dan yuklab olish**
const loadSavedProduct = () => {
  const savedData = JSON.parse(localStorage.getItem("newProduct"));
  if (savedData) {
    productName.value = savedData.name || "";
    newProduct.value = {
      name: savedData.name || "",
      composition: savedData.composition || []
    };
  }
};

// **Yangi mahsulot obyektini yaratish**
const newProduct = ref({
  name: "",
  composition: []
});

// Sahifa yangilanganida LocalStorage-dan ma'lumotlarni yuklash
onMounted(() => {
  loadSavedProduct();
  getProducts();
});

// **Backenddan mahsulotlarni olish**
const getProducts = async () => {
  try {
    const res = await axios.get("/api/product");
    products.value = res.data;
  } catch (error) {
    console.error(error);
  }
};

// **Mahsulot tanlash funksiyasi**
const changeProduct = (event) => {
  const selectedProduct = JSON.parse(event.target.value);
  changedProduct.value = { ...selectedProduct };
};

// **Mahsulot qo‘shish funksiyasi**
const todoNewProduct = () => {
  if (!changedProduct.value || !changeAmount.value) return;

  if (changeAmount.value > changedProduct.value.size) {
    ifError.value = true;
    return;
  }

  const newItem = {
    id: changedProduct.value._id,
    name: changedProduct.value.name,
    price: changedProduct.value.buyyingPrice * changeAmount.value,
    size: changeAmount.value
  };

  if (!newProduct.value.composition.some((p) => p.id === newItem.id)) {
    newProduct.value.composition.push(newItem);
  }

  changeAmount.value = "";
  ifError.value = false;
  saveProducts();
};

// **LocalStorage-ga avtomatik saqlash**
watch([productName, newProduct], () => {
  newProduct.value.name = productName.value;
  localStorage.setItem("newProduct", JSON.stringify(newProduct.value));
}, { deep: true });

// **Mahsulotni o‘chirish**
const deleteProduct = (index) => {
  newProduct.value.composition.splice(index, 1);
  saveProducts();
};

// **Barcha mahsulotlarni tozalash**
const clearProducts = () => {
  newProduct.value = { name: "", composition: [] };
  productName.value = "";
  localStorage.removeItem("newProduct");
  router.push('/product')
};

// **Mahsulotlarni saqlash**
const saveProducts = () => {
  newProduct.value.name = productName.value; 
  localStorage.setItem("newProduct", JSON.stringify(newProduct.value));
};

// **Yangi mahsulot yaratish**
const creatNewProduct = () => {
  console.log(newProduct.value);
};
</script>

