import Vue from 'vue'
import Vuex from 'vuex'
import Sidebar from './modules/siderbar.js'
import AudioInfo from './modules/audio.js'
import MusicList from './modules/musiclist.js'
import MenuList from './modules/menulist'

Vue.use(Vuex)

/**
 * vuex store仓库，包含其他子模块
 */
const store = new Vuex.Store({
    //开发环境下使用严格模式，无法直接修改状态，而是提交mutaion
    strict : process.env.NODE_ENV !== 'production',
    state:{
        allInfo:[]
    },
    getters : {
        getAllInfo : state => state.allInfo,
        //获取推荐歌单信息
        // getFindMusic : state => state.mu
    },
    mutations : {
        setAllInfo(state,obj){
            state.allInfo = obj
        }
    },
    actions : {
        set_AllInfo({commit},obj){
            commit('setAllInfo',obj);
        }
    },
    //包含的模块
    modules:{
        sidebar : Sidebar,
        audioInfo : AudioInfo,
        musiclist : MusicList,
        menulist : MenuList
    }
});

export default store