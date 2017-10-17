<template>
    <div class="skills">
        <div class="title">
            <span class="">技能特点</span>
            <a href="javascript:;" class="add addBtn" @click="openSkills">
                <mu-icon value="add" color="#fff"/>
            </a>
        </div>

        <!--对话框-->
        <div>
            <mu-dialog :open="skillDialog" title="技能特点" @close="closeSkills">
                <mu-text-field label="掌握的技术" labelFloat fullWidth v-model="skill.name"/>
                <mu-row gutter>
                    <mu-col width="60" table="60" desktop="80">
                        <mu-slider v-model="skill.value" class="demo-slider" :min=0 :max=100 :step="5" />
                    </mu-col>
                    <mu-col width="60" table="60" desktop="20">
                        <span>{{skill.value}}</span>
                        <span>/</span>
                        <span>100</span>
                    </mu-col>
                </mu-row>

                <mu-flat-button slot="actions" @click="closeSkills" primary label="取消"/>
                <mu-flat-button slot="actions" primary label="确定" @click="skillData" />
            </mu-dialog>
        </div>

        <div class="skill-item">
            <div v-if="skillEmpty" class="empty">请先添加技能特点</div>
            <div v-for="(item,index) in skills" class="list" v-else>
                <p>
                <span>{{item.name}}</span>
                <a href="javascript:;" class="delete" @click="deleteSkill(index)">
                    <mu-icon value="delete" />
                </a>
                </p>
                <mu-linear-progress mode="determinate" :value="item.value"/>
            </div>
        </div>

        <!--输入的提示框-->
        <mu-toast v-if="toast" :message="message" @close="hideToast"/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:20,
                skillDialog : false,
                //技能对象
                skill:{                    
                    name : '',
                    value : 20
                },
                //技能对象数组
                skills:[],
                //白痴，什么都不会
                skillEmpty:true,
                toast : false,
                message : ''
            }
        },
        methods : {
            openSkills(){
                this.skillDialog = true;
            },
            closeSkills(){
                this.skillDialog = false;
            },
            skillData(){
                if(this.skill.name == '' || this.skill.name.trim() == ''){
                    this.showToast('好歹填写一个技能名称吧');
                }
                else if(this.skill.value === 0){
                    this.showToast('你完全不会该项技能啊');
                }
                else{
                    this.skills.push(this.skill);
                    this.skill = {
                        name : '',
                        value : 20
                    };
                    this.closeSkills();
                    this.skillEmpty = false;
                    //console.log(this.skills);
                }  
            },
            deleteSkill(index){
                this.skills.splice(index,1);
                if(this.skills.length === 0){
                    this.skillEmpty = true;
                }
            },
            showToast (message) {
                this.toast = true
                if (this.toastTimer) clearTimeout(this.toastTimer)
                this.message = message;
                this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
            },
            hideToast () {
                this.toast = false
                if (this.toastTimer) clearTimeout(this.toastTimer)
            }
        }
    }
</script>


<style lang="less">
</style>

