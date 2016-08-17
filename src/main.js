import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Top from './components/top/top.js'
import CameraSettings from './components/camera_settings/camera_settings.js'
import CameraSettingRegistration from './components/camera_setting_registration/camera_setting_registration.js'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '192.168.111.163:3002'
Vue.http.headers.common['Authorization'] = 'Bearer XXX'

var App = Vue.extend({})

var router = new VueRouter()

router.map({
  '/top': {
    component: Top,
    name: 'top'
  },
  '/camera_settings': {
    component: CameraSettings,
    name: 'camera_settings'
  },
  '/camera_setting_registration': {
    component: CameraSettingRegistration,
    name: 'camera_setting_registration'
  }
})

router.start(App, '#app')
