<template>
    <div class="headerImg">
        <img :src="pictureUrl" alt="">
        <input type="file" class="file-button" @change="onFileChange" />
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pictureUrl : require('../assets/img/headerImg.jpg'),
                images : []
            }
        },
        methods : {
            onFileChange(e){
                let files = e.target.files || e.dataTransfer.files;
                //console.log(files);
                if(!files.length){
                    return this.createImage(files);
                }
            },
            createImage(file){
                let vm = this;
                let reader = null;
                reader = new window.FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload = function(e){
                    console.log(e.target.result);
                    vm.pictureUrl = e.target.result;
                }
            }
        }
    }
</script>


<style lang="less">
</style>

