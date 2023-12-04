import { createWebHistory, createRouter } from "vue-router";
import Container from "./components/Container.vue";
import MyPage from "./components/MyPage.vue";

const routes = [
  {
    path: "/MyPage",
    component: MyPage,
  },
  {
    path: "/",
    component: Container,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
