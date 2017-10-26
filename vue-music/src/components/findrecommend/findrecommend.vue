<template>
    <div class="findrecommend">
        <m-swiper swipeid="swiper01" :autoplay="3000" paginationDirection="center">
            <div class="swiper-slide" slot="swiper-con" v-for="item in reconmmend.findmusic.reconmmend.recommendImageList">
                <img class="image" :src="item.src" alt="">
                <span class="type" :style="{backgroundColor:item.color}">{{item.type}}</span>
            </div>
        </m-swiper>
        <div class="recommend-type">
        	<div class="div-type">
        		<i class="icon-type iconfont icon-shouyinjikuai"></i>
        		<p class="title">私人FM</p>
        	</div>
        	<div class="div-type">
        		<i class="icon-type iconfont icon-ipod"></i>
        		<p class="title">每日听歌推荐</p>
        	</div>
        	<div class="div-type">
        		<i class="icon-type iconfont icon-paihangbang"></i>
        		<p class="title">云音乐热歌榜</p>
        	</div>
        </div>
        <div class="findsheettitle">
            <span class="name">推荐歌单</span>
            <i class="icon iconfont icon-cc-right"></i>
        </div>
        <div class="recommend-list">
            <find-sheet-list v-if="reconmmend" v-for="(sheet, sheetindex) in reconmmend.findmusic.reconmmend.recommendMinSheets" 
                :key="sheet.id" :imagesrc="sheet.info[0].img_url" 
                :showtoprighttips="sheet.showtoptips" :listpadding="sheet.padding" 
                :toprighticonclass="sheet.toptipsclass" :toprighttitle="sheet.listencount" 
                :showbottomtips="sheet.showbottomtips" :bottomtips="sheet.bottomtips" 
                :showbottomtitle="sheet.showbottomtitle" :bottomtitle="sheet.bottomtitle" 
                :listwidth="sheet.listwidth">
            </find-sheet-list @click.stop="showSongSheet(list)">
        </div>
    </div>
</template>

<style lang="less">
    @import '../../assets/less/global.less';

    .findrecommend {
        position:fixed;
		background:#fff;
		overflow:auto;
		top:86px;
		bottom:46px;
		left:0;
		right:0;
		z-index:11;
		background:#fff;
        -webkit-overflow-scrolling:touch;
        a {
            color:#666;
			text-decoration:none;
        }
        .swiper-container {
            .swiper-wrapper {
                .swiper-slide {
                    .image {
                        width: 100%;
                    }
                    .type {
                        position:absolute;
						right:0;
						bottom:20px;
						padding:0 12px;
						height:24px;
						line-height:24px;
						color:#fff;
						font-size:14px;
						font-weight:400;
						border-radius:12px 0 0 12px;
                    }
                }
            }
            .swiper-pagination {
                .swiper-pagination-bullet {
                    margin:0 4px;
                    &.swiper-pagination-bullet-active {
                        background:@primarycolor!important;
                    }
                }
            }
        }
        .recommend-type {
            width:100%;
			height:90px;
			display:flex;
            align-items:center;
            .div-type {
                flex:1;
				height:100%;
				width:33.333333%;
				font-size:0;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
                padding:0 10px;
                .icon-type {
					display:inline-block;
					color:@primarycolor;
					font-size:32px;
					width:50px;
					height:50px;
					line-height:50px;
					text-align:center;
					border:1px solid @primarycolor;
                    border-radius:50%;
                }
				.title {
                    font-size:12px;
                    line-height: 12px;
					font-weight:400;
					margin:0;
					margin-top:8px;
					text-overflow:ellipsis;
					overflow:hidden;
					white-space:nowrap;
					width:100%;
                    text-align:center;
                }
            }
        }
        .findsheettitle {
            box-sizing:border-box;
            height:40px;
            line-height:40px;
            position:relative;
            .name {
                display:inline-block;
                vertical-align:middle;
                height:18px;
                line-height:18px;
                position:relative;
                color:#333;
                font-size:16px;
                font-weight:400;
                padding-left:12px;
                &:before {
                    content:'';
                    position:absolute;
                    top:0;
                    left:0;
                    height:100%;
                    width:3px;
                    background:@primarycolor;
                }
            }
            .icon {
                display:inline-block;
                font-size:16px;
                color:@icon_color;
                vertical-align:middle;
            }
        }
        .recommend-list {
            font-size:0;
        }
    }
</style>

<script>
    import mySwiper from '../swiper/swiper.vue'
    import findSheetList from '../findsheetlist/findsheetlist.vue'

    export default {
        data(){
            return {
                swiperOption:{
                    autoplay: 3000,
                    pagination: '.swiper-pagination',  
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                }
            }
        },
        computed: {
            reconmmend(){
                return this.$store.getters.getAllInfo;
            },
            swiper(){
                return this.$refs.mySwiper.swiper;
            }
        },
	    methods: {
			showSongSheet (data) {
				this.$store.dispatch({
					type: 'audioInfo/set_MusicSheetList',
					data: data
				})
				this.$store.commit({
					type: 'audioInfo/setIsShowSongSheet',
					isShow: true
				})
			}
	    },
        components: {
            'm-swiper' : mySwiper,
            'find-sheet-list' : findSheetList
        },
        mounted(){
            console.log(this.$store.getters);
            console.log(this.$store.getters.getAllInfo);
        }
    }
</script>


