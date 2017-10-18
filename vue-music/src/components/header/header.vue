<template>
    <div class="header">
        <div class="header-wrapper">
            <i class="iconfont icon-menu" @click="showMenu"></i>
            <div class="header-content" @click="hideMenu">
                <router-link tag="i" to="/mymusic">
                    <i class="iconfont icon-music music" :class="selectIndex===0?'active':''"></i>
                </router-link>
                <router-link tag="i" to="/findmusic">
                    <i class="iconfont icon-wangyiyunyinlezizhi"></i>
                </router-link>
                <router-link tag="i" to="/community">
                    <i class="iconfont icon-member"></i>
                </router-link>
            </div>
            <i class="iconfont icon-search"></i>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        //接收的参数
        props:{
            index:{         //图标的索引，用以切换active样式
                type:Number,
                default:0
            }
        },
        data(){
            return {
                selectIndex : this.index
            }
        },
        methods:{
            showMenu(){
                this.$store.dispatch({
                    type : 'showSideBar'
                })
            },
            hideMenu(){
                this.$store.dispatch({
                    type : 'hideSideBar'
                })
            }
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/global.less';
    //头部固定,50px高
    .header {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 50px;
        z-index: 10;
        background: @primarycolor;
        //头部包裹容器，弹性盒子，item垂直居中，水平平均排列
        .header-wrapper {
            height: 100%;
            background: @primarycolor;
            display: flex;
            align-items: center;
            justify-content: space-between;
            //两侧的图标
            .icon-menu,.icon-search {
                color: #fff;
                font-size: 26px;
                padding: 10px 15px;
            }
            //中间的图标
            .header-content {
                i {
                    font-size: 24px;
                    margin: 0 5px;
                    color:#eee;
                    &.router-link-active {
                        i {
                            color: @link_active
                        }
                    }
                    &.active {
                        color: #4AE0A8;
                    }
                    &.music {
                        font-size: 22px;
                    }
                }
            }
        }
    }
</style>

