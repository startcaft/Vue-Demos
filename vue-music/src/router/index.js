import Vue from 'vue'
import Router from 'vue-router'
import MyMusic from '../components/findmusic/findmusic.vue'
import FindMusic from '../components/findmusic/findmusic.vue'
import Findrecommend from '../components/findrecommend/findrecommend.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mymusic'
    },
    // 顶部菜单的第一页，相当于首页
    // {
    //   path : '/mymusic',
    //   component : MyMusic
    // },
    // 顶部菜单的第二个，里面还有子路由
    {
      path : '/findmusic',
      component : FindMusic,
      children:[
        // 个性推荐
        {
          path : '',
          redirect : '/findmusic/findrecommend'
        },
        {
          path : '/findmusic/findrecommend',
          component : Findrecommend
        }
      ]
    }
  ]
})
