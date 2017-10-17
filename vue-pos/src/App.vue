<template>
  <div id="app">
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Footer from './components/commons/footer.vue'

  export default {
    name: 'app',
    components:{
      'my-footer' : Footer
    }
  }
</script>

<style lang="less">
</style>


