<template>
    <div class="nowPlay">
        <div v-for="(item,index) in nowPlay" class="nowMovie" @click="handleGo(item.id)">
            <div><img :src="item.cover.origin"></div>
            <div class="desc">
                <div>
                    <p>{{item.name}}</p>
                    <div><span>{{item.cinemaCount}}</span>家影院上映<span>{{item.watchCount}}</span>人购票</div>
                </div>
                <div>{{item.grade}}</div>
            </div>
        </div>
        <div class="more">更多热映电影</div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed:{
        ...Vuex.mapState({
            nowPlay:state=>{
                if(state.movie.nowPlay.length>0){
                   return state.movie.nowPlay
                }
            }
        })
    },
    methods:{
        ...Vuex.mapActions({
            getnowPlay:"movie/getnowPlay",
            detailsId:"movie/detailsId",
        }),
        handleGo(id){
            this.$router.push({name:"details",params:{id}}) //id传值
        }
    },
    created() {
        this.getnowPlay();
    }
}
</script>

<style scoped>
img{
    width:100%;
}
.desc{
    width:100%;
    height:1rem;
    background:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 .2rem;
}

.desc>div:nth-child(1) p{
    font-size:.24rem;
    color:#333;
    padding-bottom:10px;
}

.desc>div:nth-child(1)>div{
    font-size:.18rem;
    color:#c3c3c3;
}

.desc>div:nth-child(2){
    font-size:.36rem;
    color:#f78360;
    font-weight:900;
}
.nowMovie{
    margin:0 .34rem .34rem .34rem;
}
.more{
    width: 3.2rem;
    height: .6rem;
    border: 2px solid #aaa;
    border-radius: 30px;
    margin: 20px auto 60px;
    text-align: center;
    line-height: .6rem;
    font-size: .24rem;
    color: #616161;
    cursor: pointer;
}
</style>
