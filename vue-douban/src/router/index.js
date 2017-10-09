import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Topic from '@/pages/Topic'
import Message from '../pages/Message.vue'

Vue.use(Router)

export default new Router({
  // mode : 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'index'}
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic
    },
    {
      path: '/message',
      name: 'message',
      component: Message
      // meta: { requiresAuth: true }
    }
  ]
})
