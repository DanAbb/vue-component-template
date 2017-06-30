import Vue from 'vue'
import App from './App'
import router from './router'

import MyLibrary from '../src'
import '../src/scss/main-build.scss'

Vue.use(MyLibrary)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
