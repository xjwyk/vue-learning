<template>
  <div>
    <div class="cover">
      <img :src="this.imgUrl"
           alt="">
    </div>
    <div class="songList">
      <ul>
        <li class="songitem"
            v-for="(item, index) in this.songs"
            :key="index"
            @click="setId(item.id)">
          <div class="index">{{ index+1 }}</div>
          <div class="song">
            <div>{{ item.name }}</div>
            <span>{{ item.ar[0].name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SheetPage',
  data () {
    return {
      id: '19723756',
      imgUrl: '',
      songs: [],
      play: false
    }
  },
  methods: {
    setId(id) {
      this.$store.commit('setMusicId', id);
      this.play = !this.play;
      this.$store.commit('setPlay', this.play);
      /* eslint-disable no-console */
      console.log(id);
    }
  },
  mounted () {
    this.id = this.$store.state.sheetId;
    
    console.log(this.id);
    let str = '/playlist/detail?id=' + this.id;
    this.$axios
      .get(str)
      .then(res => res.data)
      .then(data => {
        this.imgUrl = data.playlist.coverImgUrl;
        this.songs = data.playlist.tracks;
        console.log(this.songs[0]);
      })
  },
}
</script>

<style scoped>
.cover {
  height: 350px;
}

.cover > img {
  height: 100%;
  width: 100%;
}

.songitem {
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eee;
  margin-left: 5px;
}

.index {
  line-height: 50px;
}

.song {
  margin-left: 10px;
}

.song > div {
  margin-top:10px;
}

.song > span {
  font-size: 12px;
  color: #aaa;
}
</style>
