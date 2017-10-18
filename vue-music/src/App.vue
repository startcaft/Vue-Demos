<template>
  <div id="app">
    <!--头部-->
    <v-header :index="2"></v-header>
    <!--侧边栏-->
    <v-side :info="info"></v-side>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import sidebar from './components/sidebar/sidebar.vue'
  import store from './store/index.js'
  import axios from 'axios'

  export default {
    data(){
      return {
        info:{}
      }
    },
    store : store,
    components:{
      "v-header" : header,
      'v-side' : sidebar
    },
    methods:{

    },
    created(){
      let localApi = 'static/data.json';
      axios.get(localApi).then((res) => {
        //用户信息
        this.info = res.data.user;
        console.log(this.info);
      })
    }
  }
</script>

<style lang="less">
  @import './assets/less/global.less';
  @import './assets/less/index.less';

  body,html {
    margin:0;
    padding:0;
    box-sizing:border-box;
    background:#f0f0f0f0;
    user-select:none;
    -webkit-tap-highlight-color: transparent;
  }

  #app  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50
  }
</style>
