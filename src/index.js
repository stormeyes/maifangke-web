import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './components/App.vue'
import House from './components/House.vue'
import Bargain from './components/Bargain.vue'
import Rank from './components/Rank.vue'
import About from './components/About.vue'
import FAQ from './components/FAQ.vue'
import Analysis from './components/Analysis.vue'
import ShenAccount from './components/ShenAccount.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.devtools = (MODE == 'development');

const routes = [
    { path: '/', component: House },
    { path: '/bargains', component: Bargain },
    { path: '/rank', component: Rank },
    { path: '/analysis', component: Analysis },
    { path: '/about', component: About },
    { path: '/shen-account', component: ShenAccount },
    { path: '/faq', component: FAQ },
]

const router = new VueRouter({
    mode: MODE == 'production' ? 'history' : 'hash',
    routes
});


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})