import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/auth/Login';
import routerCompany from "./routers/company";
import routerUsers from './routers/users'
import routerEsocial from "./routers/esocial";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { auth: true, title: "HOME" },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { auth: false, title: "Login" },
  },
  ...routerCompany,
  ...routerUsers,
  ...routerEsocial
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    { path: '*', component: () => import('@/views/Page404') }
  ],
})

export default router
