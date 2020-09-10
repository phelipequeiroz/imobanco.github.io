import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://blog.imobanco.com.br/wp-json/wp/v2/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})