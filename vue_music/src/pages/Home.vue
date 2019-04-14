<template>
  <div class="main">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from '../components/Header';
import Main from '../components/Main';
export default {
  name: "Home",
  components: {
    Header,
    Main
  }
}
</script>

<style scoped>
.main {
  height: 100%;
}
</style>
