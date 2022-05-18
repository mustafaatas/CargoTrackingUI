<template>
  <div>
    <h1>{{ dealer.adress }}</h1>
    <p>{{ dealer.id }}</p>
    <p>{{ dealer.zipCode }}</p>
    <p>{{ dealer.employees }}</p>
  </div>
</template>

<script>
import DealerService from '@/services/DealerService.js'

export default {
  props: ['id'],
  data() {
    return {
      dealer: null,
    }
  },
  created() {
    console.log(this)
    DealerService.getDealer(this.id)
      .then((response) => {
        this.dealer = response.data
        console.log(response.data + 'fdsfdsf')
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
</style>