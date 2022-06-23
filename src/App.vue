<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
// import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Foot from './components/Footer.vue'
import setAuthHeader from './utils/setAuthHeader'

export default {
  name: 'app',
  components: {
    Navbar,
    Foot,
  },

  mounted() {
    let userData = localStorage.getItem('user')
    if (userData) {
      var user = JSON.parse(userData.toString())
      setAuthHeader(user.token)
      this.$store.commit('setUser', user)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h4 {
  font-size: 20px;
}
</style>
