import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79bc22ba = () => interopDefault(import('../pages/charges/index.vue' /* webpackChunkName: "pages/charges/index" */))
const _d5f42af2 = () => interopDefault(import('../pages/cobrancas/index.vue' /* webpackChunkName: "pages/cobrancas/index" */))
const _31ef254a = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _5752610a = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _33d66a3b = () => interopDefault(import('../pages/slip/index.vue' /* webpackChunkName: "pages/slip/index" */))
const _00184c8a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _79bc22ba,
    name: "charges"
  }, {
    path: "/cobrancas",
    component: _d5f42af2,
    name: "cobrancas"
  }, {
    path: "/contact",
    component: _31ef254a,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _5752610a,
    name: "ecommerce"
  }, {
    path: "/slip",
    component: _33d66a3b,
    name: "slip"
  }, {
    path: "/",
    component: _00184c8a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
