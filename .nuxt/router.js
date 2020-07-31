import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3fad450c = () => interopDefault(import('../pages/charges/index.vue' /* webpackChunkName: "pages/charges/index" */))
const _b9907f4e = () => interopDefault(import('../pages/cobrancas/index.vue' /* webpackChunkName: "pages/cobrancas/index" */))
const _a60ce0a6 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _3aeeb566 = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _4bc6b929 = () => interopDefault(import('../pages/slip/index.vue' /* webpackChunkName: "pages/slip/index" */))
const _be1c3e48 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3fad450c,
    name: "charges"
  }, {
    path: "/cobrancas",
    component: _b9907f4e,
    name: "cobrancas"
  }, {
    path: "/contact",
    component: _a60ce0a6,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _3aeeb566,
    name: "ecommerce"
  }, {
    path: "/slip",
    component: _4bc6b929,
    name: "slip"
  }, {
    path: "/",
    component: _be1c3e48,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
