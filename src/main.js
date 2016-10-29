import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Top from './components/top/top.js'
import ZoneAdmin from './components/zoneAdmin/zoneAdmin.js'
import Dashboard from './components/dashboard/dashboard.js'

Vue.use(VueRouter)
Vue.use(VueResource)

var App = Vue.extend({})

var router = new VueRouter()

router.map({
  '/top': {
    component: Top,
    name: 'top'
  },
  '/admin/zone/:id': {
    component: ZoneAdmin,
    name: 'adminZone'
  },
  '/dashboard': {
    component: Dashboard,
    name: 'dashboard'
  }
})

router.start(App, '#app')
