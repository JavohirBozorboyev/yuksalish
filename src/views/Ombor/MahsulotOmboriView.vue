<script setup></script>

<template>
  <div class="p-4">
    <div><h1 class="text-[#000] font-semibold">Ombor</h1></div>
    <div class="relative overflow-x-auto rounded-md mt-5">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-2 pl-3 py-3">№</th>
            <th scope="col" class="py-3">Mahsulot nomi</th>
            <th scope="col" class="py-3">Miqdori</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-2 pl-3 py-4">1</td>
            <td scope="row" class="py-4 text-sm font-medium">Mahsulot 1</td>
            <td class="py-4 font-medium">3000 kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
