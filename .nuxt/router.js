import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _836fe6f6 = () => interopDefault(import('../pages/charges/index.vue' /* webpackChunkName: "pages/charges/index" */))
const _3382e4dc = () => interopDefault(import('../pages/cobrancas/index.vue' /* webpackChunkName: "pages/cobrancas/index" */))
const _2b945726 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _258f7286 = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _0fa0cc50 = () => interopDefault(import('../pages/slip/index.vue' /* webpackChunkName: "pages/slip/index" */))
const _5a843155 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/charges",
    component: _836fe6f6,
    name: "charges"
  }, {
    path: "/cobrancas",
    component: _3382e4dc,
    name: "cobrancas"
  }, {
    path: "/contact",
    component: _2b945726,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _258f7286,
    name: "ecommerce"
  }, {
    path: "/slip",
    component: _0fa0cc50,
    name: "slip"
  }, {
    path: "/",
    component: _5a843155,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
