<template>
  <section class="content-container">
    <div class="grid-content bg-purple-light">
      <el-col :span="24" class="breadcrumb-container">
        <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </div>
  </section>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  background: #f1f2f7;
  flex:1;
  position: absolute;
  right: 0px;
  top: 60px;
  bottom: 0px;
  left: 230px;
  overflow-y: scroll;
  min-width: 800px;
  padding: 20px;
  .breadcrumb-container {
    margin-bottom: 15px;
    .title {
      width: 200px;
      float: left;
      color: #475669;
    }
    .breadcrumb-inner {
      float: right;
    }
  }
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
}
</style>
