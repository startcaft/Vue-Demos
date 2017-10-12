<template>
    <!--导航项组件-->
    <div class="m-tabbar-item" :class="{'is-active':isActive}" @click="goToRouter">
        <a>
            <span class="m-tabbar-item-icon" v-show="!isActive">
                <!--具名slot，分发默认图片-->
                <slot name="icon-normal"></slot>
            </span>
            <span class="m-tabbar-item-icon" v-show="isActive">
                <!--具名slot，分发选中图片-->
                <slot name="icon-active"></slot>
            </span>
            <span class="m-tabbar-item-text">
                <!--默认slot，分发文本-->
                <slot></slot>
            </span>
        </a>
    </div>
</template>

<script>
    /**
     * m-tabbar-item 
     * @description 搭配 m-tabbar 使用
     * @param id - 选中后的返回值，任意类型
     * @param isActive - 根据父组件的value和当前id判断是否为选中状态
     * @param $parent.$emit('input',id) - 触发父组件的自定义事件
     * @param {slot} [icon-normal] - icon默认图标
     * @param {slot} [icon-active] - icon选中图标
     * @param {slot} - 文字
     * 
     * @example
     * <m-tabber-item id="tab1">
     *     <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
     *     <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
     * </m-tabber-item>
     */
    export default {
        props:{
            id:{
                type:String
            },
            isRouter:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            isActive:function(){
                if(this.$parent.value === this.id){
                    return true;
                }
            }
        },
        methods:{
            goToRouter:function(){
                this.$parent.$emit('input',this.id);//触发主页面的input属性，更新id值
                //判断是否为路由跳转
                if(this.isRouter){
                    //根据id跳转到对应的路由页面
                    this.$router.push(this.id);
                }
                
            }
        }
    }
</script>


<style lang="less">
    @import '../less/var.less';

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
                color: @tabbarActiveColor;
            }
        }
    }
</style>

