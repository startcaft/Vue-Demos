<template>
    <div class="interest">
        <div class="title">
            <span>兴趣爱好</span>
            <a href="javascrpt:;" class="add addBtn" @click="openInterest" >
                <mu-icon value="add" color="#fff" />
            </a>
        </div>

        <div>
            <mu-dialog :open="interestDialog" title="兴趣爱好" @close="closeInterest">
                <mu-text-field label="兴趣爱好" labelFloat fullWidth v-model="interest" />
                <mu-flat-button slot="actions" @click="closeInterest" primary label="取消"/>
                <mu-flat-button slot="actions" primary label="确定" @click="interestData" />
                </mu-dialog>
        </div>

        <div class="interest-item">
            <div v-if="interestEmpty" class="empty">请先添加兴趣爱好</div>
            <div v-for="(item,index) in interests" class="list" v-else>
                <p>
                    <span>  • {{item}}</span>
                    <a href="javascript:;" class="delete" @click="deleteInterest(index)">
                        <mu-icon value="delete" />
                    </a>
                </p>
            </div>
        </div>

        <!--输入的提示框-->
        <mu-toast v-if="toast" :message="message" @close="hideToast"/>
    </div>
</template>

<style></style>
<script>
export default {
  data () {
    return {
      interestDialog:false, 
      interest:"",
      interests:[], 
      interestEmpty:true,   
      toast : false,
      message : ''
    }
  },
  methods: {
    openInterest() { 
      this.interestDialog = true
    },
    closeInterest() {
      this.interestDialog = false
    },
    interestData(){
        if(this.interest == '' || this.interest.trim == ''){
            this.showToast('至少告诉我们你对什么感兴趣');
        }
        else{
            this.interests.push(this.interest);
            this.interest="";
            this.interestDialog = false;
            this.interestEmpty = false;
        }
    },
    deleteInterest(index){
        this.interests.splice(index,1);
        if(this.interests==0){
            this.interestEmpty = true;
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
