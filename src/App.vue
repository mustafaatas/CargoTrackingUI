<template>
  <div id="app">
    <header class="bg-light mb-3">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        id="header-nav"
        role="navigation"
      >
        <div class="container">
          <router-link
            class="link-dark navbar-brand site-title mb-0"
            to="/about"
          >
            <img
              id="logo"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQEbYkaJzFkclQ/company-logo_200_200/0/1519878596100?e=2147483647&v=beta&t=YzLjRwsGi0G321kKebVwhZKegQxscnmhswylRFPFotw"
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
    <router-view></router-view>
  </div>
  <footer class="blog-footer mt-5">
    <p>
      The website built for
      <a href="https://github.com/mustafaatas/CargoTracking">Cargo Tracking</a>
      by Mustafa Ataş.
    </p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

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

h4 {
  font-size: 20px;
}

.blog-footer {
  padding: 2.5rem 0;
  color: #727272;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
  display: block;
}
</style>
