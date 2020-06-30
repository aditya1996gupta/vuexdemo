import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cGetSet',
      name: 'cGetSet',
      component: () => import(/* webpackChunkName: "cGetSet" */ './views/cGetSet.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import(/* webpackChunkName: "watch" */ './views/watch.vue')
    },
    {
      path: '/for',
      name: 'for',
      component: () => import(/* webpackChunkName: "for" */ './views/for.vue')
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import(/* webpackChunkName: "filter" */ './views/filter.vue')
    },
    {
      path: '/cwithvfor',
      name: 'cwithvfor',
      component: () => import(/* webpackChunkName: "cwithvfor" */ './views/cwithvfor.vue')
    },
    {
      path: '/Items',
      name: 'Items',
      component: () => import(/* webpackChunkName: "items" */ './components/Items.vue')
    },
    {
      path: '/skillbar',
      name: 'skillbar',
      component: () => import(/* webpackChunkName: "skillbar" */ './views/skillbar.vue')
    }
  ]
})
