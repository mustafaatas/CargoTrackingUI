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
              <router-link class="nav-link" to="/dealer">Dealers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employee"
                >Employees</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/role">Roles</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cargo">Cargos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user">Users</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
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