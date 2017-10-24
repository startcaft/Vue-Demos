<template>
    <div class="songlists">
        <div class="songlist" v-if="getSongSheet.info" 
                    v-for="(item, index) in getSongSheet.info" 
                    @click="playIndex(index)">
            <div class="warpper">
                <div class="listIndex">
                    <span v-show="!showVolume || getCurrentIndex !== index" class="index">{{index + 1}}</span>
                    <i v-show="showVolume && getCurrentIndex === index" class="iconIndex iconfont icon-shengyin"></i>
                </div>
                <div class="songInfo">
                    <div class="detail">
						<p class="name">{{item.name}}</p>
						<p class="singer">{{item.singer}}</p>
					</div>
                </div>
            </div>
            <i class="rightSetting iconfont icon-more" @click.stop="showmenu(item.name)"></i>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            playIndex (index) {
				if (index === this.$store.getters['audioInfo/getCurrentIndex'] && this.$store.getters['audioInfo/getMusicSheetList'].type === this.$store.getters['audioInfo/getMusiSheetType']) {
					return
				}
				this.$store.commit({
					type: 'audioInfo/setMusiSheetType',
					sheettype: this.$store.getters['audioInfo/getMusicSheetList'].type
				})
				this.$store.commit({
					type: 'audioInfo/setMusicList',
					list: this.$store.getters['audioInfo/getMusicSheetList'].info
				})
				this.$store.commit({
					type: 'audioInfo/playIndex',
					index: index
				})
			},
            showmenu(name) {
                this.$store.dispatch({
                    type : 'menulist/showMenuList',
                    amount : {
                        title: name,
						content: [
							{
								name: '删除',
								iconinfo: 'iconfont icon-delete',
								count: 'none',
								bgcolor: '#fff'
							}
						]
                    }
                });
            }
        },
        computed: {
            getSongSheet(){
                return this.$store.getters['audioInfo/getMusicSheetList'] 
                    ? this.$store.getters['audioInfo/getMusicSheetList'] 
                    : '';
            },
            showVolume(){
                let sheetType = this.$store.getters['audioInfo/getMusiSheetType'];
                let thisSheetType = this.$store.getters['audioInfo/getMusicSheetList'].type;
                if (sheetType === thisSheetType) {
					return true
				} else {
					return false
				}
            },
            getCurrentIndex () {
				return this.$store.getters['audioInfo/getCurrentIndex']
			}
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/global.less';

    .songlists {
        padding-bottom:46px;
        .songlist {
            height:54px;
			position:relative;
            .warpper {
                display:flex;
				height:54px;
				position:absolute;
				top:0;
				left:0;
				right:0;
                bottom:0;
                &:active{
                    background:@list_active;
                }
                .listIndex {
                    width:54px;
					height:54px;
					flex: 0 0 54px;
					font-size:0;
                    .index {
                        display:inline-block;
						font-size:16px;
						font-weight:500;
						color:#BABABA;
						width:54px;
						height:54px;
						line-height:54px;
						text-align:center;
                    }
                    .iconIndex {
                        display:inline-block;
						font-size:14px;
						color:@primarycolor;
						width:54px;
						height:54px;
						line-height:54px;
						text-align:center;
                    }
                }
                .songInfo {
                    flex:1 1 auto;
					height:54px;
					max-width: calc(~"100% - 54px");
					box-sizing:border-box;
                    .detail {
                        width:auto;
						max-width: calc(~"100% - 54px");
						height:100%;
						display:flex;
						padding:5px;
						box-sizing:border-box;
						flex-direction: column;
						justify-content: space-around;
                        p {
                            margin: 0;
							width: 100%;;
							text-overflow: ellipsis;
							overflow: hidden;
                            white-space: nowrap;
                            &.name {
                                font-size:14px;
                                line-height: 14px;
								color:#333;
								padding: 2px 0;
								font-weight:400;
                            }
                            &.singer {
                                font-size:10px;
                                line-height: 10px;
								color:#aaa;
								padding: 2px 0;
								font-weight:400;
                            }
                        }
                    }
                    .border-1px {
                        position: relative;
                        &::after {
                            display: block;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            border-top: 1px solid #848484;
                            content: ' ';
                        }
                    }
                }
            }
            .rightSetting {
                position:absolute;
				right:0;
				top:0;
				width:54px;
				height:54px;
				line-height:54px;
				font-size:14px;
				text-align:center;
				color:#aaa;
				&:active {
                    background:@list_active
                }
            }
        }
    }
</style>


