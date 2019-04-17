<template>
  <div class="main">
    <div class="tabs">
      <van-tabs v-model="active"
                @click="onClick"
                :animated="true"
                :sticky="true"
                :offset-top="60"
                swipeable>
        <van-tab title="排行榜">
          <RankList></RankList>
        </van-tab>
        <van-tab title="推荐">
          <Banner></Banner>
          <Sheet></Sheet>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vant';
import Banner from './content/Banners';
import RankList from './content/RankList';
import Sheet from './content/Sheet';
export default {
  name: "Main",
  data () {
    return {
      active: 1,
    }
  },
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    Banner,
    RankList,
    Sheet
  },
  methods: {
    onClick(index) {
      this.active = index;
      if (index === 1) {
        this.$router.push('/recommend');
      }
      if (index === 0) {
        this.$router.push('/rank');
      }
    },
    getRouter: function() {
    }
  },
  mounted() {
    let info = this.$router.history.current.name;
    if (info === 'rank') {
      this.active = 0;
    } else {
      this.active = 1;
    }
  },
}
</script>

<style>
.tabs {
  margin-top: 60px;
  margin-bottom: 80px;
}
</style>

