<template>
  <div>
    <div class="cover">
      <img :src="this.imgUrl"
           alt="">
    </div>
    <div class="songList">
      <ul class="songTitle">
        <li class="songitem"
            v-for="(item, index) in this.songs"
            :key="index"
            @click="setId(item)">
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
    setId (item) {
      this.$store.commit('setMusicId', item.id);
      this.play = true;
      let mini = false;
      this.$store.commit('setMini', mini);
      this.$store.commit('setPlay', this.play);
      this.$store.commit('setName', item.name);
      this.$router.push('/play');
    }
  },
  mounted () {
    this.id = this.$store.state.sheetId;
    let str = '/playlist/detail?id=' + this.id;
    this.$axios
      .get(str)
      .then(res => res.data)
      .then(data => {
        this.imgUrl = data.playlist.coverImgUrl;
        this.songs = data.playlist.tracks;
        let list = [];
        for (var i = 0; i < data.playlist.tracks.length; ++i) {
          list[i] = data.playlist.tracks[i].id;
        }
        this.$store.commit('setList', list);
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
  border-radius: 10px;
}

.songTitle {
  border-radius: 5px;
}

.songList {
  margin-bottom: 62px;
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
  margin-top: 10px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.song > span {
  display: block;
  font-size: 12px;
  color: #aaa;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

</style>
