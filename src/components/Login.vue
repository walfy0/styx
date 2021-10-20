<template>
  <div id="login_div">
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div style="text-align: center">
        </div>
        <h2 class="login-title color-main">登录页面</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="Login"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="Login"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    Login: function () {
      this.axios.post('/lethe/login', {
        name: this.loginForm.username,
        password: this.loginForm.password
      })
        .then((response) => {
          if (response.data.code === '0') {
            this.$store.state.user = this.loginForm.username
            this.$store.state.user_id = response.data.data
            this.$router.push({
              path: '/home'
            })
            this.$message({
              message: 'login success',
              type: 'success'
            })
          } else {
            this.$message.error(response.data.message)
            console.log(response)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    Register: function () {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>

<style scoped>
#login_div{
  text-align: center;
  background-image: url('../assets/pixel-heart.png');
  background-size: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
}
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
