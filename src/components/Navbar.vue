<template>
  <header class="bg-light mb-3">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      id="header-nav"
      role="navigation"
    >
      <div class="container">
        <router-link class="link-dark navbar-brand site-title mb-0" to="/about">
          <img
            id="logo"
            src="@/assets/ArfitectLogo.png"
            alt="Arfitect Cargo"
            title="Arfitect Cargo"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-2">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/"
                v-if="role == 'Dealer Manager'"
                >Your Dealer</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dealer" v-if="isManager()"
                >Dealers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employee" v-if="isManager()"
                >Employees</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!user"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/login"
                v-if="user"
                @click="logout()"
                >Logout</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import UserService from '../services/UserService'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      role: '',
    }
  },

  computed: {
    ...mapGetters(['user']),
  },

  methods: {
    logout() {
      UserService.logout()
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('user')
      this.$store.dispatch('user', null)
    },

    isManager() {
      if (this.user) {
        let role = this.user.userRoles
        if (role == 'Manager') {
          console.log(role)
          return true
        }
        return false
      }
    },
  },
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo {
  width: 150px;
}
</style>