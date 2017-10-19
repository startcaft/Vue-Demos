<template>
    <div class="bottom-bar" @click="showMusicDetail">
        <div class="music-info">
            <img class="music-pic" :src="musicImage" alt="">
            <div class="music-detail">
				<p class="music-name" v-if="musicName">{{musicName}}</p>
				<p class="music-singer" v-if="musicSinger">{{musicSinger}}</p>
			</div>
        </div>

        <div class="playpause" @click.stop="playpause">
			<i class="iconfont" :class="iconPlayPause?'icon-pause':'icon-play'"></i>
		</div>
        <i class="music-list iconfont icon-icon_list_line" @click.stop="showMusicList"></i>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/global.less';
    .bottom-bar {
        position: fixed;
        z-index: 9;
        background: #fff;
        height: 46px;
        padding: 5px;
        box-sizing: border-box;
        bottom:0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content:space-around;
        .music-info {
            position:relative;
			flex:1 1 auto;
			height:100%;
			display:flex;
            .music-pic {
                flex:0 0 36px;
				width:36px;
				height:36px;
            }
            .music-detail {
                flex:1 1 auto;
				padding: 0 5px;
				display:flex;
				flex-direction:column;
                justify-content:space-around;
                @media screen and (max-width:414px) {
                    p {
                        max-width: 250px;
                    }
                }
                @media screen and (max-width:375px) {
                    p {
                        max-width: 210px;
                    }
                }
                @media screen and (max-width:320px) {
                    p {
                        max-width: 160px;
                    }
                }
                @media screen and (max-width:768px) {
                    p {
                        max-width: 580px;
                    }
                }
                p {
                    width:100%;
					margin:0;
					// text-overflow:ellipsis;
					// white-space:nowrap;
					// overflow:hidden;
                    &.music-name {
                        font-size:14px;
                        line-height: 14px;
						font-weight:400;
						color:#333;
						padding:2px 0;
                    }
                    &.music-singer {
                        color:#aaa;
                        font-size:10px;
                        line-height: 10px;
						font-weight:400;
						padding:2px 0;
                    }
                }
            }
        }
        .playpause {
            margin-top: 5px;
            border:2px solid #999;
			border-radius:50%;
			width:24px;
			height:24px;
            position:relative;
            &:active{
                background:@list_active
            }
            i {
                display:block;
				position:absolute;
				top:50%;
				left:55%;
				transform:translate3d(-50%,-50%,0);
				width:22px;
				font-size:14px;
				color:#333;
                text-align:center;
                &.icon-pause {
                    left:50%;
					font-size:18px;
					color:@primarycolor;
                }
            }
        }
        .music-list {
            margin-left:10px;
			display:block;
			flex:0 0 36px;
			width:36px;
			height:100%;
			line-height:36px;
			text-align:center;
			font-size:26px;
			color:#999;
			&:active{
                background:@list_active
            }
        }
    }
</style>


<script>
    export default {
        data(){
            return {
				audioInfo: {
				},
				myaudio: {},
				state: {
					isplaying: false,
					loading: false,
					currentIndex: 0
				}
			}
        },
        mounted () {
            // console.log(this.$store.state.audioInfo);
            // console.log(this.$store.state.audioInfo.playing);
			// 所有的audio模块的 vuex 的状态信息
			this.audioInfo = this.$store.state.audioInfo
			// 音乐是否play
            this.state.isplaying = this.audioInfo.playing
            
		},
        computed:{
            iconPlayPause () {
				return this.audioInfo.playing
			},
            // 获取音乐封面地址
            musicImage(){
                return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.img_url : ''
            },
            // 获取歌手名称
            musicSinger(){
                return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.singer : ''
            },
            // 获取音乐名称
			musicName () {
				return this.$store.getters.getCurrentMusic ? this.$store.getters.getCurrentMusic.name : ''
			}
        },
        methods:{
            //控制播放器的播放和暂停
            playpause(){
                this.$store.commit('togglePlay');
            },
            //显示音乐详细，只是改变store模块中audio中的是否显示状态
            showMusicDetail(){
                this.$store.dispatch({
					type: 'set_MusicDetail',
					isShow: true
				})
            },
            //显示播放列表，只是改变store模块中musiclist的isShow状态
            showMusicList(){
                let scrollTop = (this.$store.getters.getCurrentIndex + 1 - 3) * 42;
                console.log(scrollTop);
                this.$store.dispatch({
                    type: 'set_ScrollTop',
					scrollTop: scrollTop
                })
                this.$store.dispatch('showMusicList');
            }
        }
    }
</script>

