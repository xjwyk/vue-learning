import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicId: '400162138',
    song: {
      imgUrl: 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
      name: '海阔天空',
      singer: 'Beyond',
      url: 'http://m10.music.126.net/20190415142058/d0cdb07c25e5d1e1a6a09f3a049a313d/ymusic/603f/2799/ea87/0ac26d0e219c049b2c5a12fd6be2826f.mp3'
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
    }
  }
});

