import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import loadingBar from '@/components/ui-loading-bar'
// import {commonRoutes} from './routes.js'
Vue.use(Router)
const router = new Router({
  // mode: 'history',
  // routes: commonRoutes,
  routes: routes
})
// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  loadingBar.start()
  next()
})
// eslint-disable-next-line
router.afterEach((to, from) => {
  loadingBar.finish()
})
export default router
