<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo">
    <el-menu-item index="1" @click.native="home">
        <i class="el-icon-menu"></i>
        <span slot="title">home</span>
    </el-menu-item>
    <el-menu-item index="2" @click.native="blog">
        <i class="el-icon-document"></i>
        <span slot="title">blog</span>
    </el-menu-item>
    <el-submenu index="3">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>other</span>
        </template>
        <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">love</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-setting"></i>
            <span>personal center</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="4-1" @click.native="info">information</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'StyxAside',
  data () {
    return {
      user: 'welcome',
      password: ''
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
  },
  methods: {
    blog () {
      this.$router.push({
        path: 'blog'
      })
    },
    home () {
      this.$router.push({
        path: 'home'
      })
    },
    info () {
      this.$router.push({
        path: 'info'
      })
    }
  }
}
</script>

<style scoped>
.el-menu-item{
  font-size: 18px;
}
.el-menu-vertical-demo{
  overflow-y: auto;
}
</style>
