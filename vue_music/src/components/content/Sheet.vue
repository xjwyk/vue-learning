<template>
  <div class="sheet">
    <div class="title">推荐歌单</div>
    <ul class="recommend_sheet">
      <li class="sheet_item"
          v-for="(item, index) in this.sheetData"
          :key="index"
          @click="setId(item.id)">
        <div>
          <i class="fa fa-headphones headphones"
             aria-hidden="true">
            <span>{{item.playCount}}</span>
          </i>
        </div>
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
      sheetData: [],
      count: ''
    }
  },
  components: {
    [Lazyload.name]: Lazyload
  },
  methods: {
    setId (id) {
      this.$store.commit('setSheetId', id);
      this.$router.push({
        path: `/recommend/detail/${id}`
      });
    },
    formatDecimal (num, decimal) {
      num = num.toString()
      let index = num.indexOf('.')
      if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
      } else {
        num = num.substring(0)
      }
      return parseFloat(num).toFixed(decimal)
    }
  },
  mounted () {
    this.$axios
      .get('/personalized')
      .then(res => res.data)
      .then(data => {
        this.sheetData = data.result;
        for (let i = 0; i < this.sheetData.length; ++i) {
          let num = this.sheetData[i].playCount.toFixed(0);
          let numStr = num.toString();
          //大于8位数是亿
          if (numStr.length > 8) {
            this.sheetData[i].playCount = this.formatDecimal(num / 100000000, 1) + '亿';
          }
          //大于6位数是十万 (以10W分割 10W以下全部显示)
          else if (numStr.length > 5) {
            this.sheetData[i].playCount = this.formatDecimal(num / 10000, 1) + '万';
          }
        }
      });
  },
}
</script>

<style scoped>
.sheet {
  margin: 10px;
}

.title {
  margin: 10px;
  font-weight: bold;
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
  position: relative;
}

.headphones {
  color: #eee;
  position: absolute;
  right: 10%;
  top: 5%;
}

.headphones > span {
  font-size: 12px;
}

.sheet_item > img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.sheet_item > span {
  font-size: 12px;
  display: block;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
