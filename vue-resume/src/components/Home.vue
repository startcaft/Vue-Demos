<template>
    <div class="demo-gird">
        <mu-row gutter>
            <mu-col width="100" tablet="30" desktop="25" class="resume-left">
                <!--头像-->
                <header-img></header-img>
                <!--个人基本信息-->
                <div class="baseInfo">
                    <mu-text-field hintText="输入年龄" type="type" icon="face" fullWidth :underlineShow="false" />
                    <mu-text-field hintText="输入住址" type="type" icon="place" fullWidth :underlineShow="false"/>
                    <mu-text-field hintText="输入电话号码" type="type" icon="phone" fullWidth :underlineShow="false"/>
                    <mu-text-field hintText="输入邮箱" type="type" icon="mail" fullWidth :underlineShow="false"/>
                </div>
                <!--技能-->
                <skills></skills>
                <!--兴趣爱好-->
                <interset></interset>
            </mu-col>

            <mu-col width="100" tablet="30" desktop="75" class="resume-right">
                <div>
                    <mu-text-field hintText="请输入姓名"  :underlineShow="false" class="nameInput" />
                    <div class="ambition">
                        <mu-text-field hintText="请输入求职志向" :underlineShow="false" />
                    </div>
                </div>
                <!--教育背景-->
                <education></education>
                <!-- 工作经验 -->
                <work></work> 
                <!-- 奖项荣誉 -->
                <awrad></awrad>
                <!-- 自我评价 -->
                <assessment></assessment>

                <!--生成简历照片-->
                <mu-float-button icon="camera" mini class="demo-float-button createPic" @click="createImg" />

                <!--预览简历-->
                <div v-if="readResume">
                    <div class="shadow"></div>
                    <div class="resume">
                        <mu-card>
                            <mu-card-media title="恭喜你，简历成功生成" subTitle="">
                            <img :src="resumeImg" />
                            </mu-card-media>
                            <mu-card-actions>
                            <a :href="url" target="_blank" download class="generatePic">下载简历</a>
                            <mu-flat-button label="关闭预览" @click="closeResume" />
                            </mu-card-actions>
                        </mu-card>
                    </div>
                </div>
            </mu-col>
        </mu-row>
    </div>
</template>

<style lang="less">
</style>

<script>
    import HeaderImg from './headerImg.vue'
    import Skill from './Skill.vue'
    import Interset from './Interest.vue'
    import Education from './Education.vue'
    import Work from './Work.vue'
    import Award from './Award.vue'
    import Assessment from './Assessment.vue'
    import Html2canvas from 'html2canvas'

    export default {
        components : {
            'header-img' : HeaderImg,
            'skills' : Skill,
            'interset' : Interset,
            'education' : Education,
            'work' : Work,
            'awrad' : Award,
            'assessment' : Assessment
        },
        data(){
            return {
                url : '',
                resumeImg : '../static/img/headerImg.jpg',
                readResume:false
            }
        },
        methods : {
            createImg(){
                console.log("生成图片中");
                let height = document.getElementById("app").offsetHeight;
                let width = document.getElementById("app").offsetWidth;
                let canvas = document.querySelector("canvas");
                let ctx = canvas.getContext("2d");
                let _this = this;
                
                Html2canvas(document.querySelector("#app"))
                    .then(function(canvas){
                        let img = canvas.toDataURL();
                        //console.log(img);
                        _this.url = img;
                        _this.resumeImg = img;
                        _this.readResume = true;
                    });
            },
            closeResume(){
                this.readResume = false;
            }
        }
    }
</script>


