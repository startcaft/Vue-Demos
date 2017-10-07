<template>
    <div class="mask" v-show="show">
        <div class="loading">
            <i class="iconfont icon-loading"></i>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import "../styles/loading.less";
</style>

<script>
    export default {
        props:{
            show:{
                type:Boolean,
                default:false
            }
        }
    }
</script>


