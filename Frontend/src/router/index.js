// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import LoginView from "../views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
const routes = [

  {
    path: '/login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAuthenticated']) {
        next('/dashboard'); // Redirige si el usuario ya está autenticado
      } else {
        next(); // Permite el acceso a la ruta de login si no está autenticado
      }
    },
  },
  {
    path: '/register',
    component: RegisterView,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAuthenticated']) {
        next('/dashboard'); // Redirige si el usuario ya está autenticado
      } else {
        next(); // Permite el acceso a la ruta de login si no está autenticado
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Este guard global podría manejar las redirecciones de rutas que requieren autenticación
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters['auth/isAuthenticated']) {
      next('/login'); // Redirige a login si no está autenticado
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;