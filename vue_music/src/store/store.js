import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicId: '',
    sheetId: '',
    play: false
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
    }
  }
});

