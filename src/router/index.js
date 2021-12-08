import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/auth/Login.vue';
import RegisterUser from '../views/auth/Register.vue';
import UpdateUser from '../views/users/EditUser.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth:true, title: "HOME" },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { auth:false, title: "Login" },
  },
  {
    path: '/register',
    name: 'registerUser',
    component: RegisterUser,
    meta: { auth:false, title: "Registro Usuário" },
  },
  {
    path: '/usuario/update',
    name: 'updateuser',
    component: UpdateUser,
    meta: { auth:true, title: "Atualizar senha do Usuário" },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
