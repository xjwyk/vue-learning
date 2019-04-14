<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in this.banner"
                      :key="index">
        <img :src="image.imageUrl"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {Swipe, SwipeItem, Lazyload} from 'vant';
export default {
  data () {
    return {
      banner: []
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload
  },
  methods: {

  },
  mounted () {
    this.$axios
      .get('/banner')
      .then(res => res.data)
      .then(data => {
        this.banner = data.banners;
      });
  },
}
</script>

<style scoped>
.swipe {
  height: auto;
  margin: 10px;
  border-radius: 5px;
}

.swipe img {
  width: 100%;
  height: 100%;
}
</style>
