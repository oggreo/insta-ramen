import { createRouter, createWebHistory } from 'vue-router'
import RamenList from '../views/RamenList.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/', // url
    name: 'RamenList', //name of the route
    component: RamenList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    // you can access id by doing $route.params.page
    name: 'EventDetails',
    props: true,
    // tells our route parameters to send it as component props
    component: EventDetails
  },
  {
    path: '/event/:id',
    // you can access id by doing $route.params.page
    name: 'EventRegister',
    props: true,
    // tells our route parameters to send it as component props
    component: EventRegister
  },
  {
    path: '/event/:id',
    // you can access id by doing $route.params.page
    name: 'EventEdit',
    props: true,
    // tells our route parameters to send it as component props
    component: EventEdit
  },
  {
    path: '/about',
    name: 'about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
