<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 在页面加载时读取localStorage里的状态信息
    if (window.localStorage.getItem('list')) {
      // this.$store.replaceState()替换 store 的根状态
      this.$store.replaceState(Object.assign({}, this.$store.state,
        JSON.parse(window.localStorage.getItem('list'))))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      window.localStorage.setItem('list', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
