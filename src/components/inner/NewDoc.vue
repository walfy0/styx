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
      <div>
        <p id="title_str">title</p>
        <el-input v-model="title" placeholder="title" id="title"></el-input>
      </div>
        <mavon-editor id="editor" v-model="value"/>
      <div>
      <el-button type="primary" @click="create" id="create">create</el-button>
      <el-button type="info" @click="cancel" id="cancel">cancel</el-button>
      </div>
</el-container>
</template>

<script>
import global from '../tool/global.vue'
export default {
  name: 'NewDoc',
  data () {
    return {
      title: '',
      user: '',
      user_id: 0,
      value: ''
    }
  },
  mounted: function () {
    this.user = global.user
    this.user_id = global.user_id
  },
  methods: {
    create () {
      this.axios.post('/lethe/doc/update', {
        header: this.title,
        content: this.value,
        creator: this.user_id
      }).then(response => {
        global.user = 0
        global.password = ''
      }).catch(error => {
        console.log(error)
      })
      this.$router.push({
        path: 'blog'
      })
    },
    cancel () {
      this.$router.push({
        path: 'blog'
      })
    }
  }
}
</script>

<style scoped>
#create{
  display: inline-block;
  text-align: center;
  margin: 20px;
}
#cancel{
  display: inline-block;
  text-align: center;
  margin: 20px;
}
#title_str{
  text-align: center;
  font-size: 20px;
}
#title, #editor{
  margin-top: 30px;
}
</style>
