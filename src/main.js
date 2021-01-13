import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import Carousel3d from 'vue-carousel-3d'
// import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import "./registerServiceWorker"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronCircleLeft, faChevronCircleRight, faPlusCircle, faMinusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Carousel3d)
// Vue.directive('tooltip', VTooltip)
// Vue.directive('close-popover', VClosePopover)
// Vue.component('v-popover', VPopover)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
