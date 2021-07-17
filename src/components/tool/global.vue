<script>
export default {
  data () {
    return {
      user: '',
      user_id: 0,
      password: ''
    }
  },
  created () {
    if (window.localStorage.getItem('list')) {
      // this.$store.replaceState()替换 store 的根状态
      this.$store.replaceState(Object.assign({}, this.$store.state,
        JSON.parse(window.localStorage.getItem('user'))))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      window.localStorage.setItem('user', JSON.stringify(this.$store.state))
    })
  }
}
</script>
