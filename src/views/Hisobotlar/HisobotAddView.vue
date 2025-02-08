<template>
  <div class="h-screen w-full p-4">
    <h1 class="text-[#000] font-semibold">Hisobot Qo'shish</h1>
    <div
      class="w-full h-screen mx-auto bg-white p-8 rounded-2xl mt-5 flex flex-col gap-5"
    >
      <form class="">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Mahsulot</label
        >
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
      </form>

      <form class="grid grid-cols-2 gap-5">
        <div>
          <label
            for="time"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Sana</label
          >

          <input
            datepicker
            datepicker-format="mm/yy"
            id="card-expiration-input"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="12/23"
            required
          />
        </div>
        <div class="">
          <label
            for="time"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Vaqt</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="time"
              id="time"
              class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="09:00"
              max="18:00"
              value="00:00"
              required
            />
          </div>
        </div>
      </form>
     
      <div class="flex flex-col justify-center mt-5 gap-3">
        <!-- btn1 -->
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:text-red-700 hover:bg-white  hover:border hover:border-black  font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-white dark:focus:ring-red-900"
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
