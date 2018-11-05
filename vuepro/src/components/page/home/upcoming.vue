<template>
    <div class="upcoming">
        <div class="upcoming_title">即将上映</div>
        <div class="upcoming_item" v-for="(item,index) in upComing">
            <div><img :src="item.cover.origin"></div>
            <div class="upcoming_desc">
                <div>{{item.name}}</div>
                <div>{{item.date}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
   methods:{
       ...Vuex.mapActions({
           getupComing:"movie/getupComing"
       })
   },
   computed:{
       ...Vuex.mapState({
           upComing:state=>state.movie.upComing
       })
   },
   created(){
       this.getupComing()
   }
}
</script>

<style>
.upcoming_title{
    width: 1.3rem;
    height: .4rem;
    margin: 0 auto;
    margin-bottom: -20px;
    border-radius: 10px;
    font-size: .2rem;
    line-height: .4rem;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
}
.upcoming_item{
    margin:0 .34rem .34rem .34rem;
}

.upcoming_desc{
    width:100%;
    height:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;
}
</style>
