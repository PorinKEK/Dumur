import Vue from 'vue'
import App from './App.vue'
import Signin from './components/Signin'
//import vueRessource from 'vue-resource'
import VueRouter from 'vue-router';
//Vue.use(vueRessource)
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    //{path:'/',component: Users},
    //{path: '/about',component: About},
    {path:'/signin', component:Signin},
    {path: '*', component: Signin}
  ]
})
let vm =new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
