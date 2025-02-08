<script setup>
import { RouterView } from "vue-router";
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <component :is="$route.meta.layout"></component>
  </div>
</template>
