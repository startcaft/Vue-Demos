<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /*导入重置样式文件*/
  @import '../src/assets/css/app.css';
</style>
