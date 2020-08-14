import DefaultLayout from '~/layouts/Default.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//global stylesheet
import '~/assets/style/styles.scss'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
}
