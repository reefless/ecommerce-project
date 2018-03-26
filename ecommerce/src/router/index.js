import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Landing from '@/components/Landing'
import product from '@/components/product'
import register from '@/components/register'
import privacy from '@/components/privacy'
import Aboutus from '@/components/Aboutus'
import addproduct from '@/components/addproduct'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product/:productId',
      name: 'Product',
      component: product
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: privacy
    },
    {
      path: '/aboutus',
      name: 'About us',
      component: Aboutus
    },
    {
      path: '/addProduct',
      name: 'Add Product',
      component: addproduct
    }
  ]
})
