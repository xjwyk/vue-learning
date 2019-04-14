<template>
  <div class="sheet">
    <h4 class="title">推荐歌单</h4>
    <ul class="recommend_sheet">
      <li class="sheet_item"
          v-for="(item, index) in this.sheetData"
          :key="index"
          @click="setId(item.id)">
        <img v-lazy="item.picUrl" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Lazyload } from 'vant';
export default {
  name: 'Sheet',
  data () {
    return {
      sheetData: []
    }
  },
  components: {
    [Lazyload.name]: Lazyload
  },
  methods: {
    setId(id) {
      this.$store.commit('setSheetId', id);
      this.$router.push('/detail');
    }
  },
  mounted () {
    this.$axios
      .get('/personalized')
      .then(res => res.data)
      .then(data => {
        this.sheetData = data.result;
      });
  },
}
</script>

<style scoped>
.sheet {
  margin: 10px;
}

.recommend_sheet {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.sheet_item {
  width: 30%;
  height: auto;
  margin: 1.6%;
}

.sheet_item > img {
  width: 100%;
  height: auto;
}

.sheet_item > span {
  font-size: 12px;
}
</style>
