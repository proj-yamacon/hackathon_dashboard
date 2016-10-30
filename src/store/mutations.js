import * as types from './mutationTypes'

export default {
  [types.SET_PEOPLE_LIST] (state, people) {
    state.people_list = people
  },
  [types.UPDATE_PERSON_IN_ZONE] (state, people) {
    state.in_people = people
  },
  [types.UPDATE_ZONE] (state, zone) {
    state.zone = zone
  }
}
