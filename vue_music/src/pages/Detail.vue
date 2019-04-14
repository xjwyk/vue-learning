<template>
  <div class="detail">
    <Header></Header>
    <SheetPage></SheetPage>
    <Player></Player>
  </div>
</template>

<script>
import Header from '../components/content/Header';
import SheetPage from '../components/content/SheetPage';
import Player from '../components/content/Player';
export default {
  name: "Rank",
  components: {
    Header,
    SheetPage,
    Player
  }
}
</script>

<style scoped>
.detail {
  margin-top: 46px;
}
</style>
