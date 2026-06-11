import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../views/Accueil.vue';
import Articles from '../views/Articles.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/articles', component: Articles },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
