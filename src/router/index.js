import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import DealerList from "@/views/DealerList.vue"
import DealerDetails from '@/views/DealerDetails.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/dealer',
    name: 'dealer',
    component: DealerList
  },
  {
    path: '/dealer/getDealer/:id',
    name: 'DealerDetails',
    props: true,
    component: DealerDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
