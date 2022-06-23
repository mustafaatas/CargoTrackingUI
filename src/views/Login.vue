<template>
  <!-- Pills navs -->
  <form @submit.prevent="login">
    <div class="container w-25 mt-5">
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
            >Login</a
          >
        </li>
      </ul>

      <div class="tab-content">
        <div
          class="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="mail" id="mail" class="form-control" v-model="mail" />

            <label class="form-label" for="mail">Email</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              type="password"
              id="password"
              class="form-control"
              autocomplete="on"
              v-model="password"
            />

            <label class="form-label" for="password">Password</label>
          </div>

          <!-- Submit button -->
          <button class="btn btn-primary btn-block mb-4" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  </form>
  <!-- Pills content -->
</template>

<script>
import axios from 'axios'
import setAuthHeader from '../utils/setAuthHeader'
import { mapState } from 'vuex'

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      mail: 'demo@gmail.com',
      password: '123456Aa.',
      role: '',
      dealerId: 0,
    }
  },
  computed: {
    ...mapState(['user']),
  },

  methods: {
    login() {
      const credentials = {
        mail: this.mail,
        password: this.password,
      }
      axios
        .post('https://localhost:44384/Authenticate/Login', credentials)
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('jwtToken', response.data.token)
          setAuthHeader(response.data.token)
          this.$store.commit('setUser', response.data)
          console.log(response.data)
          console.log(this.$store.getters)

          let role = response.data.userRoles
          let dealerId = response.data.dealerId

          if (role == 'Manager') {
            //this.$router.push('/dealer')
            window.location.href = 'dealer'
          } else if (role == 'Dealer Manager') {
            // this.$router.push({
            //   name: 'DealerDetails',
            //   params: { id: dealerId },
            // })
            window.location.href = `dealer/getdealer/${dealerId}`
          }
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
  },
}
</script>

<style>
</style>