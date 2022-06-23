<template>
  <div>
    <h3 v-if="user">Hello there! {{ user.username }}</h3>
    <h3 v-else>You are not logged in</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'About',
  data() {
    return {
      name: 'mustafaaatas',
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
}
</script>
