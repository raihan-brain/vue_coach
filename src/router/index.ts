import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CoachDetails from "@/pages/coaches/CoachDetails.vue";
import CoachList from "@/pages/coaches/CoachList.vue";
import CoachRegistration from "@/pages/coaches/CoachRegistration.vue";
import ContactCoach from "@/pages/requests/ContactCoach.vue";
import RequestsRecieved from "@/pages/requests/RequestsRecieved.vue";
import NotFound from "@/pages/NotFound.vue";
import UserAuth from "@/pages/auth/UserAuth.vue"

const routes: Array<RouteRecordRaw> = [
// const routes: Array<any> = [
  { path: "/", redirect:"/coaches" },
  { path: "/coaches", name: "Coaches", component: CoachList },
  { path: "/coaches/:id", component: CoachDetails, props:true, children: [
    { path: "contact", component: ContactCoach  }
  ]},
  { path: "/register", name:"Register", component: CoachRegistration },
  { path: "/auth", name:"Auth", component: UserAuth },
  { path: "/requests", name:"Requests", component: RequestsRecieved },
  { path: "/:notFound(.*)", name:"NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
