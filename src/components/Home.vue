<template>
  <el-container>
  <el-header>
    <StyxHeader></StyxHeader>
  </el-header>
  <el-divider></el-divider>
  <el-container>
    <el-aside width="240px">
      <StyxAside></StyxAside>
    </el-aside>
    <el-main>
      <el-table
        :data="order_list">
        <el-table-column prop="id" label="order_id"></el-table-column>
        <el-table-column prop="status" label="status"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
        <el-table-column prop="count" label="count"></el-table-column>
        <el-table-column>
        <template slot-scope="scope">
        <el-button @click="order(scope.row)" type="text" size="small">buy</el-button>
        </template>
        </el-table-column>
        </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import StyxHeader from './common/header.vue'
import StyxAside from './common/aside.vue'
export default {
  components: { StyxHeader, StyxAside },
  name: 'Home',
  data () {
    return {
      user: 'welcome',
      password: '',
      order_list: []
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
    this.axios.post('/lethe/order/list', {
      params: {
        page: 1,
        page_size: 20
      }
    }).then(response => {
      if (response.data.code === '0') {
        this.order_list = response.data.data
        this.total = this.order_list.length
      } else {
        console.log(response)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    order (row) {
      this.axios.post('/lethe/order/create', {
        order_id: row.id,
        order_num: 1
      }).then(response => {
        this.$message({
          message: 'buy success',
          type: 'success'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scope>
.el-main {
  color: #333;
  text-align: center;
  line-height: 50px;
  overflow-y: auto;
}
.el-submenu__title{
  font-size: 18px;
}
</style>
