<template>
  <div>
    <div class="musicplayer">
      <img :src="this.imgUrl"
           alt="">
      <div class="right">
        <div class="text">
          <p>{{ this.title }}</p>
          <p>{{ this.singer }}</p>
        </div>
        <i class="fa  fa-lg playbtn"
           :class="{'fa-play': !this.play, 'fa-pause': this.play}"
           @click="changePlay"
           aria-hidden="true">
          <audio ref="audio"
                 id="song"
                 :src="this.url"></audio>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'Player',
  data () {
    return {
      play: false,
      id: '',
      imgUrl: require('../../assets/logo.png'),
      singer: '歌手',
      title: '歌名',
      url: ''
    }
  },
  components: {
    [Toast.name]: Toast
  },
  methods: {
    changePlay () {
      this.id = this.$store.state.musicId;
      /* eslint-disable no-console */
      if (this.id !== null) {
        this.$axios
          .get('/check/music?id=' + this.id)
          .then(res => {
            console.log(res.data.success);
            if (res.data.success) {
              this.getUrl(this.id);
              this.getDetail(this.id);
            }
          }).catch(() => {
            this.$toast("对不起，暂无版权！");
          });
      }
    },
    getUrl (id) {
      let player = document.getElementById('song');
      this.$axios
        .get('/song/url?id=' + id)
        .then(res => res.data)
        .then(data => {
          this.url = data.data[0].url;
          if (player !== null) {
            if (this.play) {
              player.pause();
              player.src = '';
              this.play = false;
            } else {
              player.src = this.url;
              player.load();
              this.$nextTick(function () {
                player.play();
                this.play = true;
              });
              this.$store.state.play = this.play;
            }
          }
        });


    },
    getDetail (id) {
      this.$axios
        .get('/song/detail?ids=' + id)
        .then(res => res.data)
        .then(data => {
          this.title = data.songs[0].name;
          this.singer = data.songs[0].ar[0].name;
          this.imgUrl = data.songs[0].al.picUrl;
        });
    }
  },
  computed: {
    isPlay () {
      return this.$store.state.play;
    }
  },
  watch: {
    isPlay: {
      handler (newVal) {
        this.$nextTick(function () {
          this.play = newVal;
          this.changePlay();
        });
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
  position: fixed;
  width: 100%;
  height: 60px;
  background: #eee;
}

.musicplayer > img {
  width: 50px;
  height: 50px;
  margin: 5px;
}

.right {
  width: 75%;
  height: 60px;
  display: flex;
}

.text {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.playbtn {
  position: relative;
  top: 40%;
}
</style>
