import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/Users'
import Form from '@/components/Form'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/user',
      component: Form,
    },
    {
      path: '/user/:id',
      component: Form,
      props: true,
    },
    {
      path: '/',
      component: Users,
    },
  ]
})