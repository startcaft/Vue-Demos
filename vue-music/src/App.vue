<template>
  <div id="app">
    <audio id="myaudio" ref="audio" 
        @timeupdate="musicTimeUpdate" @canplay="musicCanPlay"
        @playing="musicOnPlaying" @ended="musicEnded"
        @waiting="musicOnWaiting" @pause="musicOnPause"
        @loadstart="loadStart"></audio>
    <!--头部-->
    <v-header :index="2"></v-header>
    <!--侧边栏-->
    <v-side :info="info"></v-side>

    <!-- 底部显示的浮层页  音乐列表 -->
    <music-list></music-list>
    <!-- 底部固定页 -->
    <bottom-bar></bottom-bar>

    <!-- 我的音乐  首页，注意这里的my-music组件应该放在bottom-bar组件后面，因为他们有相同的z-index，my-music组件中也有子元素使用z-index，保证子元素覆盖bottom-bar -->
    <my-music></my-music>

    <!-- 歌单详情页 -->
    <song-sheet></song-sheet>

  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import sidebar from './components/sidebar/sidebar.vue'
  import bottomBar from './components/bottombar/bottom-bar.vue'
  import musicList from './components/musiclist/musiclist.vue'
  import myMusic from './components/mymusic/mymusic.vue'
  import songSheet from './components/songsheet/songsheet.vue'
  import store from './store/index.js'
  import axios from 'axios'

  let musicLrcIndex = 0

  export default {
    data(){
      return {
        info:{}
      }
    },
    store : store,
    components:{
      "v-header" : header,
      'v-side' : sidebar,
      'bottom-bar' : bottomBar,
      'music-list' : musicList,
      'my-music' : myMusic,
      'song-sheet' : songSheet
    },
    methods:{
      //播放时间更新
      musicTimeUpdate(){
        //action载荷，将当前更新的事件传递给action
        this.$store.dispatch({
          type:'audioInfo/set_CurrentTime',
          time:Math.floor(this.$refs.audio.currentTime)
        })

        //设置歌词内容（以索引的形式显示）
        let musicLrc = this.$store.getters['audioInfo/getCurrentMusic'].lyric;
        let currentTime = Math.floor(this.$refs.audio.currentTime);
        if(musicLrc[musicLrcIndex] == undefined) return;

        if(musicLrc.length === 0){
          this.$store.commit({
            type:'audioInfo/setLyricIndex',
            index: -1
          })
          return
        }

        for(let i=0;i<musicLrc.length;i++){
          if(currentTime >= Number(musicLrc[musicLrcIndex].timeId)){
            musicLrc += 1;
            break;
          }
          else {
            if(musicLrcIndex <= 0){
              musicLrcIndex = 0;
            }
            else {
              musicLrcIndex--;
            }
          }
        }

        this.$store.commit({
          type : 'audioInfo/setLyricIndex',
          index : musicLrcIndex
        });
      },
      //可以播放事件
      musicCanPlay(){
        this.$store.dispatch({
          type: 'audioInfo/set_MusicDuration',
          duration: Math.floor(this.$refs.audio.duration)
        });
        this.$store.commit({
          type: 'audioInfo/setMusicLoadStart',
          isloadstart: false
        })
      },
      //音乐处于播放状态
      musicOnPlaying(){
        this.$store.commit('audioInfo/play')
      },
      //音乐播放结束事件
      musicEnded(){
        this.$store.dispatch('audioInfo/play_Ended');
        //歌词初始化
        musicLrcIndex = 0;
        this.$store.commit({
          type:'audioInfo/setLyricIndex',
          index : 0
        })
      },
      // 音乐处于watting状态
      musicOnWaiting () {
        // alert('音乐加载中')
      },
      // 音乐处于暂停状态
      musicOnPause () {
        this.$store.commit('audioInfo/pause')
      },
      // 音乐加载
      loadStart () {
        this.$store.commit({
          type: 'audioInfo/setMusicLoadStart',
          isloadstart: true
        })
      }
    },
    created(){
      let localApi = 'static/data.json';
      axios.get(localApi).then((res) => {
        //用户信息
        this.info = res.data.user;
        // console.log(this.info)
        
        //把所有的音乐数据传递给vuex的musicAllList
        console.log(res.data.music);
        this.$store.dispatch('audioInfo/set_MusicAllList',res.data.music);

        // 所有的数据存起来  包括音乐个人信息 等等
        //console.log(res.data);
        this.$store.dispatch('set_AllInfo', res.data)

        //设置音乐的地址
        this.$refs.audio.setAttribute('src',this.$store.getters['audioInfo/getCurrentMusic'].url);

        // 给audio元素存在vuex 的state里面  方便日后调用
        this.$store.dispatch('audioInfo/set_AudioElement', this.$refs.audio)
      },(err) => {
        throw new Error(err);
      })
    }
  }
</script>

<style lang="less">
  @import './assets/less/global.less';
  @import './assets/less/index.less';

  body,html {
    margin:0;
    padding:0;
    box-sizing:border-box;
    background:#f0f0f0f0;
    user-select:none;
    -webkit-tap-highlight-color: transparent;
  }

  #app  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
