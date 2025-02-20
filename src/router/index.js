import "flowbite";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/Login/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import AppLayout from "@/layout/AppLayout.vue";
import LoginLayout from "@/layout/LoginLayout.vue";
import HomeEditView from "../views/home/HomeEditView.vue";
import HomeAddView from "../views/home/HomeAddView.vue";
import ProductsView from "../views/Products/ProductsView.vue";
import TarkibiView from "../views/Products/TarkibiView.vue";
import ProductAddView from "../views/Products/ProductAddView.vue";
import MahsulotOmboriView from "../views/Ombor/MahsulotOmboriView.vue";
import OmborAddView from "../views/Ombor/OmborAddView.vue";
import HisobotlarView from "../views/Hisobotlar/HisobotlarView.vue";
import HisobotAddView from "../views/Hisobotlar/HisobotAddView.vue";
import AdminsView from "../views/admins/AdminsView.vue";
import AddAdminsView from "../views/admins/AddAdminsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/home/edit/:id",
    name: "HomeEdit",
    component: HomeEditView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/home/add",
    name: "HomeAdd",
    component: HomeAddView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/product",
    name: "ProductsView",
    component: ProductsView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/product/add",
    name: "ProductAddView",
    component: ProductAddView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/ombor",
    name: "MahsulotOmboriView",
    component: MahsulotOmboriView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/ombor/add",
    name: "OmborAddView",
    component: OmborAddView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/hisobotlar",
    name: "HisobotlarView",
    component: HisobotlarView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/hisobotlar/add",
    name: "HisobotAddView",
    component: HisobotAddView,
    meta: {
      layout: AppLayout,
    },
  },

  {
    path: "/tarkibi",
    name: "TarkibiView",
    component: TarkibiView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      layout: LoginLayout,
    },
  },
  {
    path: "/admins",
    name: "Admins",
    component: AdminsView,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: "/admins/add",
    name: "Admins Add",
    component: AddAdminsView,
    meta: {
      layout: AppLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
