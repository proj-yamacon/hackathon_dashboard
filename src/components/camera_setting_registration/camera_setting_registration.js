import Vue from 'vue'
import template from './camera_setting_registration.html'
import { CAMERA_TYPES } from '../../constants.js'

import SmacameSettingForm from '../smacame_setting_form/smacame_setting_form.js'
import IpCameraSettingForm from '../ip_camera_setting_form/ip_camera_setting_form.js'

export default Vue.extend({
  template: template,

  ready () {
  },

  data: () => {
    return {
      camera_types: CAMERA_TYPES
    }
  },

  props: {
    currentFormType: {
      type: String,
      default: 'ip_camera'
    }
  },

  components: {
    'ip_camera': IpCameraSettingForm,
    'smacame': SmacameSettingForm
  },

  methods: {
    register () {
      this.$refs.form.submit()
    }
  }
})
