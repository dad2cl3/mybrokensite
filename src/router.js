import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RangersFCPostcard from './views/RangersFCPostcard.vue'
import ChixAlbum from './views/ChixAlbum.vue'
import Woodburn from './views/Woodburn.vue'
import ChixGraded from './views/ChixGraded.vue'
import ENGvSCOProgram from './views/ENGvSCOProgram'
import SportMagazine from './views/SportMagazine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/RangersFCPostcard',
      name: 'rangersfcpostcard',
      component: RangersFCPostcard
    },
    {
      path: '/ChixAlbum',
      name: 'chixalbum',
      component: ChixAlbum
    },
    {
      path: '/Woodburn',
      name: 'woodburn',
      component: Woodburn
    },
    {
      path: '/ChixGraded',
      name: 'chixgraded',
      component: ChixGraded
    },
    {
      path: '/ENGvSCOProgram',
      name: 'ENGvSCOProgram',
      component: ENGvSCOProgram
    },
    {
      path: '/SportMagazine',
      name: 'SportMagazine',
      component: SportMagazine
    }
  ]
})
