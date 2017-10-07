<template>
    <div>
        <nv-header title="登陆"></nv-header>
        <section class="login">
            <div class="login_token">
                <input type="text" name="accesstoken" 
                    placeholder="Access Token" v-model="accessToken" maxlength="36">
                <button class="btn btn_login" @click="handleLogin">登陆</button>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
        components:{
            'nv-header': Header
        },
        data(){
            return {
                accessToken:'',
                loginName:''
            }
        },
        methods:{
            handleLogin(){
                var v = this;
                v.$http.post('https://cnodejs.org/api/v1/accesstoken', {
                    accesstoken : v.accessToken
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });
            }
        }
    }
</script>

<style lang="less">
    @import "../styles/login.less";
</style>


