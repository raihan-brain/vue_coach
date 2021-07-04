import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CoachList from "@/views/coach/CoachList.vue";
// import UserLogin from "@/views/auth/UserLogin.vue";
// import ContactCoach from "@/views/request/ContactCoach.vue";
import Requests from "@/components/coach/Requests.vue";


const routes: Array<RouteRecordRaw> = [
 
  { path: "/", name: "CoachList", component: CoachList},
  // { path: "/auth", name: "Login", component: UserLogin},
  { path: "/requests", name: "Requests", component: Requests},
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
