import Vue from 'vue'
import template from './ip_camera_setting_form.html'

export default Vue.extend({
  template: template,

  ready () {
  },

  props: {
    ipCameraId: {
      type: Number
    },
    privateIp: {
      type: String,
      default: ''
    },
    routerId: {
      type: Number
    }
  },

  methods: {
    submit () {
      let payload = {
        camera_type: 'ip_camera',
        metadata: {
          ip_camera_id: this.ipCameraId,
          private_ip: this.privateIp,
          router_id: this.routerId
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
