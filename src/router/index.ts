import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'movie-detail',
      component: () => import('../views/Movie-detail.vue')
    },
    {
      path: '/phim-le',
      name: 'phimLe',
      component: () => import('../views/Phimle.vue')
    },
    {
      path: '/phim-bo',
      name: 'phimBo',
      component: () => import('../views/Phimbo.vue')
    },
    {
      path: '/Cate:id',
      name: 'categoryDetail',
      component: () => import('../views/Category-detail.vue')
    },
  ]
})

export default router
