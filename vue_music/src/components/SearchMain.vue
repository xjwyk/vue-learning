<template>
  <div>
    <form action="/">
      <van-search v-model="value"
                  placeholder="请输入搜索关键词"
                  show-action
                  @search="onSearch"
                  @cancel="onCancel" />
    </form>
    <div class="hots"
         v-if="!search">
      <p>热门搜索</p>
      <span v-for="(hot, index) in this.hots"
            :key="index"
            @click="hotSearch(hot.first)">
        {{hot.first}}
      </span>
    </div>
    <div class="results" v-if="search">
      <ul>
        <li class="resultitem"
            v-for="(item, index) in this.results"
            :key="index">
          <div class="index">{{ index+1 }}</div>
          <div class="result">
            <div>{{ item.name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
  nane: "SearchMain",
  data () {
    return {
      value: "",
      search: false,
      hots: [],
      results: []
    }
  },
  components: {
    [Search.name]: Search
  },
  methods: {
    onSearch () {
      this.$axios
        .get('/search?keywords=' + this.value)
        .then(res => res.data)
        .then(data => {
          // eslint-disable-next-line no-console
          console.log(data.result.songs);
          this.results = data.result.songs;
          this.search = true;
        });
    },
    hotSearch (first) {
      this.value = first;
      this.onSearch();
    },
    onCancel () {
      this.$router.go(-1);
    }
  },
  mounted () {
    this.$axios
      .get('/search/hot')
      .then(res => res.data)
      .then(data => {
        // eslint-disable-next-line no-console
        console.log(data.result.hots);
        this.hots = data.result.hots;
      });
  },
}
</script>

<style scoped>
.hots {
  margin: 10px;
}

.hots > p {
  font-weight: bold;
}

.hots > span {
  background: #eee;
  display: block;
  float: left;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  border-radius: 15px;
}

.resultitem {
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eee;
  margin-left: 5px;
}

.index {
  line-height: 50px;
}

.result {
  margin-left: 10px;
  line-height: 50px;
}

</style>
