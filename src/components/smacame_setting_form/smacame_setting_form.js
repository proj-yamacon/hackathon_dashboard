import Vue from 'vue'
import template from './smacame_setting_form.html'
import { SMACAME_VERSIONS } from '../../constants.js'

export default Vue.extend({
  template: template,

  ready () {
  },

  data: () => {
    return {
      availableSmacameVersions: SMACAME_VERSIONS
    }
  },

  props: {
    smacameVersion: {
      type: String,
      default: (function () { return SMACAME_VERSIONS[0] }())
    },
    smacameId: {
      type: Number
    },
    privateIp: {
      type: String,
      default: ''
    }
  },

  methods: {
    submit () {
      let payload = {
        camera_type: 'smacame_' + this.smacameVersion,
        metadata: {
          smacame_id: parseInt(this.smacameId),
          private_ip: this.privateIp
        }
      }
      this.$http.post('http://192.168.111.163:3002/api/v1/camera_settings', payload).then((response) => {
        // TODO: success callback
      }, (response) => {

        // TODO: failure callback
      })
    }
  }
})
