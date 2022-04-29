import Vue from 'vue'
import App from './App.vue'
import './register-service-worker'
import router from '@/core/lib/router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '../public/assets/fonts/source sans pro/sourcesanspro.css'
import Vuetify from 'vuetify'
import 'highlight.js/styles/default.css'
import 'vue-highlight.js/lib/allLanguages'
import hljs from 'highlight.js'
import { vuetifyPreset } from '@/app/lib/vue-app-styles'
// @ts-ignore
import VueDragResize from 'vue-drag-resize'

Vue.use(VueDragResize)

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.directive('highlightjs', {
    // deep: true,
    bind: (el, binding) => {
        // on first bind, highlight all targets
        const targets = el.querySelectorAll('code[data="code-block"]')
        targets.forEach((target) => {
            // if a value is directly assigned to the directive, use this
            // instead of the element content.
            if (binding.value) {
                target.textContent = binding.value
            }
            hljs.highlightElement(target as HTMLElement)
        })
    },
    componentUpdated: (el, binding) => {
        // after an update, re-fill the content and then highlight
        const targets = el.querySelectorAll('code[data="code-block"]')
        targets.forEach((target) => {
            if (binding.value) {
                target.textContent = binding.value
                hljs.highlightElement(target as HTMLElement)
            }
        })
    },
})

new Vue({
    router,
    vuetify: new Vuetify(vuetifyPreset),
    mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
    render: (h) => h(App),
}).$mount('#app')
