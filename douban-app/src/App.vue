<template>
  <div id="app">
    <router-view/>
    <!--
          v-mode绑定的属性值将传递到子组件定义的value属性上
          
          v-bind:value="select"
          v-on:input="select = $event.target.value"
      -->
      <m-tabbar v-model="select">
          <!--以下的内容分发给m-tabbar组件的默认slot-->
          <m-tabbar-item id="Index" isRouter>
              <!--分发给m-tabbar-item组件的具名为icon-normal和icon-active的slot-->
              <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
              <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
              首页
          </m-tabbar-item>
          <m-tabbar-item id="AudioBook" isRouter>
              <!--分发给m-tabbar-item组件的具名为icon-normal和icon-active的slot-->
              <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
              <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
              书影音
          </m-tabbar-item>
          <m-tabbar-item id="BroadCast" isRouter>
              <!--分发给m-tabbar-item组件的具名为icon-normal和icon-active的slot-->
              <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
              <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
              广播
          </m-tabbar-item>
          <m-tabbar-item id="Group" isRouter>
              <!--分发给m-tabbar-item组件的具名为icon-normal和icon-active的slot-->
              <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
              <img src="./assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
              小组
          </m-tabbar-item>
          <m-tabbar-item id="Mine" isRouter>
              <!--分发给m-tabbar-item组件的具名为icon-normal和icon-active的slot-->
              <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
              <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
              我的
          </m-tabbar-item>
      </m-tabbar> 
  </div>
</template>

<script>
    import Tabbar from './components/tabbar.vue'
    import TabbarItem from './components/tabber-item.vue'
    export default {
      name: 'app',
      components : {
          'm-tabbar' : Tabbar,
          'm-tabbar-item' : TabbarItem,
      },
      data(){
          return {
              select : 'Index'
          }
      }
    }
</script>

<style>
</style>
