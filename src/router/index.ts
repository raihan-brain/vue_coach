import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CoachList from "@/views/coach/CoachList.vue";
import Login from "@/views/student/Login.vue";
// import ContactCoach from "@/views/request/ContactCoach.vue";
import Requests from "@/components/coach/Requests.vue";
import RequestForm from "@/components/coach/RequestForm.vue";
import Register from "@/views/coach/Register.vue";


const routes: Array<RouteRecordRaw> = [
 
  { path: "/", name: "CoachList", component: CoachList},
  { path: "/login", name: "Login", component: Login},
  { path: "/requests", name: "Requests", component: Requests},
  { path: "/requestForm", name: "RequestForm", component: RequestForm, props: true},
  { path: "/register", name: "Register", component: Register},
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
