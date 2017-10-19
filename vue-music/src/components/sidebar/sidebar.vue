<template>
    <!--侧边栏-->
    <div class="sidebar">
        <!--遮罩层，覆盖整个页面-->
        <transition name="fade" touchmove.stop.prevent>
            <div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
        </transition>

        <!--菜单-->
        <transition name="side">
            <div class="menu-content" v-show="isReallShow">
                <!--用户信息-->
                <div class="menu-detail">
                    <div class="menu_userInfo" :style="{ backgroundImage: 'url(' + info.bg + ')',backgroundSize: 'cover' }">
                        <img class="avatar" :src="info.avatar" width="56" height="56">
                        <div class="user-detail">
                            <span class="name">{{info.name}}</span>
                            <img class="isvip" src="../../assets/images/vip.png" alt="">
                            <span class="progress">Lv.{{info.grade}}</span>
                        </div>
                        <span class="sign" @click="signClick">
                            <i v-show="showIcon" class="iconfont icon-qianbi"></i>
                            {{sign}}
                        </span>
                    </div>
                </div>

                <!--栏目条目-->
                <div class="content">
                    <side-list iconclass="iconfont icon-xiaoxi" sidetitle="我的消息" disc=""></side-list>
                    <side-list iconclass="iconfont icon-huiyuan" sidetitle="我的会员" disc="2018.05.10到期"></side-list>
                    <side-list iconclass="iconfont icon-unie638" sidetitle="商城" ></side-list>
                    <side-split background="#f0f0f0" height="5" border="#eee"></side-split>
                    <side-list iconclass="iconfont icon-haoyou" sidetitle="我的好友" ></side-list>
					<side-list iconclass="iconfont icon-location" sidetitle="附近的人"></side-list>
					<side-split background="#f0f0f0" height="5" border="#eee"></side-split>
					<side-list iconclass="iconfont icon-clothes-copy" sidetitle="个性换肤" disc="官方红"></side-list>
					<side-list iconclass="iconfont icon-dingshi" sidetitle="定时播放"></side-list>
					<side-list iconclass="iconfont icon-naozhong" sidetitle="音乐闹钟"></side-list>
					<side-list iconclass="iconfont icon-jinlingyingcaiicon12" sidetitle="驾驶模式"></side-list>
					<side-list iconclass="iconfont icon-yun1" sidetitle="音乐云盘"></side-list>
                </div>

                <!--底部-->
                <div class="bottom-footer">
					<!-- <div class="nightmode">
						<i class="iconfont icon-yejianmoshi"></i>
						<span>夜间模式</span>
					</div>
					<div class="setting">
						<i class="iconfont icon-shezhi"></i>
						<span>设置</span>
					</div>
					<div class="exit">
						<i class="iconfont icon-tuichu0808"></i>
						<span>退出</span>
					</div> -->
				</div>
            </div>
        </transition>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/global.less';

    .sidebar {
        //半透明遮罩层
        .menu-mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            z-index: 10;
            background: rgba(0, 0, 0, 0.5);
            transform: translateZ(0);
            //进入，和离开的透明度的渐变效果
            &.fade-enter-to,&.fade-leave-to {
                transition: opacity 0.3s;
            }
            &.fade-enter,&.fade-leave-to {
                opacity: 0;
            }
        }
        //菜单层
        .menu-content {
            position:fixed;
			width:286px;
			height:100%	;
			top:0;
			left:0;
			bottom:0;
			z-index:11;
			overflow-y:auto;
			background:#fff;
            -webkit-overflow-scrolling:touch;
            //进入，和离开的移入/移除效果
            &.side-enter-to, &.side-leave-to {
                transition: transform 0.3s
            }
			&.side-enter, &.side-leave-to {
                transform:translate3d(-286px,0,0)
            }
            .menu-detail {
                .menu_userInfo {
                    box-sizing: border-box;
                    width: 100%;
                    height:168px;
                    position: relative;
                    padding: 50px 15px 15px 15px;
                    //圆形图片
                    .avatar {
                        position: absolute;
                        bottom: 50px;
                        left: 15px;
                        border-radius: 50%
                    }
                    .user-detail {
                        position: absolute;
                        bottom:20px;
                        left:15px;
                        font-size:0;
                        .name {
                            display: inline-block;
                            font-size:16px;
                            line-height: 16px;
                            font-weight:500;
                            color:#fff;
                            vertical-align:middle;
                            max-width:130px;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                            overflow:hidden;
                        }
                        .isvip {
                            width:14px;
                            height:14px;
                            vertical-align:middle;
                            margin-left:6px;
                        }
                        .progress {
                            font-size:8px;
                            padding:1px 4px;
                            border-radius:8px;
                            color:#fff;
                            font-weight:400;
                            border:1px solid #fff;
                            margin-left:6px;
                            vertical-align:middle;
                        }
                    }
                    .sign {
                        display:inline-block;
                        height:14px;
                        line-height:14px;
                        position:absolute;
                        bottom:15px;
                        font-size:12px;
                        right:15px;
                        padding:4px 8px;
                        border:1px solid #e1e1e1;
                        border-radius:12px;
                        color:#fff;
                        &.active {
                            background: @rgba_active
                        }
                        i {
                            height:14px;
						    margin-right:5px;
						    vertical-align:top;
                        }
                    }
                }
                .content {
                    background:#fff;
				    display:block;
				    padding-bottom:40px;
                }
            }
        }
    }

    .sidebar .menu-content .bottom-footer {
        position:fixed;
        transform:translateZ(0);
        bottom:0;
        height:40px;
        width:286px;
        font-size:0;
        background:#fff;
        border-top: 1px solid #eee;
        display: flex;
    }
</style>

<script>
    import {mapGetters} from 'vuex'
    import sidelist from '../sidelist/sidelist.vue'
    import split from '../split/split.vue'

    export default {
        props:{
            info:{      //用户信息
                type:Object
            }
        },
        data(){
            return {
                sign : '签到',
                showIcon : true,
                userInfo : ''
            }
        },
        components:{
            'side-list' : sidelist,
            'side-split' : split
        },
        methods:{
            hideMenu(){
                this.$store.dispatch({
                    type : 'hideSideBar'
                })
            },
            signClick(){
                this.sign = '已签到';
                this.showIcon = false;
            }
        },
        computed:{
            isReallShow : function(){
                //模块内部的 action、mutation、和 getter 现在仍然注册在全局命名空间——这样保证了多个模块能够响应同一 mutation 或 action。
                return this.$store.getters.isShowMethod
            }
        }
    }
</script>

