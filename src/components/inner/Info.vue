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
      <el-radio-group v-model="labelPosition" size="small">
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="name">
            <el-input v-model="user" disabled></el-input>
        </el-form-item>
        <el-form-item label="password">
            <el-input placeholder="******" disabled></el-input>
        </el-form-item>
        <el-form-item label="please enter old password">
            <el-input v-model="old_password"></el-input>
        </el-form-item>
        <el-form-item label="new password">
            <el-input v-model="new_password"></el-input>
        </el-form-item>
        <el-form-item label="repeat password">
            <el-input v-model="repeat"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="change_info">submit</el-button>
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
  name: 'Info',
  data () {
    return {
      user: '',
      old_password: '',
      new_password: '',
      repeat: '',
      labelPosition: 'top'
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
  },
  methods: {
    change_info: function () {
      if (this.repeat !== this.new_password) {
        this.$message.error('error, password not same')
      } else {
        this.axios.post('/lethe/info/change', {
          user_id: this.$store.state.user_id,
          old_password: this.old_password,
          new_password: this.new_password
        })
          .then((response) => {
            if (response.data.code === '0') {
              this.$store.state.user = this.user
              this.$store.state.user_id = response.data.data
              this.$message({
                message: 'change success',
                type: 'success'
              })
            } else {
              this.$message.error(response.data.message)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
#name_info{
    text-align: left;
}
</style>
