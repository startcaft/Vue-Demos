<template>
    <header class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
        <!--左边返回导航-->
        <div class="m-header-button is-left">
            <slot name="left"></slot>
        </div>

        <!--中间APP名称-->
        <h1 class="m-header-title" v-text="title"></h1>

        <!--右边分享按钮-->
        <div class="m-header-button is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<style lang="less">
    /*导入颜色变量*/
    @import "../less/var.less";

    .m-header {
        display: flex;
        align-items: center;//垂直居中
        height: 44px;
        padding: 0 10px;
        background: #fff;
        color: @headerDefaultColor;
        border-bottom: 1px solid #eee;
        //导航按钮
        .m-header-button {
            width: 70px;
            align-items: stretch;
            &.is-left {
                text-align: left;
            }
            &.is-right {
                text-align: right;
            }
            .m-icon-img {
                width: 20px;
                height: 20px;
            }
        }
        a {
            color: @headerDefaultColor;
        }
        //中间件文本，自适应
        .m-header-title {
            flex: 1;
            text-align: center;
            font-size: 16px;
            text-overflow: ellipsis;//文本过长则显示...
        }
        //如果为背景，则文字都变成白色
        &.is-bg {
            background:@headerBg;
            color: #fff;
            a {
                color: #fff;
            }
            .m-header-title{
                color: #fff;
            }
        }
        &.is_fixed {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 9;
        }
    }
</style>

<script>
    /**
     * m-header
     * @description 顶部栏
     * @param title - 顶部栏中间的文字
     * @param bg - 是否显示背景色
     * @param fixed - 是否固定在顶部
     * 
     * @example
     * <m-header :title="豆瓣app" :bg="true" :fixed="true">
     *      <a href="javascript:;" slot="left">
     *           <img class="m-icon-img" src="../assets/images/ic_bar_back_white.png">
     *           返回
     *      </a>
     *      <a href="javascript:;" slot="right">分享</a>
     * </m-header>
     */
    export default {
        props:{
            title:{
                type:String,
                default:''
            },
            bg:{
                type:Boolean,
                default:false
            },
            fixed:{
                type:Boolean,
                default:false
            }
        }
    }
</script>


