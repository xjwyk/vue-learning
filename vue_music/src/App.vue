<template>
  <div id="app">
    <keep-alive include="Player">
      <router-view></router-view>
    </keep-alive>
    <Player></Player>
  </div>
</template>

<script>
import Player from './components/content/Player';
export default {
  name: 'app',
  components: {
    Player
  }
}
</script>

<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

html,
body,
#app {
  height: 100%;
  width: 414px;
}
</style>
