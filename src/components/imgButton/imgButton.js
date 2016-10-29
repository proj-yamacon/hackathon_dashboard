import Vue from 'vue'
import template from './imgButton.html'

export default Vue.extend({
  template,
  props: [
    'src'
  ],
  methods: {
    onClick (event) {
      console.log('click')
    }
  }
})

