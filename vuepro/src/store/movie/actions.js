import axios from "axios";
export default {
    //https://m.maizuo.com
    getBanner({commit}){
        axios({
            method:"get",
            url:"/v4/api/billboard/home",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            //console.log(data.data.data.billboards)
            commit("getBanner",data.data.data.billboards)
        })
    },
    //https://m.maizuo.com
    getnowPlay({commit}){
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=5",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            //console.log(data.data.data.films)
            commit("getnowPlay",data.data.data.films)
        })
    },
    //https://m.maizuo.com
    getupComing({commit}){
        axios({
            methods:"get",
            url:"/v4/api/film/coming-soon?page=1&count=3",
            data:{
                __t:new Date().getTime()
            }
        })
        .then((data)=>{
            var data = data.data.data.films
            data.map((item)=>{
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                item.date = m+"月"+day+"日上映"
            })
            commit("getupComing",data)
        })
    },
    //https://m.maizuo.com/v4/api/film/now-playing?page=4&count=7
    nowPlaymovie({commit}){
        axios({
            methods:"get",
            url:"/v4/api/film/now-playing?page=1&count=7",
        }).then((data)=>{
            //console.log(data.data.data.films)
            commit("nowPlaymovie",data.data.data.films)
        })
    },
    updateMovie({commit},page){
        axios({
            methods:"get",
            url:"/v4/api/film/now-playing?page="+page+"&count=7"
        }).then((data)=>{
            //console.log(data.data.data.films)
            commit("nowPlaymovie",data.data.data.films)
        })
    },
    comingmovie({commit}){
        axios({
            methods:"get",
            url:"/v4/api/film/coming-soon?page=1&count=7",
        }).then((data)=>{
            // console.log(data.data.data.films)
            commit("comingmovie",data.data.data.films)
        })
    },
    //https://m.maizuo.com
    movieComing({commit},page){
        axios({
            methods:"get",
            url:"/v4/api/film/coming-soon?page="+page+"&count=7",
            data:{
                __t:new Date().getTime()
            }
        })
        .then((data)=>{
            var data = data.data.data.films
            data.map((item)=>{
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                var dat  = d.getDay();
                item.date = m+"月"+day+"日上映";
                item.dat = "星期"+dat;
            })
            commit("comingmovie",data)
        })
    },
    detailsId({commit},id){
        axios({
            methods:"get",
            url:"/v4/api/film/"+id,
            data:{
                __t:new Date().getTime()
            }
        })
        .then((data)=>{
            //console.log(data)
            commit("detailsId",data.data.data.film)
        })
     
    }
}
