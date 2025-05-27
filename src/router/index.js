import { createRouter, createWebHistory } from 'vue-router'
import Sobre from '../views/Sobre.vue'
import HomeView from '../views/HomeView.vue'
import Contato from '../views/Contato.vue'

const routes = [
  { path: '/', 
    name: 'Home', component: HomeView },
  { path: '/sobre', 
    name: 'Sobre', component: Sobre },
  { path: '/contato', 
    name: 'Contato', component: Contato }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router