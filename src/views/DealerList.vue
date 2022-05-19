<template>
  <div class="dealers container">
    <div class="cont">
      <h3 class="my-5 left-cont"><strong>Dealer List</strong></h3>
      <button
        type="button"
        class="btn btn-outline-success m-2 float-end right-cont"
      >
        <fa icon="add" class="mr-1" /> Add Dealer
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th class="ml-5">Zip Code</th>
          <th>Adress</th>
          <th class="ml-5">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr class="dealer-card" v-for="dealer in dealers" :key="dealer.id">
          <td class="col-2">{{ dealer.id }}</td>
          <td class="col-3">{{ dealer.zipCode }}</td>
          <td class="col-4">{{ dealer.adress }}</td>
          <td class="col-3">
            <button class="btn btn-warning" title="Edit">
              <fa icon="edit" />
            </button>
            <button class="btn btn-info" title="View Details">
              <router-link
                :to="{ name: 'DealerDetails', params: { id: dealer.id } }"
                ><fa icon="eye"
              /></router-link>
            </button>
            <button class="btn btn-danger" title="Remove">
              <fa icon="remove" />
            </button>
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
  // props: {
  //   dealer: {
  //     type: Object,
  //     required: true,
  //   },
  // },
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

.cont {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-cont {
  display: flex;
  align-items: center;
}

.right-cont {
  display: flex;
  align-items: center;
}

button {
  margin-right: 15px;
}

button:hover {
  border-radius: 0.4rem;
}

td {
  vertical-align: middle;
}
</style>