<template>
    <div class="my-music">
        <type-list name="我的音乐" iconinfo="iconfont icon-music" count="28" :playing="true"></type-list>
        <type-list name="最近播放" iconinfo="iconfont icon-zuijinbofang" count="18"></type-list>
        <type-list name="我的电台" iconinfo="iconfont icon-diantai" count="1"></type-list>
        <type-list name="我的收藏" iconinfo="iconfont icon-wodexingqiuzuiaishoucang" count="3"></type-list>
    </div>
</template>

<script>
    import typelist from '../typelist/typelist.vue'

    export default {
        components: {
            'type-list' : typelist
        }
    }
</script>

<style lang="less">
    .my-music {
        position:fixed;
		background:#fff;
		overflow:auto;
		top:50px;
		bottom:46px;
		left:0;
		right:0;
        z-index:9;
        -webkit-overflow-scrolling:touch;
    }
</style>


