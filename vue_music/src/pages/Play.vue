<template>
  <van-nav-bar :left-text="name"
               left-arrow
               class="head"
               @click-left="onClickLeft">
  </van-nav-bar>
</template>

<script>
import { NavBar } from 'vant';
export default {
  name: 'Play',
  data () {
    return {
      name: '',
      mini: false
    }
  },
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft () {
      this.mini = !this.mini;
      this.$store.commit('setMini', this.mini);
      this.$router.go(-1);
    }
  },
  mounted () {
    this.name = this.$store.state.song.name;
    this.mini = this.$store.state.mini;
  }
}
</script>

<style scoped>
.head {
  background: linear-gradient(91deg, #f1eefc, #41b883 70%, #a5bcff);
  font-size: 16px;
  height: 7%;
}

.van-nav-bar__text {
  color: rgba(8, 0, 0, 0.5);
}
</style>
