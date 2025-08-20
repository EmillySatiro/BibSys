import { createRouter, createWebHistory } from 'vue-router'
import Login from './login.vue'
import Cadastro from './Cadastro_usuario.vue'
import Home from './Home.vue'
import Cadastrarlivro from './Cadastrarlivro.vue'
import Editarlivro from './Editarlivro.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastrarlivro',
    name: 'CadastrarLivro',
    component: Cadastrarlivro
  },
  {
    path: '/editarlivro',
    name: 'EditarLivro',
    component: Editarlivro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
