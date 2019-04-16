<template>
  <div class="detail">
    <Header></Header>
    <SheetPage></SheetPage>
  </div>
</template>

<script>
import Header from '../components/content/Header';
import SheetPage from '../components/content/SheetPage';

export default {
  name: "Rank",
  components: {
    Header,
    SheetPage
  }
}
</script>

<style scoped>
.detail {
  margin-top: 46px;
}
</style>
