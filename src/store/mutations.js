import * as types from './mutationTypes'

export default {
  [types.SET_PEOPLE_LIST] (state, people) {
    state.people_list = people
  },
  [types.ENTER_PERSON_IN_ZONE] (state, zoneId, personId) {
    state.in_people.push(personId)
  }
}
