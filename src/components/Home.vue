<template>
  <el-container>
  <el-header>
    <div id="lethe">lethe</div>
    <el-dropdown>
      <span class="el-dropdown-link">
      {{ user }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>info</el-dropdown-item>
        <el-dropdown-item @click.native="logout">logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
  <el-divider></el-divider>
  <el-container>
    <el-aside width=200px>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" @click.native="blog">
        <i class="el-icon-menu"></i>
        <span slot="title">blog</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import global from './tool/global.vue'
export default {
  name: 'Home',
  data () {
    return {
      user: 'welcome',
      password: ''
    }
  },
  mounted: function () {
    this.user = global.user
  },
  methods: {
    logout () {
      this.axios.get('/lethe/logout').then(response => {
        global.user = 0
        global.password = ''
      }).catch(error => {
        console.log(error)
      })
      this.$router.push({
        path: 'login'
      })
    },
    blog () {
      this.$router.push({
        path: 'blog'
      })
    }
  }
}
</script>

<style scope>
.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 70px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 50px;
  overflow-y: auto;
}

#lethe {
  float: left;
  font-size: 28px;
  color:rgb(69, 130, 243)
}

#header_left {
  margin: auto;
  border-radius: 4px;
}

.el-col{
  width: 10px;
  height: 10px;
}
.el-dropdown, .el-dropdown-menu, .el-dropdown-menu {
  float: right;
  font-size: 18px;
}
.el-menu {
  overflow-y: auto;
}
.el-menu-item {
  font-size: 18px;
}
</style>
