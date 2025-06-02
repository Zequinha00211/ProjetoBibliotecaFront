import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/auth/Login';
import autor from './routers/autor';
import livro from './routers/livro';
import usuarios from './routers/usuarios';

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
  ...autor,
  ...livro,
  ...usuarios
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    { path: '*', component: () => import('@/views/Page404') }
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userGroup = localStorage.getItem('userGroup');

  if (to.path === '/login' && token) {
    next({ path: '/' });
  } else if (to.path !== '/login' && !token) {
    next({ path: '/login' });
  } else if (to.meta.adminOnly && userGroup !== 'admin') {
    next('/');
  }
  else {
    next();
  }
});


export default router
