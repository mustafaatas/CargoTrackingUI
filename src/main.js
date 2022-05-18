import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free'
import '@fortawesome/vue-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret)




createApp(App)
  .use(store)
  .use(router).component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

