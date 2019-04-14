<template>
  <div class="header">
    <div>
      <van-nav-bar title="vue music"
                   class="nav-bar">
        <van-icon name="search"
                  slot="right"
                  color="#fff"
                  size="2em"
                  @click="onSearch" />
      </van-nav-bar>
    </div>
    
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant';
export default {
  name: "Header",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods: {
    onSearch () {
      this.$router.push('/search');
    }
  },
}
</script>

<style>
.nav-bar {
  position: fixed;
  top:0;
  width: 100%;
  height: 60px;
  background: #41b883;
  text-align: center;
}

.nav-bar .van-nav-bar__title {
  height: 60px;
  line-height: 60px;
  font-size: 6vw;
  color: #fff;
}

.nav-bar .van-nav-bar__right {
  height: 55px;
}

.van-search {
  height: 60px;
}
</style>
