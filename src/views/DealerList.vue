<template>
  <div class="dealers container">
    <div class="cont">
      <h3 class="my-5 left-cont"><strong>Dealer List</strong></h3>
      <button
        type="button"
        class="btn btn-outline-success m-2 float-end right-cont"
        @click="isOpen = true"
      >
        <fa icon="add" /> Add Dealer
      </button>
      <add-dealer-modal
        :open="isOpen"
        @close="isOpen = !isOpen"
      ></add-dealer-modal>
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
            <button
              @click="isOpen = true"
              class="btn btn-outline-warning btn-sm"
              title="Edit"
            >
              <fa icon="edit" />
            </button>

            <button class="btn btn-outline-info btn-sm" title="View Details">
              <router-link
                :to="{ name: 'DealerDetails', params: { id: dealer.id } }"
                ><fa icon="eye"
              /></router-link>
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              title="Remove"
              @click="isOpen = true"
            >
              <fa icon="remove" />
            </button>
            <confirm-modal
              :open="isOpen"
              @close="isOpen = !isOpen"
            ></confirm-modal>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DealerService from '@/services/DealerService.js'
import AddDealerModal from '../components/AddDealerModal.vue'
//import DeleteDealerComponent from '../components/DeleteDealerComponent.vue'
//import EditDealerModal from '../components/EditDealerModal.vue'
import ConfirmModal from '../components/ConfirmModal.vue'
import { ref } from 'vue'

export default {
  name: 'Dealer',
  props: ['role'],
  components: {
    AddDealerModal,
    ConfirmModal,
    // EditDealerModal,
    //DeleteDealerComponent,
  },
  setup() {
    const isOpen = ref(false)
    return { isOpen }
  },
  data() {
    return {
      dealers: null,
    }
  },
  mounted() {
    console.log(this.$store.getters.user)
    DealerService.getDealers()
      .then((response) => {
        this.dealers = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    deleteDealer(id) {
      console.log(id)
      if (!confirm('Are you sure?')) {
        return
      }
      DealerService.deleteDealer(id).then(() => {
        this.$router.go()
      })
    },

    sendData() {},
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

.btn-sm {
  width: 15%;
}

button:hover {
  border-radius: 0.4rem;
}

td {
  vertical-align: middle;
}
</style>