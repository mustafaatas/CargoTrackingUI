<template>
  <div>
    <h3 v-if="user">Hello there!</h3>
    <h3 v-else>You are not logged in</h3>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['user'],
}
</script>
