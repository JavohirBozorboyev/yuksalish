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
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Mahsulot tanlang</option>
          <option value="US">A mahsulot</option>
          <option value="CA">B mahsulot</option>
          <option value="FR">D mahsulot</option>
          <option value="DE">E mahsulot</option>
        </select>

        <div>
          <form class="">
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
              ></div>
              <input
                type="text"
                id="zip-input"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0kg"
                pattern="^\d{5}(-\d{4})?$"
                required
              />
            </div>
          </form>
        </div>
      </form>

      <div class="flex flex-col justify-center mt-5 gap-3">
        <!-- btn1 -->
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:text-red-700 hover:bg-white hover:border hover:border-black font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-white dark:focus:ring-red-900"
        >
          Saqlash
        </button>
        <!-- btn2 -->
        <button
          type="button"
          class="text-black-700 bg-white border border-gray-300 hover:text-white focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Bekor qilish
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
