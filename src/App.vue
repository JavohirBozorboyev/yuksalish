<script setup>
import AuthProvider from "./Provider/AuthProvider.vue";
import axios from "axios";

axios.defaults.baseURL = "https://yuksalish-node.onrender.com";
</script>

<template>
  <div>
    <AuthProvider>
      <component :is="$route.meta.layout"></component
    ></AuthProvider>
  </div>
</template>
