<template>
  <el-carousel class="picture" indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img :src="item.src" alt="img">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: require('../../../assets/img01.jpg')
        },
        {
          id: 2,
          src: require('../../../assets/img02.jpg')
        },
        {
          id: 3,
          src: require('../../../assets/img03.jpg')
        },
        {
          id: 4,
          src: require('../../../assets/img04.jpg')
        },
        {
          id: 5,
          src: require('../../../assets/img05.jpg')
        }
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
.picture {
  margin: auto; 
  position: absolute; 
  top: 0; 
  left: 0; 
  bottom: 0; 
  right: 0; 
  height: 600px;
  .el-carousel__item {
    height: 300px;
    margin: 0;
    img {
      width: 100%;
      height: 255px;
      overflow: hidden;
      position: relative;
      border-radius: 4px 4px 0 0;
    }
    img {
      height: 100%;
      width: auto;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

</style>