<template>
    <!--导航项组件-->
    <div class="m-tabbar-item">
        <a>
            <span class="m-tabbar-item-icon">
                <!--具名slot，分发图片-->
                <slot name="icon-normal"></slot>
            </span>
            <span class="m-tabbar-item-text">
                <!--默认slot，分发文本-->
                <slot></slot>
            </span>
        </a>
    </div>
</template>

<style lang="less">
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
</style>

