import Vue from 'vue'
import template from './imgButton.html'
import { mapState } from 'vuex'

export default Vue.extend({
  template,
  props: [
    'src',
    'person'
  ],
  computed: {
    inZone () {
      return (this.in_people_ids.indexOf(this.person.id) !== -1)
    },
    ...mapState({
      in_people_ids: state => state.in_people.map(person => person.id)
    })
  },
  methods: {
    onClick (event) {
      console.log(this.person.id)
      if (!this.inZone) {
        this.$store.dispatch('ENTER_PERSON_IN_ZONE', {
          zoneId: this.$route.params.id,
          personId: this.person.id
        })
      } else {
        this.$store.dispatch('EXIT_PERSON_IN_ZONE', {
          zoneId: this.$route.params.id,
          personId: this.person.id
        })
      }
    }
  }
})

