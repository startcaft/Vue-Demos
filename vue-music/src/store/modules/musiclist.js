//向上弹出的代播放音乐的列表

const SHOW_MUSIC_LIST = true;
const HIDE_MUSIC_LIST = false;

const musiclist = {
    state : {
        scrollTop:0,    //<ul>上滚动的scrollTop值
        refs : '',      //歌曲列表<ul>元素
        isShow:false
    },
    mutations:{
        showMusic(state){
            state.isShow = SHOW_MUSIC_LIST;
        },
        hideMusic(state){
            state.isShow = HIDE_MUSIC_LIST;
        },
        setScrollTop (state, scrollTop) {
            // console.log(scrollTop);
            // console.log(state.refs);
			setTimeout(function () {
				state.refs.scrollTop = scrollTop
			}, 100)
		},
        setRefScrollMusicList(state,ele){
            state.refs = ele;
        }
    },
    actions: {
        showMusicList ({commit}) {
            commit('showMusic')
        },
        hideMusicList ({commit}, obj) {
            commit('hideMusic', obj.refs)
        },
        set_ScrollTop ({commit}, obj) {
            commit('setScrollTop', obj.scrollTop)
        },
        set_RefScrollMusicList ({commit}, obj) {
            commit('setRefScrollMusicList', obj.refs)
        }
    },
    getters:{
        getIsShowMusicList: state => state.isShow,
        // 获取列表的scrollTop
        getScrollTop: state => state.scrollTop
    }
}
export default musiclist