import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../components/pagina-inicial/Index')
  },
   
  {
    path: '/colaboradores',
    name: 'Lista de colaboradores',
    component: () => import('../components/dashboard-admin/Colaboradores.vue')
  },
  {
    path: '/clientes',
    name: 'Lista de usuarios',
    component: () => import('../components/dashboard-admin/Clientes.vue')
  },
  {
    path: '/despesas',
    name: 'Lista de despesas',
    component: () => import('../components/dashboard-admin/Despesas.vue')
  },
  {
    path: '/encomendas',
    name: 'Lista de encomendas',
    component: () => import('../components/dashboard-admin/Encomendas.vue')
  },
  {
    path: '/produtos',
    name: 'Lista de protudos',
    component: () => import('../components/dashboard-admin/Produtos.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

