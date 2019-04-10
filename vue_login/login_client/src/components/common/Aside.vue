<template>
  <div class="el-aside">
    <el-menu 
      :default-active="$route.path" 
      router 
      :unique-opened="true"
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose"
      @select="selectItems"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/table">Table</el-menu-item>
          <el-menu-item index="/form">Form</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/page4">Page4</el-menu-item>
          <el-menu-item index="/page5">Page5</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/page6">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {

    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    selectItems(index) {}
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  display: flex;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
  }
}
</style>
