import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Coaches from "../views/coaches.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/coaches",
    name: "Coaches",
    component: Coaches,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
