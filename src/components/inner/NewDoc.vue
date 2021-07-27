<template>
<el-container>
  <el-header>
    <StyxHeader></StyxHeader>
  </el-header>
    <div>
      <p id="title_str">title</p>
      <el-input v-model="doc_title" placeholder="title" id="title"></el-input>
    </div>
      <mavon-editor id="editor" v-model="doc_content"/>
    <div id="add_doc" v-if="can_write">
    <el-button type="primary" @click="create" id="create">create</el-button>
    <el-button type="info" @click="cancel" id="cancel">cancel</el-button>
    </div>
</el-container>
</template>

<script>
import StyxHeader from '../common/header.vue'
export default {
  components: {StyxHeader},
  name: 'NewDoc',
  data () {
    return {
      user: '',
      user_id: 0,
      doc_id: 0,
      doc_title: '',
      doc_content: '',
      can_write: true
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
    this.user_id = this.$store.state.user_id
    this.doc_id = this.$store.doc_id
    this.doc_title = this.$store.doc_title
    this.doc_content = this.$store.doc_content
    if (this.$route.query.write) {
      this.can_write = false
    }
  },
  methods: {
    create () {
      this.$store.doc_content = ''
      this.$store.doc_title = ''
      this.$store.doc_id = 0
      this.axios.post('/lethe/doc/update', {
        header: this.doc_title,
        content: this.doc_content,
        id: this.doc_id,
        creator: this.user_id
      }).then(response => {
        this.$message({
          message: 'create success',
          type: 'success'
        })
      }).catch(error => {
        console.log(error)
      })
      this.$router.push({
        path: 'blog'
      })
      window.location.reload()
    },
    cancel () {
      this.$store.doc_content = ''
      this.$store.doc_title = ''
      this.$store.doc_id = 0
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
#add_doc{
  text-align: center;
}
</style>
