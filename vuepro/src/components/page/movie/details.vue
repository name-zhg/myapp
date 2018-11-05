<template>
    <div class="details page">
         <img :src="dataiLs.cover.origin">
         <div class="data-t">
             <div>影片简介</div>
             <div><span>导&nbsp;演：</span><span>{{dataiLs.director}}</span></div>
            
             <div>
                <span>主&nbsp;演：</span>
                <span>{{dataiLs.actors.name}}</span>
             </div> 
             <div><span>地区语言：</span><span>{{dataiLs.nation}}({{dataiLs.language}})</span></div>
             <div><span>类&nbsp;型：</span>{{dataiLs.category}}</div>
             <div><span>上映时间：</span></div>
             <div><p>{{dataiLs.synopsis}}</p></div>
             <div><span>立即购票</span></div>
         </div>
        
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    methods:{
        ...Vuex.mapActions({
            detailsId:'movie/detailsId'
        })
    },
    created() {
        this.detailsId(this.$route.params.id); //id接收值
    },
    computed:{
        ...Vuex.mapState({
            dataiLs:state=>state.movie.dataiLs
        })
    }
}
</script>

<style scoped>
.details{
    width:100%;
    height:100%;
}
img{
    width:100%;
    height:4.5rem;
}
.data-t{
    margin-left:10px;
    width:100%;
    height:7.84rem;
    margin-top:10px;
}
.data-t>div:nth-child(1){
    width:100%;
    height:.7rem;
    font-size:18px;
}
.data-t>div:nth-child(2){
    margin:5px 0;
    width:100%;
    height:.36rem;
    font-size:15px;
}
.data-t>div:nth-child(4){
    margin:5px 0;
    width:100%;
    height:.36rem;
    font-size:15px;
}
.data-t>div:nth-child(5){
    margin:5px 0;
    width:100%;
    height:.36rem;
    font-size:15px;
}
.data-t>div:nth-child(6){
    margin:5px 0;
    width:100%;
    height:.36rem;
    font-size:15px;
}
.data-t>div:nth-child(8){
    margin:20px auto;
    width:100%;
    height:1rem;
    font-size:15px;
}
.data-t>div:nth-child(8)>span{
    display:block;
    margin: 0 auto;
    width:120px;
    height:35px;
    border:2px solid orange;
    line-height:35px;
    text-align: center;
    background:orange;
    color: #fff;
    border-radius:18px;
}
</style>
