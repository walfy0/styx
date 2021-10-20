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
      <el-calendar v-model="value">
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
            {{ data.day.split('-').slice(1).join('-') === '10-25' ? '💌' : '' }}
          </p>
        </template>
      </el-calendar>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import StyxHeader from '../common/header.vue'
import StyxAside from '../common/aside.vue'
export default {
  components: { StyxHeader, StyxAside },
  name: 'CountDown',
  data () {
    return {
      user: 'welcome',
      password: '',
      order_list: [],
      drawer: false,
      direction: 'btt',
      message: '4'
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
    this.axios.post('/lethe/order/list', {
      page: 1,
      page_size: 20
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
        if (response.data.code === '0') {
          this.$message({
            message: 'buy success',
            type: 'success'
          })
        } else {
          this.$message.error(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scope>
.is-selected {
    color: #1989FA;
  }
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
