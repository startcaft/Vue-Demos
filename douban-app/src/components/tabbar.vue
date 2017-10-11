<template>
    <!--底部导航栏容器组件-->
    <div class="m-tabbar">
        <!--默认的内容分发-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        //接收父组件传递的value
        props:['value']
    }
</script>


<style lang="less">
    .m-tabbar {
        display: flex;
        flex-direction: row;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        overflow: hidden;
        height: 50px;
        background: #fff;
        border-top: 1px solid #e4e4e4;
    }
</style>

