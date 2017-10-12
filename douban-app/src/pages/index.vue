<template>
    <div>
        <m-header title="豆瓣app" :bg="true">
            <a href="javascript:;" slot="left">
                <img class="m-icon-img" src="../assets/images/ic_bar_back_white.png">
                返回
            </a>
            <a href="javascript:;" slot="right">分享</a>
        </m-header>
        <div class="page-content">
            <m-swiper swipeid="swipe01" :autoplay="1000" effect="cubu">
                <div class="swiper-slide slide02" slot="swiper-on">Slide 1</div>
                <div class="swiper-slide slide01" slot="swiper-on">Slide 2</div>
                <div class="swiper-slide slide03" slot="swiper-on">Slide 3</div>
            </m-swiper>
            <m-swiper swipeid="swipe021" :loop="false" paginationType="fraction" :autoplay="2000">
                <div class="swiper-slide slide02" slot="swiper-on">Slide 1</div>
                <div class="swiper-slide slide01" slot="swiper-on">Slide 2</div>
                <div class="swiper-slide slide03" slot="swiper-on">Slide 3</div>
            </m-swiper>
            <p>asdasdas</p>
            <p>asdasdas</p>

            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>

            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
            <p>asdasdas</p>
        </div>
    </div>
</template>

<script>
    import Header from '../components/header.vue'
    import Swiper from '../components/swiper.vue'

    export default {
        components : {
            'm-header' : Header,
            'm-swiper' : Swiper
        }
    }
</script>


<style lang="less">
    .is-fixed ~ .page-content{
        padding-top:44px;
    }
    .slide01{
        background: #41b883;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        color: #fff;
    }
    .slide02{
        background: #364a60;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        color: #fff;
    }
    .slide03{
        background: #ea6f5a;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        color: #fff;
    }
</style>

