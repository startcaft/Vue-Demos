<template>
    <div>
        <nv-header ref="header"></nv-header>
    </div>
</template>

<script>
	import Header from '@/components/Header';
	import $ from 'webpack-zepto';

    export default {
        data:function(){
            return {
                lists:[],
				show:false,
				tab:'all',
				page:1,
				limit:20,
				mdrender:false,
				scrollDelay:false
            }
        },
        components:{
            'nv-header' : Header
        },
        //自定义指令
		directives:{
			//实时监听滚动事件
			scroll:{
				bind:function(el,binding){
					$(document).on('scroll',() => {
						 const y = document.body.scrollTop || document.documentElement.scrollTop;
			          	const documentH = document.documentElement.clientHeight;
			          	const dom = document.querySelectorAll('.topic .topic_list');
			          	if (dom.length && (dom[dom.length - 1].offsetTop + dom[dom.length - 1].offsetHeight <= y + documentH)){
							const loadMore = binding.value;
						 	loadMore();
						}
					})
				}
			}
		},
		methods:{
			loadMore:function(){
				this.page = this.page + 1;
				this.getTopicList();
			},
			getTopicList:function(){
				
			}
		}
    }
</script>

<style lang="less">
    @import '../styles/index.less';
</style>


