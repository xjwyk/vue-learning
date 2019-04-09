<template>
  <el-container class="home">
    <Header></Header>
    <el-container class="container" style="margin-right: 0px">
      <Aside></Aside>
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

<style scoped>

</style>

