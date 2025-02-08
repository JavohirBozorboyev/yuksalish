<template>
  <!-- LOGIN -->
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a href="#" class="flex items-center mb-5">
          <img
            class="w-[91px] h-[91px] mr-2"
            src="..//../IMG/yuksalish logo 1.svg"
            alt="logo"
          />
        </a>

        <h3 class="text-[#E31E24] text-[18px] font-semibold mb-4">
          “YUKSALISH” bedana yemlari
        </h3>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Hisobingizga kirish
            </h1>
            <div class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Emailingiz</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nomi@kompaniya.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Parol</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                      >Eslab qolish</label
                    >
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Parolni unutdingizmi?</a
                >
              </div>
              <button
                :disabled="loadinLogin"
                @click="login"
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Ro'yxatdan o'tish
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Hali hisobingiz yo'qmi?
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Ro'yxatdan o'tish</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/useAuthStore";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
const email = ref("");
const password = ref("");

const loadinLogin = ref(false);

const login = async () => {
  loadinLogin.value = true;

  try {
    const res = await authStore.login(email.value, password.value);
    if (res.status == 200) {
      router.push("/");
      setTimeout(() => {
        loadinLogin.value = false;
        window.location.reload();
      }, 1000);
    }
    if (res.status == 401 || res.status == 404) {
      loadinLogin.value = false;
      alert("Admin Topilmadi");
    }
  } catch (error) {
    loadinLogin.value = false;
  }
};
</script>
