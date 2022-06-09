import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './../views/admin/Dashboard'
import News from './../views/admin/News'
import User from './../views/admin/User'
import MyProfile from './../views/admin/MyProfile'
import Faq from './../views/admin/Faq'
import About from './../views/admin/AboutView'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'dashboard',
  //   component: () => import('./../views/Dashboard')
  // },
  {
    path: '/login',
    name: '/login',
    component: () => import('./../views/Login')
  },

  {
    path: '/register',
    name: '/register',
    component: () => import('./../views/Register')
  },

  {
    path: '/admin',
    component: () => import('./../views/admin/AdminHome.vue'),
    children: [
      { path: '', component: Dashboard },
      { path: 'news', component: News },
      { path: 'users', component: User },
      { path: 'my-profile', component: MyProfile },
      { path: 'faq', component: Faq },
      { path: 'about', component: About },
    ],
    meta: {
      requiresAuth: false
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
