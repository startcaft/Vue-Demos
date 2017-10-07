<template>
    <div>
		<!--父组件引用子组件-->
        <nv-header ref="header"></nv-header>
		<div class="topic" v-scroll="loadMore">
			<div class="topic_list" v-for="item in lists">
				<router-link key="item.id" :to="{name:'topic',params:{id:item.id}}">
					<img class="topic_author" :src="item.author.avatar_url">
					<div class="topic_msg">
						<span class="topic_loginname">{{ item.author.loginname }}</span>
						<span class="topic_create_at">{{ item.reply_count }}/{{ item.visit_count }}</span>
					</div>
					<div class="topic_msg">
						<span class="topic_loginname">{{item.create_at}}</span>
						<span class="topic_create_at">{{item.last_reply_at}}</span>
					</div>
					<div class='topic_title'>
						<span v-if="item.top == true" class="topic_tab_top">置顶</span>
						<span v-else-if="item.tab == 'good'" class="topic_tab">精华</span>
						<span v-else-if="item.tab == 'share'" class="topic_tab">分享</span>
						<span v-else-if="item.tab == 'ask'" class="topic_tab">问答</span>
						<span v-else-if="item.tab == 'job'" class="topic_tab">招聘</span>
						<div class="list_item">{{item.title}}</div>
					</div>
				</router-link>
			</div>
		</div>
		<nv-top></nv-top>
		<nv-loading ref="loading" :show="show"></nv-loading>
    </div>
</template>

<script>
	import Header from '@/components/Header'
	import Loading from '@/components/Loading'
	import BackTop from '@/components/BackTop'
	import $ from 'webpack-zepto'

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
		mounted : function(){
			this.getTopicList();
		},
		watch: {
			//监听路由变化
			'$route'(to,from){
				var v = this;
				var tab = v.$route.query.tab;
				//解决无限加载bug
				if(v.tab != tab) v.page = 1;
				v.tab = tab;
				v.getTopicList();
				v.$refs.header.show = false;
			}
		},
        components:{
			'nv-header' : Header,
			'nv-loading' : Loading,
			'nv-top' : BackTop
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
				var v = this;
				if(v.page === 1){
					v.lists = [];
				}
				v.$http.get('https://cnodejs.org/api/v1/topics',{
					params:{
						tab : v.tab,
						page : v.page,
						limit : v.limit
					}
				}).then(function(response){
					// console.log(response.data.data);
					response.data.data.map(function(item){ 
						//设定时间格式
						item.create_at = v.$filter.getDateDiff(new Date(item.create_at));
						item.last_reply_at = v.$filter.getDateDiff(new Date(item.last_reply_at));
					})
					v.lists = v.lists.concat(response.data.data);
					if(!response.data.data) console.log('没有更多内容了...');
				}).catch(function(response){
					console.log(response);
				});
			}
		}
    }
</script>

<style lang="less">
    @import '../styles/index.less';
</style>


