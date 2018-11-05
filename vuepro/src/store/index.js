import Vue from "vue"
import Vuex from "vuex"
import movie from "./movie"
Vue.use(Vuex)

const state = {
    bar:[
        {
            name:"/home",
            title:"首页"
        },
        {
            name:"/movie",
            title:"影片"
        },
        {
            name:"cinema",
            title:"影院"
        },
        {
            name:"shopping",
            title:"商城"
        },
        {
            name:"my",
            title:"我的"
        },
        {
            name:"salescard",
            title:"卖座卡"
        }
    ]
    
}

const getters = {

}

const mutations = { 

}

const actions = {

}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        movie
    }
})

export default store;