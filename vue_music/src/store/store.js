import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicId: '',
    song: {
      imgUrl: require('../common/pic/lb.jpg'),
      name: '男孩',
      singer: '梁博',
      url: require('../common/music/男孩-梁博.mp3')
    },
    list:[],
    sheetId: '',
    play: false,
    mini: true
  },
  mutations: {
    setMusicId(state, musicId) {
      state.musicId = musicId;
    },
    setSheetId(state, sheetId) {
      state.sheetId = sheetId;
    },
    setPlay(state, play) {
      state.play = play;
    },
    setSong(state, song) {
      state.song = song;
    },
    setList(state, list) {
      state.list = list;
    },
    setMini(state, mini) {
      state.mini = mini;
    },
    setName(state, name) {
      state.song.name = name;
    }
  },
  actions: {
    setShow(context, musicId) {
      context.commit('setMusicId', musicId);
    },
    setSheetId(context, sheetId) {
      context.commit('setSheetId', sheetId);
    },
    setPlay(context, play) {
      context.commit('setPlay', play);
    },
    setSong(context, song) {
      context.commit('setSong', song);
    }, 
    setList(context, list) {
      context.commit('setList', list);
    },
    setMini(context, mini) {
      context.commit('setMini', mini);
    },
    setName(context, name) {
      context.commit('setName', name);
    }
  }
});

