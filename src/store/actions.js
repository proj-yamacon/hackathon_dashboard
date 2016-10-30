import Vue from 'vue'
import * as types from './actionTypes.js'
import * as mutationTypes from './mutationTypes.js'
import { API_HOST } from '../constants.js'

export default {
  [types.FETCH_PEOPLE_LIST] ({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.http.get(API_HOST + '/people', { })
        .then((response) => {
          commit(mutationTypes.SET_PEOPLE_LIST, response.data)
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
      Vue.http.put(API_HOST + '/people/' + personId + '/enter', {
        zone_id: zoneId
      })
      .then((response) => {
        commit(mutationTypes.UPDATE_PERSON_IN_ZONE, response.data.people)
        resolve(response.data)
      },
      (response) => {
        reject()
      })
    })
  },

  [types.EXIT_PERSON_IN_ZONE] ({ commit }, payload) {
    const zoneId = payload.zoneId
    const personId = payload.personId
    return new Promise((resolve, reject) => {
      Vue.http.put(API_HOST + '/people/' + personId + '/exit', {
        zone_id: zoneId
      })
      .then((response) => {
        commit(mutationTypes.UPDATE_PERSON_IN_ZONE, response.data.people)
        resolve(response.data)
      },
      (response) => {
        reject()
      })
    })
  },

  [types.FETCH_ZONE_INFORMATION] ({ commit }, payload) {
    const zoneId = payload.zoneId

    return new Promise((resolve, reject) => {
      Vue.http.get(API_HOST + '/zones/' + zoneId)
      .then((response) => {
        commit(mutationTypes.UPDATE_ZONE, response.data)
        resolve(response.data)
      },
      (response) => {
        reject()
      })
    })
  }

}

