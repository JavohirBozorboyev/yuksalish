<script setup>
import AppNavbar from "@/components/Nav/AppNavbar.vue";
import BottomNavigation from "@/components/Nav/BottomNavigation.vue";
import { RouterView } from "vue-router";
import AppSidebar from "@/components/Nav/AppSidebar.vue";
</script>

<template>
  <div class="bg-slate-200 min-h-screen pt-5">
    <AppNavbar />

    <AppSidebar />

    <div class="p-2 sm:ml-64 pt-20 lg:pt-16">
      <RouterView />
    </div>
  </div>
</template>
