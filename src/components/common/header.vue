<template>
    <div>
    <el-button type="text" @click="home" id="lethe">lethe</el-button>
    <el-dropdown>
      <span class="el-dropdown-link">
      {{ user }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="logout">logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
</template>

<script>
export default {
  name: 'StyxHeader',
  data () {
    return {
      user: 'welcome'
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
  },
  methods: {
    home () {
      this.$router.push({
        path: 'home'
      })
    },
    logout () {
      this.axios.get('/lethe/logout').then(response => {
        this.$store.state.user = 0
      }).catch(error => {
        console.log(error)
      })
      this.$router.push({
        path: 'login'
      })
    }
  }
}
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 70px;
}
#lethe {
  float: left;
  font-size: 38px;
  color:rgb(69, 130, 243)
}
.el-dropdown, .el-dropdown-menu, .el-dropdown-menu {
  float: right;
  font-size: 18px;
}
</style>
