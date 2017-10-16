<template>
    <div class="footer is-fixed">
        <a class="f-item is-active" id="index">
            <i class="icon iconfont icon-goumai"></i>
            <div class="f-item-text">收银</div>
        </a>
        <a class="f-item" id="shop">
            <i class="icon iconfont icon-dianpu"></i>
            <div class="f-item-text">店铺</div>
        </a>
        <a class="f-item" id="objects">
            <i class="icon iconfont icon-hanbao"></i>
            <div class="f-item-text">商品</div>
        </a>
        <a class="f-item" id="settings">
            <i class="icon iconfont icon-gongnengjianyi"></i>
            <div class="f-item-text">设置</div>
        </a>
    </div>
</template>

<script>
    export default {
    }
</script>


<style lang="less" scoped>
    .footer {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        font-size: 10px;
        color: #fff;
        background-color: #1D8CE0;
        text-align: center;
        &.is-fixed{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
        }
        .f-item {
            display: block;
            flex: 1;
            border-right: 1px solid #20a0ff;
            i {
                font-size: 24px;
            }
            div {
                padding-bottom: 2px;
            }
            &.is-active {
                .f-item-text {
                    font-weight: bold;
                }
            }
        }
    }
</style>



