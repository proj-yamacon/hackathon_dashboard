import Vue from 'vue'
import template from './personPanel.html'
import './personPanel.css'

export default Vue.extend({
  template,
  props: [
    'person'
  ]
})

