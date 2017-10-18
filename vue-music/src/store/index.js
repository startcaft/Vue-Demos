import Vue from 'vue'
import Vuex from 'vuex'
import Sidebar from './modules/siderbar.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    //开发环境下使用严格模式，无法直接修改状态，而是提交mutaion
    strict : process.env.NODE_ENV !== 'production',
    state:{
        allInfo:[]
    },
    modules:{
        sidebar : Sidebar
    }
});

export default store