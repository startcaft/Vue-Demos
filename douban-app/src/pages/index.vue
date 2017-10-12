<template>
    <div>
        <m-header title="豆瓣app" :bg="true">
            <a href="javascript:;" slot="left">
                <img class="m-icon-img" src="../assets/images/ic_bar_back_white.png">
                返回
            </a>
            <a href="javascript:;" slot="right">分享</a>
        </m-header>
    </div>
</template>

<script>
    import Header from '../components/header.vue'

    export default {
        components : {
            'm-header' : Header
        }
    }
</script>


<style lang="less">
</style>

