import { createRouter, createWebHistory } from 'vue-router'
import Login from './login.vue'
import Cadastro from './Cadastro_usuario.vue'
import Home from './Home.vue'
import Cadastrarlivro from './Cadastrarlivro.vue'
import Editarlivro from './Editarlivro.vue'
import Livro from './Livro.vue'
import Listarlivro from './Listarlivro.vue'


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
    path: '/editarlivro/:id',
    name: 'EditarLivro',
    component: Editarlivro,
    props: true
  },
  {
    path: '/livro',
    name: 'Livro',
    component: Livro
  },
  {
  path: '/listarlivro',
  name: 'ListarLivro',
  component: Listarlivro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
