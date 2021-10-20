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
    <el-main id="word">
      <p v-if="user==='two_sheep'">
        <h1>lethe</h1>
        希腊神话中的河流,为冥界的五条河之一<br>
        亡者到了冥界会被要求喝下忘河的河水，以忘却尘世间的事...<br>
        希望我们能忘却所有不开心<br>
      <br>
      <div id="time">我们在一起已经是<br><br>
      <span id="time_day">{{time.day}}</span>&nbsp;&nbsp;&nbsp;&nbsp;天&nbsp;&nbsp;&nbsp;&nbsp;
      <span id="time_hour">{{time.hour}}</span>&nbsp;&nbsp;&nbsp;&nbsp;小时&nbsp;&nbsp;&nbsp;&nbsp;
      <span id="time_minute">{{time.minute}}</span>&nbsp;&nbsp;&nbsp;&nbsp;分钟&nbsp;&nbsp;&nbsp;&nbsp;
      <span id="time_second">{{time.second}}</span>&nbsp;&nbsp;&nbsp;&nbsp;秒&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
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
      order_list: [],
      time: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
      }
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
    let _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      var date = new Date()
      Date.parse(date)
      date = parseInt(date / 1000) - 1603620000
      var time = {}
      time.second = date % 60
      date = parseInt(date / 60)
      time.minute = date % 60
      date = parseInt(date / 60)
      time.hour = date % 24
      date = parseInt(date / 24)
      time.day = date
      _this.time = time
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
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
.el-main {
  color: #333;
  text-align: center;
  line-height: 50px;
  overflow-y: auto;
}
.el-submenu__title{
  font-size: 18px;
}
#word {
  font-size: 25px;
}
#time {
  font-size: 30px;
  color: pink;
}
#time_day,#time_hour,#time_minute,#time_second{
  font-size: 50px;
}
</style>
