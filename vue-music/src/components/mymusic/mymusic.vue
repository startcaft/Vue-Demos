<template>
    <div class="my-music">
        <type-list name="我的音乐" iconinfo="iconfont icon-music" count="28" :playing="true"></type-list>
        <type-list name="最近播放" iconinfo="iconfont icon-zuijinbofang" count="18"></type-list>
        <type-list name="我的电台" iconinfo="iconfont icon-diantai" count="1"></type-list>
        <type-list name="我的收藏" iconinfo="iconfont icon-wodexingqiuzuiaishoucang" count="3"></type-list>

        <!--歌单-->
        <music-sheet v-for="(item,index) in items" :item="item" :index="index" :key="item.id"></music-sheet>
        <!--底部显示的菜单列表-->
        <menu-list></menu-list>
    </div>
</template>

<script>
    import typelist from '../typelist/typelist.vue'
    import menuList from '../menulist/menulist.vue'
    import musicSheet from '../musicsheet/musicsheet.vue'

    export default {
        components: {
            'type-list' : typelist,
            'menu-list' : menuList,
            'music-sheet' : musicSheet
        },
        computed: {
            //歌单数据
			items () {
				return this.$store.getters['audioInfo/getMusicAllList'].sheets;
			}
		},
    }
</script>

<style lang="less">
    // 注释掉的代码会影响子元素的 z-index，导致menu-list 组件无法覆盖 bottom-bar组件
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


