import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
// const routes: Array<any> = [
  { path: "/", redirect:"/coaches" },
  { path: "/coaches", name: "Coaches", component: () => import(/* webpackChunkName: "Coaches" */ "@/pages/coaches/CoachList.vue")},
  { path: "/coaches/:id", component: () => import(/* webpackChunkName: "CoachDetails" */ "@/pages/coaches/CoachDetails.vue") , props:true, children: [
    { path: "contact", component: () => import(/* webpackChunkName: "ContactCoach" */ "@/pages/requests/ContactCoach.vue")  }
  ]},
  { path: "/register", name:"Register", component: () => import(/* webpackChunkName: "Register" */ "@/pages/coaches/CoachRegistration.vue") },
  { path: "/auth", name:"Auth", component: () => import( /* webpackChunkName: "UserAuth" */ "@/pages/auth/UserAuth.vue") },
  { path: "/requests", name:"Requests", component: () => import( /* webpackChunkName: "RequestsRecieved" */ "@/pages/requests/RequestsRecieved.vue" ) },
  { path: "/:notFound(.*)", name:"NotFound", component: () => import( /* webpackChunkName: "NotFound" */ "@/pages/NotFound.vue" ) },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
