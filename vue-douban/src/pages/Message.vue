<template>
    <div>
        <nv-header tab="msg"></nv-header>
        <section class="message">
            <ul class="tab">
                <li class="tab_item" :class="{active:this.activeItem === 1}" @click="handleTabChange(1)">已读信息</li>
                <li class="tab_item" :class="{active:this.activeItem === 2}" @click="handleTabChange(2)">未读信息</li>
            </ul> 
            <div class="message_content" v-for="item of currentData">
				<section class="author_info">
					<img class="head" :src="item.author.avatar_url">
					<div class="info">
						<span class="left">
							<span class="name">{{item.author.loginname}}</span>
							<span class="name" v-if="item.type === 'at'">在回复中@了您</span>
							<span class="name" v-if="item.type === 'reply'">回复了您的话题</span>
						</span>
						<span class="right">
							<span class="name">{{item.reply.create_at}}</span>
						</span>
					</div>
				</section>
				<div class="reply_content markdown-body" v-html="item.reply.content">
					<router-link :to="{name:'topic',params:{id:item.topic.id}}">
						<div class="topic_title">话题：{{item.topic.title}}</div>
					</router-link>
				</div>
			</div>
			<div class="no_data" v-show="noData">
				<i class="iconfont icon-empty"></i>暂无数据！
			</div>
        </section>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'

    export default {
        components:{
            'nv-header':Header
        },
        data(){
            return{
				activeItem:1,
				messagesData:{},
				currentData:{},
				noData:false
			}
        },
        mounted(){
            let loginName = localStorage.getItem('name');
            let accessToken = localStorage.getItem('accesstoken');
            let v = this;
            if(loginName){
                v.$http.get('https://cnodejs.org/api/v1/messages',{
                    params:{
                        accesstoken:accessToken
                    }
                })
                .then(function(res){
                    console.log(res.data);
						if(res.data.success){
							res.data.data.has_read_messages.map(function(item){
								//设定时间格式
								item.create_at = v.$filter.getDateDiff(new Date(item.create_at));
								item.last_reply_at = v.$filter.getDateDiff(new Date(item.last_reply_at));
							});
							res.data.data.hasnot_read_messages.map(function(item){
								//设定时间格式
								item.create_at = v.$filter.getDateDiff(new Date(item.create_at));
								item.last_reply_at = v.$filter.getDateDiff(new Date(item.last_reply_at));
							});
							v.messagesData = res.data.data;
							if(res.data.data.hasnot_read_messages.length){
								v.currentData = res.data.data.hasnot_read_messages;
								v.activeItem = 2;
							}else {
								v.currentData = res.data.data.has_read_messages;
							}
							v.noData = v.currentData.length === 0;
						}else {
							v.noData = true;
						}
                })
                .catch(function(res){
                    console.log(err);
                })
            }
        },
        methods:{
            handleTabChange(itemIndex){
                this.activeItem = itemIndex;
                // this.currentData = itemIndex ===1 ? this.messagesData.has_read_messages : this.messagesData.hasnot_read_messages;
                // this.noData = this.currentData.length === 0;
            }
        }
    }
</script>

<style lang="less" scoped>
    .message {
        padding-top: 40px;
        .tab {
            display: flex;
			display: -webkit-flex;
			border-bottom: 1px solid #d4d4d4;
            overflow: hidden;
            .tab_item {
				flex:1;
				border-right:1px solid #d4d4d4;
				text-align: center;
				font-weight:700;
				font-size: 1.6rem;
				padding:10px 0;
				&.active{
					color:#80bd01;
					border-bottom: 2px solid #80bd01;
				}
				&:last-child{
					border-right:none;
				}
			}
        }
        .message_content {
            padding: 10px 0;
            border-bottom: 1px solid #d4d4d4;
            .author_info {
                display: -webkit-flex;
                display: flex;
                padding: 0 10px;
                margin: 10px 0;
                .head {
                    width: 40px;
                    height: 40px;
                    margin-right: 15px;
                }
                .info {
                    flex: 1;
                    display: -webkit-flex;
                    display: flex;
                    .left {
                        flex: 1;
                        color: #626262;
                        font-size: 1.6rem;
                    }
                    .right {
                        color: #80bd01;
                        font-size: 1.2rem;
                    }
                }
            }
            .reply_content {
                padding: 0 15px;
            }
            a {
                display: block;
                margin: 0 15px;
                .topic_title {
                    padding: 5px;
                    font-size: 1.8rem;
                    color: #2c3e50;
                    background-color: #f0f0f0;
                    border-radius: 5px;
                }
            }
        }
        .no_data {
            height: -webkit-calc(~'100vh - 90px');
            height: calc(~'100vh - 90px');
            text-align: center;
            color:#d4d4d4;
            font-size: 1.8rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .icon-empty{
                display: block;
                font-size: 12.5rem;
                color:#d4d4d4;
            }
        }
    }
</style>


