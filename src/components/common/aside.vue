<template>
  <el-menu
    default-active="$route.path"
    class="el-menu-vertical-demo">
    <el-menu-item index="home" @click.native="home">
        <i class="el-icon-menu"></i>
        <span slot="title">home</span>
    </el-menu-item>
    <el-menu-item index="blog" @click.native="blog">
        <i class="el-icon-document"></i>
        <span slot="title">blog</span>
    </el-menu-item>
    <el-menu-item index="count down" @click.native="count_down">
        <i class="el-icon-date"></i>
        <span slot="title">count down</span>
    </el-menu-item>
    <el-menu-item index="order" @click.native="order">
        <i class="el-icon-goods"></i>
        <span slot="title">order</span>
    </el-menu-item>
    <el-submenu index="4">
        <template slot="title">
            <i class="el-icon-s-promotion"></i>
            <span>hermes</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="hermes_service" @click.native="hermes_service">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">service</span>
            </el-menu-item>
            <el-menu-item index="hermes_client" @click.native="hermes_client">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">client</span>
            </el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
        <template slot="title">
            <i class="el-icon-setting"></i>
            <span>personal center</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="info" @click.native="info">
              <i class="el-icon-key"></i>
              <span slot="title">information</span>
            </el-menu-item>
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
    order () {
      this.$router.push({
        path: 'order'
      })
    },
    count_down () {
      this.$router.push({
        path: 'count_down'
      })
    },
    hermes_service () {
      this.$router.push({
        path: 'hermes_service'
      })
    },
    hermes_client () {
      this.$router.push({
        path: 'hermes_client'
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
