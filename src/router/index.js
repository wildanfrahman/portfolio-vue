import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Project from "../pages/Project.vue";
import projectDetail from "../pages/projectDetail.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/project", component: Project },
  { path: "/project/:id", component: projectDetail },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
