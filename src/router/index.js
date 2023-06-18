import Vue from 'vue'
import VueRouter from 'vue-router'
import MessagesView from '../views/MessagesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Messages',
    component: MessagesView
  },
]

const router = new VueRouter({
  routes
})

export default router
