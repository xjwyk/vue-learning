<template>
  <div>
    <div class="miniplayer">
      <div class="left"
           @click="goPlayPage"
           v-if="mini">
        <div class="img">
          <img :src="this.song.imgUrl"
               alt="">
          <span class="name">{{ this.song.name }}</span>
          <span class="singer">{{ this.song.singer }}</span>
        </div>
      </div>
      <div :class="{'circle': this.mini, 'page': !this.mini}"
           @click="Play">
        <van-circle v-model="currentTime"
                    color="#07c160"
                    fill="#fff"
                    size="40px"
                    layer-color="#ebedf0"
                    :stroke-width="30">
          <i class="fa  fa-lg"
             :class="{'fa-play': !this.play, 
                      'fa-pause': this.play,
                      'playbtn': this.mini,
                      'play-btn': !this.mini}"
             aria-hidden="true">
            <audio ref="audio"
                   id="song"
                   @canplay="getDuration"
                   loop="loop"
                   :src="this.song.url" />
          </i>
        </van-circle>
      </div>

    </div>
    <div class="playPage"
         v-if="!mini">
      <div class="player">
        <img :src="this.song.imgUrl"
             ref="rotate"
             alt="">
      </div>
      <div class="lyric"></div>
    </div>
  </div>
</template>

<script>
import { Toast, Circle } from 'vant';
import axios from 'axios';
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
      currentTime: 0
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
      let res = await this.checkUrl(id);
      if (res.data.success) {
        await axios.all([this.getUrl(id), this.getDetail(id)])
          .then(axios.spread((url, detail) => {
            let song = {
              imgUrl: detail.data.songs[0].al.picUrl,
              name: detail.data.songs[0].name,
              singer: detail.data.songs[0].ar[0].name,
              url: url.data.data[0].url
            }
            if (this.play) {
              this.$refs.audio.pause();
              this.$refs.audio.src = '';
              this.play = false;
              if (!this.mini) {
                this.$refs.rotate.style.animationPlayState = 'paused';
              }
            } else {
              this.$refs.audio.src = song.url;
              this.$refs.audio.load();
              this.$nextTick(function () {
                this.$refs.audio.play();
                this.play = true;
                if (!this.mini) {
                  this.$refs.rotate.style.animationPlayState = 'running';
                }
                console.log('updated');
              });
            }
            this.$store.commit('setSong', song);
            this.song = this.$store.state.song;
            this.$store.state.play = this.play;
          }));
      } else {
        this.$toast("对不起，暂无版权！");
      }
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
    goPlayPage () {
      this.mini = false;
      this.$store.commit('setMini', this.mini);
      // eslint-disable-next-line no-console
      console.log(this.mini);
      this.$router.push('/play');
    },
    getDuration () {
      console.log(this.$refs.audio.duration);
      this.duration = this.$refs.audio.duration;
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
    if (!this.mini) {
      if (this.play) {
        this.$refs.rotate.style.animationPlayState = 'paused';
      } else {
        this.$refs.rotate.style.animationPlayState = 'running';
      }
    }
    // eslint-disable-next-line no-console
    console.log(this.mini);
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
    }
  },
}
</script>

<style scoped>
.miniplayer {
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: fixed;
  width: 100%;
  height: 60px;
  background: #eee;
}

.left {
  width: 85%;
}

.img > img {
  width: 50px;
  height: 50px;
  margin: 5px;
  float: left;
}

.name {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
  display: block;
  width: 80%;
  float: left;
}

.singer {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 12px;
  width: 80%;
}

.circle {
  margin-top: 10px;
}

.playbtn {
  position: relative;
  left: 3%;
  top: 30%;
}

.playPage {
  height: 100%;
}

.player {
  margin: 0 auto;
  margin-top: 30%;
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

.lyric {
  height: 250px;
}

.page {
  margin-left: 45%;
  margin-top: 10px;
}

.play-btn {
  position: relative;
  left: 3%;
  top: 26%;
}
</style>
