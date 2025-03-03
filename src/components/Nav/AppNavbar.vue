<template>
  <div>
    <nav
      class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <!-- OPEN btn1 -->
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <!-- LOGO -->
            <RouterLink to="/">
              <a href="">
                <img
                  src="..//../IMG/yuksalish logo 1.svg"
                  class="w-12 h-12"
                  alt=""
                />
              </a>
            </RouterLink>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <!-- OPEN btn2 -->
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <!-- UserNameBtn -->

              <div
                class="z-50 hidden my-4 text-base list-none bg-white rounded-sm shadow-sm dark:bg-gray-700"
                id="dropdown-user"
              >
                <RouterLink to="/login">
                  <li
                    class="flex justify-between gap-2 items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: gray"
                    >
                      <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                      <path
                        d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"
                      ></path>
                    </svg>

                    <div @click="logout">Chiqish</div>
                  </li>
                </RouterLink>
                <!-- Admins -->
                <RouterLink to="/admins">
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <svg
                        class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path
                          d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                        />
                      </svg>
                      <span class="flex-1 ms-3 whitespace-nowrap">Admin</span>
                    </a>
                  </li>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink, useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const logout = () => {
  sessionStorage.clear();
  location.reload();
};

function addBtn() {
  if (route.path == "/") {
    router.push("/home");
  }
  if (route.path == "/") {
    router.push("/home/add");
  }
  if (route.path == "/product") {
    router.push("/product");
  }
  if (route.path == "/product") {
    router.push("/product/add");
  }
  if (route.path == "/ombor") {
    router.push("/ombor");
  }
  if (route.path == "/ombor") {
    router.push("/ombor/add");
  }
}
</script>
