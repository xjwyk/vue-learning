<template>
  <van-nav-bar title="标题"
               left-text="返回"
               left-arrow
               @click-left="onClickLeft">
  </van-nav-bar>
</template>

<script>
import { NavBar } from 'vant';
export default {
  name: 'Play',
  components: {
    [NavBar.name]: NavBar
  },methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
}
</script>

<style scoped>
</style>
