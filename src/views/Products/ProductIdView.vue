<template>
    <div class="flex  items-center bg-white p-2 rounded-md text-gray-600 font-bold gap-1">
        <RouterLink to="/ombor" class="text-xl text-blue-500 font-bold">Ombor</RouterLink>/{{ data.name? data.name : "Loading..." }}
    </div>
    <div class="w-full grid xs:grid-cols-1 grid-cols-2 md:flex md:justify-between gap-2 flex-wrap bg-white mt-2 mb-2 border relative border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-2 md:p-4">
        <div>
            <p class="text-sm uppercase text-gray-400">Mahsulot nomi</p>
            <p class="text-base font-bold">{{ data.name ? data.name : 'Loading...' }}</p>
        </div>
        <div>
          <p class="text-sm uppercase text-gray-400">Miqdor</p>
          <p class="text-base font-bold">{{ data.size ? data.size : 'Loading...' }} kg</p>
        </div>
          <div>
          <p class="text-sm uppercase text-gray-400">1 kg narx</p>
          <p class="text-base font-bold">
            {{ data.price ? formatCurrency(Number(data?.price)) : 'Loading...' }}
          </p>
        </div>
          <div>
          <p class="text-sm uppercase text-gray-400">1 kg Sotish narxi</p>
          <p class="text-base font-bold">
            {{ data.buyyingPrice ? formatCurrency(Number(data?.buyyingPrice)) : 'Loading...' }}
          </p>
        </div>
          <div>
          <p class="text-sm uppercase text-gray-400">Jami Summa</p>
          <p class="text-base font-bold">
            {{ data.size ? formatCurrency(Number(data?.size) * Number(data?.price)) : 'Loading...' }}
          </p>
        </div>
          <div>
          <p class="text-sm uppercase text-gray-400">qo'shilgan vaqt</p>
          <p class="text-base font-bold">
            {{ data.created_at ? formatDateTime(data.created_at) : 'Loading...' }}
          </p>
        </div>
    </div>
    <ProductIdTable />
</template>
<script setup>
import axios from "axios"
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import formatCurrency from "../../utils/PriceFormatter";
import formatDateTime from "../../utils/DateTimeFormatter";
import ProductIdTable from "../../module/ProductId/ProductIdTable.vue"
const id = useRoute().params.id;
console.log(id);
const data =ref([])

const getProduct =async()=>{
    try {
        const response = await axios.get(`/api/product/${id}`)
        data.value = response.data
        console.log(data.value)
    } catch (error) {
        console.error(error)
    }
}



onMounted(()=>{
    getProduct()
})
</script>
