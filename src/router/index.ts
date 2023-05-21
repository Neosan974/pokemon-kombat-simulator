import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/SimulatorView.vue')
    },
    {
      path: '/simulator',
      name: 'simulator',
      // route level code-splitting
      // this generates a separate chunk (Simulator.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SimulatorView.vue')
    }
  ]
})

export default router
