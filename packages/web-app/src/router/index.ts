import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../view/main/HomePage.vue";
import LoginHome from "../view/login/LoginHome.vue";

export const mainMenu = [
  {
    name: "main",
    title: "主菜单",
    path: "/main",
    redirect: "/main/index",
    children: [
      {
        title: "主页",
        name: "main/index",
        path: "/main/index",
        component: HomePage,
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  ...mainMenu,
  {
    title: "登录页",
    path: "/login/index",
    component: LoginHome,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
