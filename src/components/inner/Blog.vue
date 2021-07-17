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
    <el-aside>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item index="1" @click.native="blog">
        <i class="el-icon-menu"></i>
        <span slot="title">blog</span>
      </el-menu-item>
      <el-submenu index="2">
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
    <el-main>
      <doc :doc_list="doc_list" :total="total" ref="./doc"/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import doc from './doc.vue'
import global from './../tool/global.vue'
export default {
  components: { doc },
  name: 'Blog',
  data () {
    return {
      user: 'welcome',
      doc_list: [],
      total: 0
    }
  },
  mounted: function () {
    this.user = global.user
    console.log(this.user)
    this.axios.post('/lethe/doc/list', {
      params: {
        page: 1,
        page_size: 20
      }
    }).then(response => {
      if (response.data.code === '0') {
        this.doc_list = response.data.data
        this.total = this.doc_list.length
      } else {
        console.log(response)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    logout () {
      this.axios.get('/lethe/logout').then().catch(error => {
        console.log(error)
      })
      this.$router.push({
        path: 'login'
      })
    }
  }
}
</script>

<style scope>

</style>
