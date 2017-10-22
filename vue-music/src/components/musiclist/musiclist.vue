<template>
    <div class="musiclist">
        <transition name="sideup">
            <div class="content" v-show="isShowMusicList">
                <div class="title">
                    <div class="play-type" @click.stop="setPlayType">
                        <i class="iconfont" :class="musicPlayType"></i>
                        <span>{{ typeName }}({{ musiclist.length }})</span>
                    </div>
                    <div class="right">
                        <div class="collect">
                            <i class="iconfont icon-shoucang"></i>
                            <span>收藏</span>
                        </div>
                    </div>
                    <div class="border-1px"></div>
                </div>
                <ul class="container" ref="musiclistContent">
                    <li class="list" v-for="(item, index) in musiclist" :data-index="index" :class="index === getCurrentIndex ? 'active' : ''" @click.stop="playIndex(index)">
                        <div class="border-1px"></div>
                        <i class="playingicon iconfont icon-shengyin" v-show="index === getCurrentIndex"></i>
                        <span class="name">{{item.name}}</span>
                        <span class="singer"> - {{item.singer}}</span>
                        <i class="close"></i>
                        <div class="border-1px"></div>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade">
			<div class="mask" v-show="isShowMusicList" @click.stop="hideMusicList" @touchmove.prevent>
			</div>
		</transition>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/global.less';
    .musiclist {
        .content {
            position:fixed;
			height:314px;
			background:#fff;
			bottom:0;
			left:0;
			right:0;
			z-index:22;
            &.sideUp-enter-to,&.sideUp-leave-to {
                transition: transform 0.3s
            }
			&.sideUp-enter,&.sideUp-leave-to {
                transform:translate3d(0,100%,0);
            }
            .title {
                width:100%;
				position:relative;
				height:50px;
				font-size:0;
                .play-type,.collect {
                    display:inline-block;
					width:auto;
					height:100%;
					line-height:50px;
                    padding:0 15px;
                    &:active{
                        background:@list_active;
                    }
                }
                .play-type {
                    height:100%;
                    position: relative;
                    i {
                        color:#666;
						font-size:18px;
						display:inline-block;
						width:20px;
						height:20px;
                        vertical-align:middle;
                        position: absolute;
                        left: 20;
                        top: 0;
                    }
                    span {
                        color:#666;
						vertical-align:middle;
						font-size:14px;
                        font-weight:300;
                        margin-left: 20px;
                    }
                }
                .right {
                    float:right;
					height:100%;
					line-height:50px;
                    .collect,delete {
                        font-size:12px;
						color:#666;
                        i {
                            font-size:18px;
							vertical-align:middle;
                        }
                        span {
                            vertical-align:middle;
							font-size:14px;
							font-weight:300;
                        }
                    }
                }
                .border-1px {
                    border-top: 1px solid #eee;
                }
            }
            .container {
                height:264px;
				margin:0;
				padding:0;
				overflow:scroll;
				-webkit-overflow-scrolling:touch;
				box-sizing:border-box;
				padding: 6px 0;
                .list {
                    margin:0;
					padding:0;
					list-style:none;
					height:42px;
					line-height:42px;
					padding:0 15px;
					font-weight:400;
					font-size:14px;
					color:#666;
					overflow:hidden;
                    .border-1px {
                        border-top: 1px solid #eee;
                    }
                    &:active {
                        background:@list_active;
                    }
                    .playingicon {
                        font-size: 14px;
						vertical-align: middle;
						color:@primarycolor;
                    }
                }
            }
        }
        .mask {
            position:fixed;
			top:0;
			left:0;
			bottom:0;
			right:0;
			z-index:21;
			opacity:1;
            background:@maskBackground;
            &.fade-enter-to,&.fade-leave-to {
                transition: opacity 0.3s;
            }
			&.fade-enter,&.fade-leave-to {
                opacity:0;
            }
        }
    }
</style>

<script>
    export default {
        data(){
            return {
                typeName : ''
            }
        },
        methods:{
            hideMusicList(){
                this.$store.dispatch({
                    type:'musiclist/hideMusicList'
                })
            },
            playIndex (index) {
				this.$store.dispatch({
					type: 'audioInfo/play_Index',
					index: index
				})
				this.$store.dispatch({
					type: 'musiclist/hideMusicList'
				})
			},
            //播放模式切换
            setPlayType(){
                this.$store.dispatch('audioInfo/set_PlayType');
            }
        },
        computed:{
            //getIsShowMusicList在musiclist.js中，在bottom-bar组建中切换状态
            isShowMusicList(){
                return this.$store.getters['musiclist/getIsShowMusicList'];
            },
            //播放列表
            musiclist () {
				return this.$store.getters['audioInfo/getMusicList'];
            },
            getCurrentIndex () {
				return this.$store.getters['audioInfo/getCurrentIndex'];
            },
            getScrollTop () {
				return this.$store.getters['musiclist/getScrollTop'];
			},
            musicPlayType(){
                let playType = this.$store.getters['audioInfo/getMusicPlayType'] ? 
                                    this.$store.getters['audioInfo/getMusicPlayType'] : -1;
                let className = '';
                switch(playType){
                    case 1:
                        className = 'icon-icon-';
                        this.typeName = '列表循环';
                        break;
                    case 2:
                        className = 'icon-danquxunhuan';
                        this.typeName = '单曲循环';
                        break;
                    case 3:
                        className = 'icon-bofangye-caozuolan-suijibofang';
                        this.typeName = '随机播放';
                        break;
                    default:
                        className = '';
                }
                return className;
            }
        },
        mounted(){
            //记录 歌曲列表的ul元素的scrollTop值，在于隐藏和现实歌曲列表是永远保持在上一次的滚动的地方。
            this.$store.dispatch({
                type: 'musiclist/set_RefScrollMusicList',
				refs: this.$refs.musiclistContent
            })
        }
    }
</script>


