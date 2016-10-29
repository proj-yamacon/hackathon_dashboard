import Vue from 'vue'
import * as types from './actionTypes.js'
import * as mutationTypes from './mutationTypes.js'
import { API_HOST } from '../constants.js'

export default {
  [types.FETCH_PEOPLE_LIST] ({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.http.get(API_HOST + '/people', { })
        .then((response) => {
          commit(mutationTypes.SET_PEOPLE_LIST, response.data.people)
          resolve(response.data)
        },
        (response) => {
          reject()
        })
    })
  },

  [types.ENTER_PERSON_IN_ZONE] ({ commit }, payload) {
    const zoneId = payload.zoneId
    const personId = payload.personId
    return new Promise((resolve, reject) => {
      Vue.http.put(API_HOST + '/zone/' + zoneId + '/people/' + personId, {
      })
      .then((response) => {
        commit(mutationTypes.ENTER_PERSON_IN_ZONE, zoneId, personId)
        resolve(response.data)
      },
      (response) => {
        reject()
      })
    })
  }
}

