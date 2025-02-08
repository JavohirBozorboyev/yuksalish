<template>
  <div class="min-h-screen w-full p-4">
    <h1 class="text-[#000] font-semibold">Qo'shish</h1>
    <div class="p-6 rounded-lg shadow-md">
      <div class="grid gap-4 mb-2 md:grid-cols-2 flex-wrap">
        <!-- ism -->
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Ism</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ismini kiriting"
            required
          />
        </div>
        <!-- familiya -->
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Familiya</label
          >
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Familiya kiriting"
            required
          />
        </div>
        <!-- sharif -->
        <div>
          <label
            for="company"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Sharifini kiriting</label
          >
          <input
            type="text"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Falonchiyevich"
            required
          />
        </div>
        <!-- summa -->
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Summa</label
          >

          <input
            type="number"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Summa kiriting"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>

        <!-- sana -->

        <div class="relative">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone number</label
          >
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 md:mt-[-25px] mt-[25px] text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </div>
          <input
            datepicker
            id="default-datepicker"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Sana tanlang"
          />
        </div>
        <!-- izoh   -->
        <div class="">
          <label
            for="message"
            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >Izoh</label
          >
          <textarea
            id="message"
            rows="4"
            class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Izoh kiriting..."
          ></textarea>
        </div>
      </div>
      <div class="flex flex-col justify-center mt-5 gap-3">
        <!-- btn1 -->
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:text-red-700 hover:bg-white focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-white dark:focus:ring-red-900"
        >
          Saqlash
        </button>
        <!-- btn2 -->
        <button
          type="button"
          class="text-red-700 bg-white border border-gray-300 hover:text-white focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Bekor qilish
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
