import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import CountryScreen from '../components/CountryScreen'

Vue.use(Router)


const routes = 
[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/country',
      name: 'CountryScreen',
      component: CountryScreen
    }
]


const router = new Router({
  mode: 'history',
  routes
})

export default router
