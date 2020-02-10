import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63eb024a = () => interopDefault(import('../pages/charges/index.vue' /* webpackChunkName: "pages/charges/index" */))
const _a209b3d2 = () => interopDefault(import('../pages/cobrancas/index.vue' /* webpackChunkName: "pages/cobrancas/index" */))
const _5d91662a = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _2367e9ea = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _7e4e34ab = () => interopDefault(import('../pages/slip/index.vue' /* webpackChunkName: "pages/slip/index" */))
const _52b087cc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _63eb024a,
    name: "charges"
  }, {
    path: "/cobrancas",
    component: _a209b3d2,
    name: "cobrancas"
  }, {
    path: "/contact",
    component: _5d91662a,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _2367e9ea,
    name: "ecommerce"
  }, {
    path: "/slip",
    component: _7e4e34ab,
    name: "slip"
  }, {
    path: "/",
    component: _52b087cc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
