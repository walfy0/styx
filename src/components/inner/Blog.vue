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
      <div>
        <el-button id="add_doc" type="primary" @click="AddDoc">new doc</el-button>
        <el-table
        :data="doc_list">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="status" label="status"></el-table-column>
        <el-table-column prop="header" label="title"></el-table-column>
        <el-table-column prop="content" show-overflow-tooltip="true" label="content"></el-table-column>
        <el-table-column prop="ctime" label="create_time"></el-table-column>
        <el-table-column prop="mtime" label="modify_time"></el-table-column>
        <el-table-column>
        <template slot-scope="scope">
        <el-button @click="viewDoc(scope.row)" type="text" size="small">view</el-button>
        <el-button @click="editDoc(scope.row)" type="text" size="small">edit</el-button>
        </template>
        </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total" id="pagi">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import StyxHeader from '../common/header.vue'
import StyxAside from '../common/aside.vue'
export default {
  components: { StyxHeader, StyxAside },
  name: 'Blog',
  data () {
    return {
      user: 'welcome',
      doc_list: [],
      total: 0
    }
  },
  mounted: function () {
    this.user = this.$store.state.user
    this.axios.post('/lethe/doc/list', {
      page: 1,
      page_size: 20
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
    AddDoc () {
      this.$store.doc_content = ''
      this.$store.doc_title = ''
      this.$store.doc_id = 0
      this.$router.push({
        path: 'new_doc'
      })
    },
    editDoc (row) {
      this.$store.doc_content = row.content
      this.$store.doc_title = row.header
      this.$store.doc_id = row.id
      this.$router.push({
        path: 'new_doc'
      })
    },
    viewDoc (row) {
      this.$store.doc_content = row.content
      this.$store.doc_title = row.header
      this.$store.doc_id = row.id
      this.$router.push({
        path: 'new_doc',
        query: {
          write: true
        }
      })
    }
  }
}
</script>

<style scope>
#add_doc {
  float: right;
}
#pagi {
  margin-top: 20px;
  float: right;
}
</style>
