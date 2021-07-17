<template>
    <div>
        <el-button type="primary" @click="AddDoc">new doc</el-button>
        <el-table
        :data="doc_list">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="status" label="status"></el-table-column>
        <el-table-column prop="header" label="title"></el-table-column>
        <el-table-column prop="content" label="content"></el-table-column>
        <el-table-column prop="creator" label="creator"></el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total" id="pagi">
        </el-pagination>
    </div>
</template>

<script>
export default {
  name: 'Doc',
  data () {
    return {
      user: 'welcome'
    }
  },
  methods: {
    AddDoc () {
      this.$router.push({
        path: 'new_doc'
      })
    }
  },
  props: ['doc_list', 'total']
}
</script>

<style scoped>
.el-button {
  float: right;
}
#pagi {
  margin-top: 20px;
  float: right;
}
</style>
