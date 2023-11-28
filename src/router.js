import { createWebHistory, createRouter } from "vue-router";
import Container from "./components/Container.vue";
import Post from "./components/Post.vue";
import MyPage from "./components/MyPage.vue";

const routes = [
  {
    path: "/MyPage",
    component: MyPage,
  },
  {
    path: "/Post",
    component: Post,
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
