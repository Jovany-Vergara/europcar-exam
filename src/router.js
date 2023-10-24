import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import FormEuropcar from "./components/FormEuropcar.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/formEuropcar", component: FormEuropcar },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
