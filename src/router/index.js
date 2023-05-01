import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/work',
    name: 'contact',
    component: () => import('../views/WorkView.vue')
  },
  {
    path: '/about',
    name: 'abospecialityut',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/prigorods',
    name: 'prigorods',
    component: () => import('../views/prigorod/PrigorodsView.vue')
  },
  {
    path: '/prigorods/add',
    name: 'prigorodsAdd',
    component: () => import('../views/prigorod/PrigorodsCreateView.vue')
  },
  {
    path: '/prigorods/:id',
    name: 'prigorodsGetId',
    component: () => import('../views/prigorod/PrigorodsShowView.vue')
  },
  {
    path: '/prigorods/edit/:id',
    name: 'prigorodsEditId',
    component: () => import('../views/prigorod/PrigorodsEditView.vue')
  },
  {
    path: '/mezgorods',
    name: 'mezgorods',
    component: () => import('../views/mezgorod/MezgorodsView.vue')
  },
  {
    path: '/mezgorods/add',
    name: 'mezgorodsAdd',
    component: () => import('../views/mezgorod/MezgorodsCreateView.vue')
  },
  {
    path: '/mezgorods/:id',
    name: 'mezgorodsGetId',
    component: () => import('../views/mezgorod/MezgorodsShowView.vue')
  },
  {
    path: '/mezgorods/edit/:id',
    name: 'mezgorodsEditId',
    component: () => import('../views/mezgorod/MezgorodsEditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
