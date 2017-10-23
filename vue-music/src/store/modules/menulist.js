// 测面滑动菜单效果
const SHOW_MENU = true
const HIDE_MENU = false

const menulist = {
    namespaced : true,
    state : {
        isShow : false,
        detail : {
            //菜单的标题
            title : 'title : by VUE全家桶',
            //菜单包含的项，name，iconinfo，count，bgcolor | 名称，图标样式，数字，背景颜色
            content : []
        }
    },
    mutations : {
        showMenu(state,obj){
            state.detail = obj === undefined ? state.detail : obj.amount;
            state.isShow = SHOW_MENU;
        },
        hideMenu (state) {
			state.detail = {}
			state.isShow = HIDE_MENU
		}
    },
    actions: {
		showMenuList ({commit}, obj) {
			commit('showMenu', obj)
		},
		hideMenuList ({commit}) {
			commit('hideMenu')
		}
    },
    getters: {
		getIsShow: state => state.isShow,
		getShowMenuInfo: state => state.detail
	}
}

export default menulist