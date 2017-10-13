<template>
    <div class="swiper-container" :class="swipeid">
        <div class="swiper-wrapper">
            <slot name="swiper-on"></slot>
        </div>
        <!-- 分页器 -->
        <div :class="{'swiper-pagination':pagination}"></div>
    </div>
</template>
<script>
    /**
     * @description swiper轮播
     * @param swipeid - 轮播组件id
     * @param effect - 播放时的特效，取值 slide,fade,coverflow,cube
     * @param loop - 是否循环，默认true
     * @param direction - 方向，默认水平方向
     * @param pagination - 是否有分页器
     * @param autoplay - 轮播延时，默认5000毫秒
     * @param paginationType - 分页类型，取值 fraction,progress,bullets
     */
    import '../assets/lib/swiper/js/swiper.js'
    export default {
        props:{
            swipeid:{
                type:String,
                default: 'swipe01'
            },
            effect:{
                type:String,
                default:'slide'
            },
            loop:{
                type:Boolean,
                default:true
            },
            direction:{
                type:String,
                default:'horizontal'
            },
            pagination:{
                type:Boolean,
                default:true
            },
            autoplay: {
                type: Number,
                default: 5000,
            },
            paginationType: {
                type: String,
                default: 'bullets'
            }
        },
        mounted:function(){
            let that = this;
            let mySwiper = new Swiper('.' + that.swipeid,{
                //循环
                loop:that.loop,
                //分页器
                pagination : '.swiper-pagination',
                //分页类型
                paginationType: that.paginationType, //fraction,progress,bullets
                //自动播放
                autoplay: that.autoplay,
                //方向
                direction: that.direction,
                //特效
                effect: that.effect, //slide,fade,coverflow,cube
            })
        }
    }
</script>

<style>
    @import '../assets/lib/swiper/css/swiper.css';
    .swiper-container img{
        width: 100%
    }
    .swiper-pagination-bullet-active {
        background: #fff;
    }
</style>

