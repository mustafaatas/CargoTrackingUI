<template>
  <div class="dealers container">
    <h3 class="my-5"><strong>Dealer List</strong></h3>
    <button
      type="button"
      class="btn btn-outline-success m-2 float-end allButton"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="addClick()"
    >
      Add Dealer
    </button>
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Zip Code</th>
          <th>Adress</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr class="dealer-card" v-for="dealer in dealers" :key="dealer.id">
          <td>{{ dealer.id }}</td>
          <td>{{ dealer.zipCode }}</td>
          <td>{{ dealer.adress }}</td>
          <td>
            <button class="btn btn-outline-primary">Edit</button>
            <button class="btn btn-outline-info">
              <router-link props: { id: dealer.id }
                :to="{ name: 'DealerDetails', params: { id: dealer.id } }"
                >View Details</router-link
              >
            </button>
            <button class="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DealerService from '@/services/DealerService.js'
import axios from 'axios'

export default {
  name: 'Dealer',
  components: {},
  props: {
    dealer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dealers: {},
    }
  },
  mounted() {
    DealerService.getDealers()
      .then((response) => {
        this.dealers = response.data
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    deleteDealer(id) {
      console.log(id)
      console.log(DealerService.baseURL + '\n')
      axios
        .delete(DealerService.baseURL + 'dealer/deleteDealer/' + id)
        .then((response) => {
          console.log(response)
        })
    },
    // createDealer() {
    //   DealerService.createDealer(this.dealer)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    // },
  },
}
</script>

<style scoped>
* {
  text-decoration: none;
}

button {
  margin-right: 3px;
}
</style>


