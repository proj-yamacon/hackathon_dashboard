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
    in_zone () {
      this.in_people_ids.indexOf(this.person.id)
    },
    ...mapState({
      in_people_ids: state => state.in_people.map(person => person.id)
    })
  },
  methods: {
    onClick (event) {
      console.log(this.person.id)
      this.$store.dispatch('ENTER_PERSON_IN_ZONE', {
        zoneId: this.$route.params.id,
        personId: this.person.id
      })
    }
  }
})

