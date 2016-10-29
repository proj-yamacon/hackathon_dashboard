import Vue from 'vue'
import template from './zoneAdmin.html'
import imgButton from '../imgButton/imgButton.js'

export default Vue.extend({
  template,
  components: {
    imgButton
  },
  data () {
    return {
      images: [
        '/static/logo.png',
        '/static/logo.png'
      ]
    }
  }
})

// this.$route.params
