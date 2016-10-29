import Vue from 'vue'
import template from './zoneAdmin.html'
import imgButton from '../imgButton/imgButton.js'
import { mapState } from 'vuex'
import { FETCH_PEOPLE_LIST } from '../../store/actionTypes.js'

export default Vue.extend({
  template,
  ready () {
    this.$store.dispatch(FETCH_PEOPLE_LIST)
  },
  computed: mapState({
    people_list: state => state.people_list
  }),
  components: {
    imgButton
  }
})

// this.$route.params
