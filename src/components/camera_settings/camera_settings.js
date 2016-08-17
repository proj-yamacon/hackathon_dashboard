import Vue from 'vue'
import template from './camera_settings.html'

export default Vue.extend({
  template: template,

  ready () {
    this.$http.get('http://192.168.111.163:3002/api/v1/camera_settings').then((response) => {
      // success callback
      console.log('success')
      console.log(response)
      console.log(this.$root.data)
      console.log(this.$root.config)
      this.settings = response.data
    }, (response) => {
      // error callback
      console.log(this.$root.data)
      console.log(this.$root.config)
      console.log('fail')
    })
  },

  data: () => {
    return {
      settings: []
    }
  },

  methods: {
  }
})
