import Vue from 'vue'
import template from './dashboard.html'
import personPanel from '../personPanel/personPanel.js'
import { mapState } from 'vuex'
import { FETCH_ZONE_INFORMATION } from '../../store/actionTypes.js'

export default Vue.extend({
  template: template,
  components: {
    personPanel
  },

  ready () {
    const zoneId = this.$route.params.id
    this.$store.dispatch(FETCH_ZONE_INFORMATION, {
      zoneId
    })
    this.invertalId = setInterval(() => {
      this.$store.dispatch(FETCH_ZONE_INFORMATION, {
        zoneId
      })
    }, 3000)
  },

  destroyed () {
    clearInterval(this.invertalId)
  },

  computed: mapState({
    zone: state => state.zone
  })

})

