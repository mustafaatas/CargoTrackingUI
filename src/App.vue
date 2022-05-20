<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
  <foot></foot>
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
