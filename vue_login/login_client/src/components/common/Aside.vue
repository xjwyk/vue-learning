<template>
  <el-container class="container aside">
    <el-aside width="230px">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">Form</el-menu-item>
              <el-menu-item index="1-2">Table</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">Page4</el-menu-item>
            <el-menu-item index="2-2">Page5</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      collapsed: this.$store.state.collapsed,
    }
  },
  methods: {
    handleopen() {},
    handleclose() {},
    handleselect() {},
    showMenu(i,status){
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
    }
  },
}
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
}
</style>
