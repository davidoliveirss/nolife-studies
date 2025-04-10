import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Página Inicial' }
    },
    {
      path: '/pesquisa',
      name: 'pesquisa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PesquisaView.vue'),
      meta: { title: 'Página Inicial' }
    },
    {
      path: '/aluno/:id',
      name: 'aluno',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AlunoView.vue'),
      meta: { title: 'Página Inicial' }
    },
  ],
})

export default router
