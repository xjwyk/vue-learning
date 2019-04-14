<template>
  <div class="detail-header">
    <van-nav-bar title=""
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft">
      <van-icon name="search"
                slot="right" 
                @click="onSearch"/>
    </van-nav-bar>
  </div>
</template>

<script>
import {NavBar, Icon} from 'vant';
export default {
  name: 'Header',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSearch () {
      this.$router.push('/search');
    }
  },
  
}
</script>

<style scoped>
.detail-header {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
