<template>
  <div class="w-full h-screen">
    <div class="">
      <div
        class="flex justify-between items-center bg-white p-2 rounded-md mb-5"
      >
        <h1 class="text-[#000] font-semibold">Hisobotlar</h1>
        <RouterLink to="/hisobotlar/add">
          <button
            class="bg-blue-500 text-white p-2 px-4 rounded-md active:scale-95 duration-300"
          >
            Hisobotlar Qo'shish
          </button>
        </RouterLink>
      </div>
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-2 pl-3 py-3">№</th>
            <th scope="col" class="py-3">Mahsulot</th>
            <th scope="col" class="py-3">Sana</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-2 pl-3 py-4">1</td>
            <td scope="row" class="py-4 text-sm font-medium">Mahsulot 1</td>
            <td class="py-4 font-medium">
              <button
                type="button"
                data-modal-target="timepicker-modal"
                data-modal-toggle="timepicker-modal"
              >
                Sana
              </button>

              <!-- Main modal -->
              <div
                id="timepicker-modal"
                tabindex="-1"
                aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[600px] max-h-full"
              >
                <div class="relative p-4 w-full max-w-[23rem] max-h-full">
                  <!-- Modal content -->
                  <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-800"
                  >
                    <!-- Modal header -->
                    <div
                      class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600"
                    >
                      <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white"
                      >
                        Sanani kiriting
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="timepicker-modal"
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
                    <div class="p-4 pt-0">
                      <div
                        inline-datepicker
                        datepicker-autoselect-today
                        class="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"
                      ></div>
                      <label
                        class="text-sm font-medium text-gray-900 dark:text-white mb-2 block"
                      >
                        Vaqtni tanlang
                      </label>
                      <ul
                        id="timetable"
                        class="grid w-full grid-cols-3 gap-2 mb-5"
                      >
                        <li>
                          <input
                            type="radio"
                            id="10-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="10-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            10:00 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="10-30-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="10-30-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            10:30 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="11-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="11-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            11:00 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="11-30-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="11-30-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            11:30 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="12-am"
                            value=""
                            class="hidden peer"
                            name="timetable"
                            checked
                          />
                          <label
                            for="12-am"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            12:00 AM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="12-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="12-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            12:30 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="1-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="1-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            01:00 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="1-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="1-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            01:30 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="2-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="2-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            02:00 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="2-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="2-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            02:30 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="3-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="3-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            03:00 PM
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="3-30-pm"
                            value=""
                            class="hidden peer"
                            name="timetable"
                          />
                          <label
                            for="3-30-pm"
                            class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                          >
                            03:30 PM
                          </label>
                        </li>
                      </ul>
                      <div class="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Saqlash
                        </button>
                        <button
                          type="button"
                          data-modal-hide="timepicker-modal"
                          class="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          O'chirib yuborish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td class="px-2 py-4 flex justify-end">
              <div
                data-modal-target="popup-modal"
                data-modal-toggle="popup-modal"
                class="p-2 rounded-md bg-slate-100 flex items-center justify-center active:scale-90 duration-200"
              >
                <RouterLink to="/hisobotlar/add">
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                  >
                    <path
                      d="m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z"
                    />
                  </svg>
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
