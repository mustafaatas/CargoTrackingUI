//silinebilir

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Zip Code</th>
        <th>Adress</th>
      </tr>
    </thead>
    <tbody class="dealer-card">
      <tr>
        <td>{{ dealer.id }}</td>
        <td>{{ dealer.zipCode }}</td>
        <td>{{ dealer.adress }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  props: {
    dealer: {
      type: Array,
      required: true,
    },
  },
}
</script>