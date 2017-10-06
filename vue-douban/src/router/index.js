import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'index'}
    },
     {
       path: '/',
       name: 'index',
       component: Index
     }
  ]
})
