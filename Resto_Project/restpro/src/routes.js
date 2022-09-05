import ProHomiie from "./components/ProHomiie.vue";
import SignUp from "./components/SignUp.vue";
import LoginResto from "./components/LoginResto.vue";

import CancelBook from "./components/CancelBook.vue";
import AllBook from "./components/AllBook.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "ProHomiie",
    component: ProHomiie,
    path: "/",
  },
  {
    name: "SignUP",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "LoginResto",
    component: LoginResto,
    path: "/login",
  },
  {
    name: "Cancel Book",
    component: CancelBook,
    path: "/cancelbook",
    beforeEnter: () => {
      if (!localStorage.getItem("user-info")) {
        router.push("/login");
      }
    },
  },
  {
    name: "AllBook",
    component: AllBook,
    path: "/allbook",
    beforeEnter: () => {
      if (!localStorage.getItem("user-info")) {
        router.push("/login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
