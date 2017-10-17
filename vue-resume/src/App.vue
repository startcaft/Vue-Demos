<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  body{line-height:auto;background-color:#fff;}
  #app{background-color:#fff;}
  //容器居中,最大1280px宽度
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>

