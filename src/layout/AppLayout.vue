<script setup>
import AppNavbar from "@/components/Nav/AppNavbar.vue";
import BottomNavigation from "@/components/Nav/BottomNavigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-slate-200 min-h-screen">
    <AppNavbar />

    <div class="container mx-auto p-2">
      <RouterView />
    </div>
    <BottomNavigation />
  </div>
</template>
