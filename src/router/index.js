import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
const dashboard = () => import('../views/dashboard/index')
Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }]
  }
]
export default new Router({
  // 要讲
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
