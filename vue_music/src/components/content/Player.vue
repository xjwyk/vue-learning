<template>
  <div>
    <div class="musicplayer">
      <div class="left"
           @click="goPlayPage">
        <div class="img">
          <img :src="this.song.imgUrl"
               alt="">
          <span class="name">{{ this.song.name }}</span>
          <span class="singer">{{ this.song.singer }}</span>
        </div>
      </div>
      <div class="circle"
           @click="Play">
        <van-circle v-model="currentTime"
                    color="#07c160"
                    fill="#fff"
                    size="40px"
                    layer-color="#ebedf0"
                    :stroke-width="30">
          <i class="fa  fa-lg playbtn"
             :class="{'fa-play': !this.play, 'fa-pause': this.play}"
             aria-hidden="true">
            <audio ref="audio"
                   id="song"
                   @canplay="getDuration"
                   loop="loop"
                   :src="this.song.url"></audio>
          </i>
        </van-circle>
      </div>

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
      isLoading: true,
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
            } else {
              this.$refs.audio.src = song.url;
              this.$refs.audio.load();
              this.$nextTick(function () {
                this.$refs.audio.play();
                this.play = true;
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
      this.$router.push('/play')
    },
    getDuration() {
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
    }
  },
  mounted () {
    this.song = this.$store.state.song;
    this.play = this.$store.state.play;
  },
  watch: {
    isPlay: {
      handler (newVal) {
        this.Play();
        this.play = newVal;
      },
      deep: true
    }
  },
}
</script>

<style scoped>
.musicplayer {
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
</style>
