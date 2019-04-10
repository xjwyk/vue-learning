<template>
  <el-container class="home">
    <Header></Header>
    <el-container class="container" style="margin-right: 0px">
      <el-aside class="aside">
        <Aside></Aside>
      </el-aside>
      <Main></Main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '../components/common/Header';
import Aside from '../components/common/Aside';
import Main from '../components/common/Main';

export default {
  name: 'home',
  components: {
    Header,
    Aside,
    Main
  }
}
</script>

<style lang="scss" scoped>
body {
  min-width: 1000px;
}
.home {
  .el-container {
    height: 500px;
    .aside {
      max-width: 230px;
    } 
  }
}
</style>

