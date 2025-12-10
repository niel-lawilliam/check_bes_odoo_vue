import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/home.vue';
import zoekArtikelen from '@/pages/zoekArtikelen.vue';

const routes = [
  { path: '/', name: 'Home', component: home },
  { path: '/zoek-artikelen', name: 'ZoekArtikelen', component: zoekArtikelen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
