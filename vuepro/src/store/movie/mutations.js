export default {
    getBanner(state,params){
        state.imgs = params;
    },
    getnowPlay(state,params){
        state.nowPlay = params;
    },
    getupComing(state,params){
        state.upComing = params;
    },
    nowPlaymovie(state,data){
        state.movieMore = [...state.movieMore,...data]
    },
    comingmovie(state,data){
        state.comingMore = [...state.comingMore,...data]
    },
    detailsId(state,params){
        //console.log( params);
        state.dataiLs = params;
    }
}