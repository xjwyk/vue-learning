<template>
  <div>
    <ul class="rank">
      <li :class="{rankList: index < 4 , raw: index > 3 || index == 11, }"
          v-for="(detail, index) in this.detailData"
          :key="index">
        <div class="rankTitle"
             v-if="index == 0">官方榜</div>
        <div class="rankListItem_official"
             @click="setId(detail.id)"
             v-if="index < 4">
          <div class="coverImg">
            <img v-lazy="detail.coverImgUrl">
            <span>{{ detail.updateFrequency }}</span>
          </div>
          <div class="detail">
            <span v-for="(item, i) in detail.tracks"
                  :key="i">
              {{ i + 1 }}.{{ item.first }}-{{ item.second }}
            </span>
          </div>
        </div>
        <div class="rankTitle"
             v-if="index == 4">推荐榜</div>
        <div class="rankTitle"
             v-if="index == 10">全球榜</div>
        <div class="rankTitle"
             v-if="index == 16">更多榜单</div>
        <div class="rankListItem_recommend" @click="setId(detail.id)">
          <div :class="{hidden_box: 
                                  index  == 5 || index == 6 || 
                                  index == 11 || index == 12 || 
                                  index == 17 || index == 18}">
          </div>
          <div class="coverImg"
               v-if="index > 3">
            <img v-lazy="detail.coverImgUrl">
            <span>{{ detail.updateFrequency }}</span>
            <p>{{ detail.name }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Lazyload, Row, Col } from 'vant';
export default {
  name: 'RankList',
  data () {
    return {
      detailData: []
    }
  },
  components: {
    [Lazyload.name]: Lazyload,
    [Row.name]: Row,
    [Col.name]: Col
  },
  methods: {
    setId(id) {
      this.$store.commit('setSheetId', id);
      this.$router.push({
        path: `/rank/detail/${id}`
      });
    }
  },
  mounted () {
    this.$axios
      .get('/toplist/detail')
      .then(res => res.data)
      .then(data => {
        this.detailData = data.list;
      });
  },
}
</script>

<style scoped>
.rank {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

.raw {
  width: 31.3%;
  margin: 1%;
}

.rankList {
  width: 100%;
  height: auto;
  padding: 1%;
  border-radius: 5px;
}

.rankTitle {
  width: 100%;
  margin-bottom: 10px;
}

.rankListItem_official {
  display: flex;
  flex-direction: row;
}

.coverImg {
  width: 100px;
  height: 130px;
}

.coverImg > img {
  height: 100px;
  border-radius: 5px;
}

.coverImg > span {
  position: relative;
  color: #fff;
  font-size: 12px;
  left: 5px;
  bottom: 25px;
  text-align: center;
}

.coverImg > p {
  position: relative;
  margin: 0px;
  top: -15px;
  font-size: 12px;
}

.detail {
  display: flex;
  height: 100px;
  margin-left: 10px;
  flex-direction: column;
}

.detail > span {
  display: block;
  margin-top: 15px;
  font-size: 12px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.rankListItem_recommend {
  display: flex;
  flex-direction: column;
}

.hidden_box {
  height: 31px;
}
</style>
