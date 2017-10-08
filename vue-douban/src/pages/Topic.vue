<template>
    <div>
        <nv-header></nv-header>
        <div class="topic_detail" v-if="topic.title">
            <!--标题-->
            <h2 class="topc_title" v-text="topic.title"></h2>
            <!--用户，帖子信息-->
            <section class="author_info">
                <router-link :to="{name:'user',params:{loginName:topic.author.loginname}}">
					<img :src="topic.author.avatar_url" class="avatar">
		 		</router-link>
                 <div class="center">
		 			<span class="author" v-text="topic.author.loginname"></span>
		 			<time class="info">发布于：{{topic.create_at}}</time>
		 		</div>
                <div class="right">
		 			<span  v-if="topic.top == true" class="tag">置顶</span>
					<span  v-else-if="topic.tab == 'good'" class="tag">精华</span>
					<span  v-else-if="topic.tab == 'share'" class="tag">分享</span>
					<span  v-else-if="topic.tab == 'ask'" class="tag">问答</span>
					<span  v-else-if="topic.tab == 'job'" class="tag">招聘</span>
					<span class="name">{{topic.visit_count}}次浏览</span>
		 		</div>
            </section>
            <!--内容-->
            <section class="markdown-body topic_content" v-html="topic.content"></section>
            <!--回贴列表-->
            <section class="topic_reply">
				<h3 class="topic_total">
					<strong>{{topic.reply_count}}</strong>条回复
				</h3>
				<ul class="reply_list">
					<li v-for="item in topic.replies">
						<section class="user">
							<router-link :to="{name:'user',params:{logiNname:item.author.loginname}}">
								<img :src="item.author.avatar_url" class="head">
							</router-link>
							<div class="info">
								<div class="left">
									<p class="name" v-text="item.author.loginname"></p>
									<p class="name">发布于:{{item.create_at}}</p>
								</div>
								<span class="right">
									<span style="margin-right:5px;" class="iconfont icon-dianzan"
									:class="{'uped':isUps(item.ups)}" @click="handleUpReply(item)"></span>
									<span style="margin-right:5px;color: #80bd01;">{{item.ups.length}}</span>
									<span class="iconfont icon-hf" @click="addReply(item.id)"></span>
								</span>
							</div>
						</section>
						<div class="reply_content markdown-body" v-html="item.content"></div>
						<nv-reply v-if="loginName && replyId === item.id" 
						:reply-to="item.author.loginname" 
						:reply-id="item.id" 
						:topic-id="topicId"
						@getTopic="getTopic"
						@onReply="handleReply"></nv-reply>
					</li>
				</ul>
			</section>
            <nv-reply v-if="loginName" :topic-id="topicId"></nv-reply>
        </div>
    </div>
</template>

<script>
    import BackTop from '@/components/BackTop'
    import Reply from '@/components/Reply'
    import Header from '@/components/Header'

    export default {
        data(){
            return {
                loginName : '',
                id:'',
                replyId:'',
				topicId:'',
				topic:{}
            }
        },
        components:{
            'back-top' : BackTop,
            'nv-reply' : Reply,
            'nv-header' : Header
        },
        mounted(){
			var v = this;
			v.loginName = localStorage.getItem('name');
			v.id = localStorage.getItem('id');
			this.getTopic();
		},
        methods:{
            getTopic(){
                let v = this;
                v.topicId = this.$route.params.id;//路由的url参数
                //获取话题列表
                v.$http.get('https://cnodejs.org/api/v1/topic/'+v.topicId)
                    .then(function(response){
                        var data = response.data.data;
                        console.log(data);
						data.replies.map(function(item){
							item.create_at = v.$filter.getDateDiff(new Date(item.create_at));
						})
						data.create_at = v.$filter.getDateDiff(new Date(data.create_at));
						data.last_reply_at = v.$filter.getDateDiff(new Date(data.last_reply_at));
                        // v.topic = response.data.data;
                        v.topic = data;
                    })
                    .catch(function(response){
                        console.log(response);
                    });
            },
            isUps(ups) {
				return ups.indexOf(this.id) > -1
            },
            handleReply(){
				this.replyId = '';
            },
            //点赞
            handleUpReply(item){
                var v = this;
				if(!v.loginName){
					v.$router.push({
						name:'login',
						query:{redirect:encodeURIComponent(v.$route.name)}
					});
					return;
				}
            },
            //转发
            addReply(id){
                console.log(id);
            }
        }
    }
</script>

<style lang="less">
    @import "../styles/topic.less";
    @import "../../node_modules/github-markdown-css/github-markdown.css";
</style>


