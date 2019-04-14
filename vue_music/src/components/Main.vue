<template>
  <div class="main">
    <div class="tabs">
      <van-tabs v-model="active">
        <van-tab title="排行榜">
          <RankList></RankList>
        </van-tab>
        <van-tab title="推荐">
          <Banner></Banner>
          <Sheet></Sheet>
        </van-tab>
      </van-tabs>
      <Player></Player>
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vant';
import Banner from './content/Banners';
import RankList from './content/RankList';
import Sheet from './content/Sheet';
import Player from './content/Player';
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
    Sheet,
    Player
  }
}
</script>

<style>
.tabs {
  margin-top: 60px; 
  margin-bottom: 80px;
}
</style>

