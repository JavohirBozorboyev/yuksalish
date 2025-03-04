<script setup>
import { provide, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const authStore = useAuthStore();
const router = useRouter();

watchEffect(() => {
  authStore.initialize();

  if (!authStore.user || !authStore.token) {
    router.replace("/login");
  }
});

provide("auth", authStore);
</script>

<template>
  <slot />
</template>
