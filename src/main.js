import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'
// import '../node_modules/primeicons/primeicons.css'
// import 'primevue/resources/themes/saga-blue/theme.css'
// import 'primevue/resources/primevue.min.css'
// import PrimeVue from 'primevue/config'
// import Dialog from 'primevue/dialog/sfc'
// import Button from 'primevue/button'
// import Toolbar from 'primevue/toolbar'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/column'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas);


createApp(App)
  .use(store)
  .use(router)
  // .use(PrimeVue)
  // .component('Dialog', Dialog)
  // .component('Button', Button)
  // .component('Toolbar', Toolbar)
  // .component('DataTable', DataTable)
  // .component('Column', Column)
  .component('fa', FontAwesomeIcon)
  .mount('#app')