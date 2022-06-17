<template>
  <div id="app">
    <navbar :user="user"></navbar>
    <router-view :user="user"></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Foot from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Foot,
  },
  data() {
    return {
      user: '',
    }
  },
  created() {
    this.user = localStorage.getItem('jwtToken')
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
