// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import HYXUI from './../packages/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './../packages/theme-default/lib/index.css'

Vue.use(HYXUI)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})