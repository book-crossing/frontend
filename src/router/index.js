import Vue from 'vue'
import VueRouter from 'vue-router'

import Library from '@/pages/Library'
import Search from '@/pages/Search'


Vue.use(VueRouter)

const routes = [
  {
    path: '/library',
    name: 'library',
    component: Library
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
  // {
  //   path: '*',
  //   component: NotFoundPage
  // }
]

export default new VueRouter({
  linkActiveClass: 'link-active',
  mode: 'history',
  routes
})
