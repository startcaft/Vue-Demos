<template>
    <div class="m-tabbar">
        <a class="m-tabbar-item is-active">
            <span class="m-tabbar-item-icon">
                <img src="../assets/images/ic_tab_home_normal.png" alt="">
            </span>
            <span class="m-tabbar-item-text">
                首页
            </span>
        </a>
        <a class="m-tabbar-item">
            <span class="m-tabbar-item-icon">
                <img src="../assets/images/ic_tab_subject_normal.png" alt="">
            </span>
            <span class="m-tabbar-item-text">
                书影音
            </span>
        </a>
        <a class="m-tabbar-item">
            <span class="m-tabbar-item-icon">
                <img src="../assets/images/ic_tab_status_normal.png" alt="">
            </span>
            <span class="m-tabbar-item-text">
                广播
            </span>
        </a>
        <a class="m-tabbar-item">
            <span class="m-tabbar-item-icon">
                <img src="../assets/images/ic_tab_group_normal.png" alt="">
            </span>
            <span class="m-tabbar-item-text">
                小组
            </span>
        </a>
        <a class="m-tabbar-item">
            <span class="m-tabbar-item-icon">
                <img src="../assets/images/ic_tab_profile_normal.png" alt="">
            </span>
            <span class="m-tabbar-item-text">
                我的
            </span>
        </a>
    </div>
</template>

<style lang="less">
    //外层布局为伸缩盒子，横向排列，固定在底部，高度固定50px，有上边框
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
        //每一个导航项，文字水平居中，且自动缩放
        .m-tabbar-item {
            flex: 1;
            text-align: center;
            //图片，转为block，距离顶部2px，图像大小28*28
            .m-tabbar-item-icon {
                display: block;
                padding-top: 2px;
                img {
                    height: 28px;
                    width: 28px;
                }
            }
            //文字
            .m-tabbar-item-text {
                display: block;
                font-size: 10px;
                color: #949494;
            }
            //导航项选中文字变色
            &.is-active {
                .m-tabbar-item-text {
                    color: #42bd56;
                }
            }
        }
    }
</style>

<script>
    export default {
    
    }
</script>




