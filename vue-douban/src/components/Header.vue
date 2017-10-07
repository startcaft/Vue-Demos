<template>
    <div>
        <span class="page_cover" @click="toggleMenu" v-if="show"></span>
        <header class="header_bar">
            <span class="menu_btn" @click="toggleMenu"></span>
            <span class="header_title">
                <span class="vue_logo"></span>
				<span class="headerbar_title" v-if="$route.query.tab == 'all'">全部</span>
				<span class="headerbar_title" v-else-if="$route.query.tab == 'good'">精华</span>
				<span class="headerbar_title" v-else-if="$route.query.tab == 'share'">分享</span>
				<span class="headerbar_title" v-else-if="$route.query.tab == 'ask'">问答</span>
				<span class="headerbar_title" v-else-if="$route.query.tab == 'job'">招聘</span>
            </span>
            <router-link :to="{name:'login'}" v-if="!loginName" class="publish_btn">
                <i class="iconfont icon-publish"></i>
            </router-link>
            <router-link :to="{name:'create'}" v-else class="publish_btn">
				<i class="iconfont icon-publish"></i>
			</router-link>
        </header>
        <nv-menu :show="show"></nv-menu>
    </div>
</template>

<script>
    import Menu from './Menu.vue';

    export default {
        data:function(){
            return {
                show:false,
                loginName:'',
                // tab:'all'
            }
        },
        mounted(){
			var loginname = localStorage.getItem('name');
            this.loginName = loginname;
		},
        methods: {
			toggleMenu(){
				this.show = !this.show;
			}
		},
        components:{
            "nv-menu" : Menu
        }
    }
</script>

<style lang="less">
    @import '../styles/header.less';
    @import '../styles/iconfont/iconfont.css';
</style>


