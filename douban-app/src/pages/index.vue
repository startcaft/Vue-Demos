<template>
    <m-tabbar>
        <!--以下的内容分发给m-tabbar组件的默认slot-->
        <m-tabbar-item id="tab1">
            <!--分发给m-tabbar-item组件的具名为icon-normal的slot-->
            <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
            首页
        </m-tabbar-item>
        <m-tabbar-item id="tab2">
            <!--分发给m-tabbar-item组件的具名为icon-normal的slot-->
            <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
            书影音
        </m-tabbar-item>
        <m-tabbar-item id="tab3">
            <!--分发给m-tabbar-item组件的具名为icon-normal的slot-->
            <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
            广播
        </m-tabbar-item>
        <m-tabbar-item id="tab4">
            <!--分发给m-tabbar-item组件的具名为icon-normal的slot-->
            <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
            小组
        </m-tabbar-item>
        <m-tabbar-item id="tab5">
            <!--分发给m-tabbar-item组件的具名为icon-normal的slot-->
            <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
            我的
        </m-tabbar-item>
    </m-tabbar>
</template>

<script>
    import Tabbar from '../components/tabbar.vue'
    import TabbarItem from '../components/tabber-item.vue'

    export default {
        components : {
            'm-tabbar' : Tabbar,
            'm-tabbar-item' : TabbarItem
        }
    }
</script>


<style lang="less">

</style>

