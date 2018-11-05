import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/page/home/home.vue";
import movie from "../components/page/movie/movie.vue";
import cinema from "../components/page/cinema/cinema.vue";
import my from "../components/page/my/my.vue";
import salescard from "../components/page/salescard/salescard.vue";
import shopping from "../components/page/shopping/shopping.vue";

import nowplay from "../components/page/movie/nowplay.vue";
import coming from "../components/page/movie/coming.vue";
import details from '../components/page/movie/details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path:"/",
      redirect:"/home"
    },
    {
      name:"home",
      path:"/home",
      component:home
    },
    {
      name:"movie",
      path:"/movie",
      component:movie,
      children:[
        {
          path:"nowplay",
          name:"nowplay",
          component:nowplay,
        },{
          path:"coming",
          name:"coming",
          component:coming,        
        },
      ]
    },
    {
      name:"cinema",
      path:"/cinema",
      component:cinema
    },
    {
      name:"my",
      path:"/my",
      component:my
    },
    {
      name:"salescard",
      path:"/salescard",
      component:salescard
    },
    {
      name:"shopping",
      path:"/shopping",
      component:shopping
    },
    {
      path:"/details/:id",
      name:"details",
      component:details,
    }
  ]
})
