<script setup>
import { provide, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthStore } from "../stores/useAuthStore";

const authStore = useAuthStore();
const router = useRouter();

if (Cookies.get("authToken")) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
    "authToken"
  )}`;
}

onMounted(() => {
  authStore.initialize();

  if (!authStore.user) {
    router.replace("/login");
  }
});

provide("auth", authStore);
</script>

<template>
  <slot />
</template>
