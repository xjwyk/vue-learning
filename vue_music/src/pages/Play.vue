<template>
  <van-nav-bar :left-text="name"
               left-arrow
               @click-left="onClickLeft">
  </van-nav-bar>
</template>

<script>
import { NavBar } from 'vant';
export default {
  name: 'Play',
  data() {
    return {
      name: '',
      mini: false
    }
  },
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft() {
      this.mini = !this.mini;
      this.$store.commit('setMini', this.mini);
      // eslint-disable-next-line no-console
      console.log(this.mini);
      this.$router.go(-1);
    }
  },
  mounted() {
    this.name = this.$store.state.song.name;
    this.mini = this.$store.state.mini;
  }
}
</script>

<style scoped>
</style>
