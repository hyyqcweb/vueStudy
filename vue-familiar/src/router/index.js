import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import IndexPage from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
