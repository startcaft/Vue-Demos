<template>
    <div>
        <span class="page_cover" @click="toggleMenu" v-if="show"></span>
        <header class="header_bar">
            <span class="menu_btn" @click="toggleMenu"></span>
            <span class="header_title">
                <span class="vue_logo"></span>
                <span class="headerbar_title">{{ title }}</span>
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
        //组件属性，接收一个tab属性，然后来计算顶部标题
        props:{                        
            tab:{
                type:String,
                default:'all'
            }
        },
        computed:{
            title : function(){
                if(this.tab === 'all'){
                    return '全部';
                }
                if(this.tab === 'good'){
                    return '精华';
                }
                if(this.tab === 'share'){
                    return '分享';
                }
                if(this.tab === 'ask'){
                    return '问答';
                }
                if(this.tab === 'job'){
                    return '招聘';
                }
                if(this.tab === 'msg'){
                    return '消息';
                }
                if(this.tab === 'login'){
                    return '登录';
                }
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


