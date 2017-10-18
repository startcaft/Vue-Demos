//侧边菜单滑动状态
const SHOW_SIDEBAR = true;
const HIDE_SIDEBAR = false;

const sideBar = {
    state : {
        isShow : false
    },
    mutations:{
        showBar(state){
            state.isShow = SHOW_SIDEBAR;
        },
        hideBar(state){
            state.isShow = HIDE_SIDEBAR;
        }
    },
    actions:{
        showSideBar({commit}){
            commit('showBar');
        },
        hideSideBar({commit}) {
			commit('hideBar')
		}
    },
    getters:{
        isShowMethod : state => state.isShow
    }
}

export default sideBar