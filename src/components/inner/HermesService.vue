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
        <el-form label-position="top" label-width="80px" size='small'>
        <el-form-item label="host">
            <el-input placeholder="139.196.100.116" disabled></el-input>
        </el-form-item>
        <el-form-item label="port">
            <el-input placeholder="1081" disabled></el-input>
        </el-form-item>
        <el-form-item label="encryption method">
            <el-select v-model="method" placeholder="method">
            <el-option label="rc4_md5" value="rc4_md5"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="running status">
          <el-switch
          v-model="status"
          disabled>
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" v-if="status===true" @click="restart">restart</el-button>
          <el-button type="primary" v-if="status===false" @click="start">start</el-button>
          <el-button type="info" v-if="status===true" @click="close">close</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import StyxHeader from '../common/header.vue'
import StyxAside from '../common/aside.vue'
export default {
  components: { StyxHeader, StyxAside },
  name: 'HermesService',
  data () {
    return {
      user: 'welcome',
      method: '',
      status: false
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
    this.axios.get('/lethe/hermes/status').then(response => {
      if (response.data.code === '0') {
        this.method = response.data.data.method
        this.status = response.data.data.status
      } else {
        console.log(response)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    start () {
      this.axios.post('/lethe/hermes/change', {
        hermes: 'service',
        command: 'start',
        encryp_method: this.method
      }).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: 'start success',
            type: 'success'
          })
        } else {
          this.$message.error(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
      window.location.reload()
    },
    restart () {
      this.axios.post('/lethe/hermes/change', {
        hermes: 'service',
        command: 'restart',
        encryp_method: this.method
      }).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: 'retart success',
            type: 'success'
          })
          this.status = true
        } else {
          this.$message.error(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
      window.location.reload()
    },
    close () {
      this.axios.post('/lethe/hermes/change', {
        hermes: 'service',
        command: 'close',
        encryp_method: this.method
      }).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: 'close success',
            type: 'success'
          })
          this.status = false
        } else {
          this.$message.error(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
      window.location.reload()
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
