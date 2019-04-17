<template>
  <div :class="{'music-player': !mini}">
    <div class="miniplayer"
         :class="{'mini': mini, 'complete': !mini}">
      <div :class="{'left': mini}"
           @click="goPlayPage">
        <div :class="{'img': mini, 'player': !mini}">
          <img :src="song.imgUrl"
               ref="rotate"
               alt="">
          <div v-if="mini">
            <span class="name">{{ song.name }}</span>
            <p ref="lyricLine"
                  class="singer">{{ song.singer }}</p>
          </div>
        </div>
      </div>
      <div class="lyric"
           v-if="!mini">
        <p ref="lyricLine">暂无歌词！</p>
      </div>
      <div :class="{'circle': mini, 'page': !mini}"
           @click="Play">
        <van-circle v-model="currentTime"
                    color="#07c160"
                    fill="#fff"
                    size="40px"
                    :rate="durationTime"
                    layer-color="#ebedf0"
                    :stroke-width="30">
          <i class="fa  fa-lg"
             :class="{'fa-play': !play, 
                      'fa-pause': play,
                      'playbtn': mini,
                      'play-btn': !mini}"
             aria-hidden="true">
            <audio ref="audio"
                   id="song"
                   preload="metadata"
                   loop="loop"
                   :src="song.url" />
          </i>
        </van-circle>
      </div>

    </div>
  </div>
</template>

<script>
import { Toast, Circle } from 'vant';
import axios from 'axios';
import Lyric from 'lyric-parser';
export default {
  name: 'Player',
  data () {
    return {
      play: false,
      mini: true,
      id: '',
      song: {
        imgUrl: '',
        name: '',
        singer: '',
        url: ''
      },
      list: [],
      currentTime: 0,
      durationTime: 0,
      currentLyric: null,
      currentLineNum: 0
    }
  },
  components: {
    [Toast.name]: Toast,
    [Circle.name]: Circle
  },
  methods: {
    async Play () {
      /* eslint-disable no-console */
      this.id = this.$store.state.musicId;
      let id = this.id;
      if (id === '') {
        let lyrics = await this.getLyrics('467952048');
        this.currentLyric = new Lyric(lyrics.data.lrc.lyric, this.handleLyric);
        if (this.play) {
          this.currentLyric.play();
        }
        this.playMusic(this.$store.state.song.url);
      } else {
        let res = await this.checkUrl(id);
        if (res.data.success) {
          await axios.all([this.getUrl(id), this.getDetail(id), this.getLyrics(id)])
            .then(axios.spread((url, detail, lyrics) => {
              let song = {
                imgUrl: detail.data.songs[0].al.picUrl,
                name: detail.data.songs[0].name,
                singer: detail.data.songs[0].ar[0].name,
                url: url.data.data[0].url
              };
              if (this.currentLyric) {
                this.currentLyric.stop();
              }
              this.currentLyric = new Lyric(lyrics.data.lrc.lyric, this.handleLyric);
              if (this.play) {
                this.currentLyric.play();
              }
              this.playMusic(song.url);
              this.$store.commit('setSong', song);
              this.song = this.$store.state.song;
            }));
        } else {
          this.$toast("对不起，暂无版权！");
        }
      }
    },
    playMusic (url) {
      if (this.play) {
        this.$refs.audio.pause();
        this.$refs.audio.src = '';
        this.play = false;
        this.$refs.rotate.style.animationPlayState = 'paused';
      } else {
        this.$refs.audio.src = url;
        this.$refs.audio.load();
        this.$nextTick(function () {
          this.$refs.audio.play();
          this.play = true;
          this.$refs.rotate.style.animationPlayState = 'running';
        });
      }
      if (this.currentLyric) {
        this.currentLyric.togglePlay();
      }
      this.$store.state.play = this.play;
    },
    checkUrl (id) {
      return this.$axios.get('/check/music?id=' + id);
    },
    getUrl (id) {
      return this.$axios.get('/song/url?id=' + id);
    },
    getDetail (id) {
      return this.$axios.get('/song/detail?ids=' + id);
    },
    getLyrics (id) {
      return this.$axios.get('/lyric?id=' + id);
    },
    goPlayPage () {
      this.mini = false;
      this.$store.commit('setMini', this.mini);
      this.$router.push('/play');
    },
    addEventListeners () {
      this.$refs.audio.addEventListener('timeupdate', this._currentTime);
      this.$refs.audio.addEventListener('canplay', this._durationTime);
      return this.$refs.audio.duration;
    },
    _currentTime () {
      this.currentTime = parseInt(this.$refs.audio.currentTime)
    },
    _durationTime () {
      this.durationTime = parseInt(this.$refs.audio.duration)
    },
    handleLyric ({ lineNum, txt }) {
      this.currentLineNum = lineNum;
      this.$refs.lyricLine.innerText = txt;
    }
  },
  computed: {
    isPlay () {
      return this.$store.state.play;
    },
    idChange () {
      return this.$store.state.id;
    },
    getList () {
      return this.$store.state.list;
    },
    getMini () {
      return this.$store.state.mini;
    },
    getSong () {
      return this.$store.state.song;
    }
  },
  mounted () {
    this.song = this.$store.state.song;
    this.play = this.$store.state.play;
    this.mini = this.$store.state.mini;
    this.addEventListeners();
  },
  watch: {
    isPlay: {
      handler (newVal) {
        this.Play();
        this.play = newVal;
      },
      deep: true
    },
    getMini: {
      handler (newVal) {
        this.mini = newVal;
      }
    },
    getSong: {
      handler (newVal) {
        this.song = newVal;
      }
    },
    currentTime: {
      handler(newVal) {
        if (newVal === this.durationTime) {
          console.log("finish");
          this.currentLyric.seek(0);
        }
      }
    }
  }
}
</script>

<style scoped>
.music-player {
  padding: 0;
  margin: 0;
  height: 93%;
  background: linear-gradient(91deg, #f1eefc, #41b883 70%, #a5bcff);
}

.miniplayer {
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 414px;
  height: 60px;
}

.mini {
  position: fixed;
  background: #eee;
}

.complete {
  height: 90%;
  position: relative;
}

.left {
  width: 85%;
}

.img > img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 5px;
  float: left;
  margin-left: 10%;
  margin-top: 8.5%;
  animation: animations1 10s linear infinite forwards;
  animation-play-state: paused;
}

.name {
  padding-top: 10px;
  padding-left: 25%;
  font-size: 16px;
  font-weight: bold;
  display: block;
  width: 80%;
}

.singer {
  margin: 0;
  padding-top: 5px;
  font-size: 12px;
  width: 80%;
}

.lyric {
  width: 100%;
  text-align: center;
  top: 80%;
  position: absolute;
}

.circle {
  margin-top: 10px;
}

.playbtn {
  position: relative;
  left: 3%;
  top: 30%;
}

.player {
  margin: 0 auto;
  position: absolute;
  top: 25%;
  left: 20%;
  width: 15em;
  height: 15em;
  border-radius: 240px;
  transform: rotate(45deg);
  border: 2px solid #131313;
  box-shadow: 0 0 0 30px #343935;
  opacity: 0.7;
}

.player > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(0deg);
  width: 240px;
  height: 240px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid #000;
  border-radius: 200px;
  animation: animations1 10s linear infinite forwards;
  animation-play-state: paused;
}

@keyframes animations1 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.page {
  position: absolute;
  margin-left: 45%;
  bottom: 0px;
}

.play-btn {
  position: relative;
  left: 3%;
  top: 26%;
}
</style>
