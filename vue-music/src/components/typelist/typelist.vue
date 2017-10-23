<template>
    <div class="typelist" :style="{background:typelistbg}">
        <i class="info" :class="iconInfo"></i>
        <div class="typelist-detail">
            <span class="name">{{ listName }}</span>
            <span class="count" v-show="showCount">({{ listCount }})</span>
            <p v-if="showBorder" class="border-1px"></p>
            <i v-if="isPlaying" class="isPlaying iconfont icon-shengyin"></i>
        </div>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/global.less';

    .typelist {
        height: 50px;
        position : relative;
        &:active {
            background: @list_active
        }
        .info {
            font-size:20px;
			position:absolute;
			top:50%;
			color:@primarycolor;
			left:15px;
			transform:translate(0,-50%);
        }
        .typelist-detail {
            height:100%;
			line-height:50px;
			margin-left:50px;
			box-sizing:border-box;
			font-size:0;
            .name {
                color:#333;
				font-size:14px;
				margin-right:6px;
				vertical-align:middle;
            }
            .count {
                color:#aaa;
				font-size:10px;
				font-weight:400;
				vertical-align:middle;
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
            .isPlaying {
                font-size:14px;
                position:absolute;
                top:50%;
                color:@primarycolor;
                right:5px;
                width:36px;
                height:36px;
                line-height:36px;
                text-align:center;
                transform:translate(0,-50%);
                &:active {
                    background: @list_active;
                }
            }
        }
    }
</style>


<script>
    /**
     * @param name - 类型名称
     * @param count - 数量
     * @param hasBorder - 是否有边框
     * @param playing - 是否有歌曲正在播放
     * @param iconinfo - 图标样式
     * @param bgcolor - 背景颜色
     */
    export default {
        props: {
            name : {
                type : String,
                default : '我最爱的音乐'
            },
            count: {
				type: String,
				default: '1'
			},
			hasBorder: {
				type: Boolean,
				default: true
			},
			playing: {
				type: Boolean,
				default: false
			},
			iconinfo: {
				type: String
			},
			bgcolor: {
				type: String,
				default: '#f7f7f7'
			}
        },
        data(){
            return {
                isShow : false,
                listCount : 0,
                showBorder : true,
                isPlaying : false,
                inconInfo : '',
                typelistbg : ''
            }
        },
        computed: {
			showCount () {
				return this.count !== 'none'
			}
		},
        created(){
            this.listName = this.name
			this.listCount = this.count
			this.showBorder = this.hasBorder
			this.isPlaying = this.playing
			this.iconInfo = this.iconinfo
			this.typelistbg = this.bgcolor
        }
    }
</script>




