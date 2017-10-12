import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index.vue'
import AudioBook from '../pages/audioBook.vue'
import BroadCast from '../pages/broadCast.vue'
import Group from '../pages/group.vue'
import Mine from '../pages/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/broadCast',
      name: 'BroadCast',
      component: BroadCast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
