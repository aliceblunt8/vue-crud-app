import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/views/Users'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Users,
    },
    {
      path: '/users',
      component: () => import('./views/Users.vue'),
    }
  ]
})