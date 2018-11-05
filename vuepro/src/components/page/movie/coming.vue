<template>
    <div class="coming wrapper" ref="wrapper">
        <ul class="content">
            <li v-for="(item,index) in comingMore" @click="handleGo(item.id)">
                <div>
                    <img :src="item.poster.origin">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.intro}}</p>
                        <p class="sda">
                            <span>{{item.date}}</span>
                            <span>{{item.dat}}</span>
                        </p>
                    </div>
                </div>
                <div><i class="iconfont">&#xe616;</i></div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex"
import BScroll from "better-scroll"
export default {
    data(){
        return {
            page:2,
            timer:null
        }
    },
    methods:{
        ...Vuex.mapActions({
            movieComing:"movie/movieComing",
            detailsId:"movie/detailsId",
        }),
        handleGo(id){
            this.$router.push({name:"details",params:{id}}) //id传值
        }
    },
    computed:{
        ...Vuex.mapState({
            comingMore:state=>state.movie.comingMore
        })
    },
    created(){
        this.detailsId()
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{click:true}); //详情页的触发事件加click:true
        //console.log(scroll)
    },
    updated(){
        setTimeout(()=>{
            this.scroll.refresh();
        },100)
        this.scroll.on("scrollEnd",()=>{
            if( this.page<7 && !this.timer){
                this.timer = setTimeout(()=>{
                    this.movieComing(this.page++);
                    this.stimer = null
                },1500)
            }
        })
    }
}
</script>

<style scoped>
    .wrapper{
    height:100%;
    overflow:hidden;
    }
    .coming{
        width:100%;
        padding-right:30px;
    }
    .coming>ul>li{
        height:2.48rem;
        padding:20px 0;
        display:flex;
        justify-content:space-between;
        border-bottom:2px dashed #ccc;
    }
    .coming>ul>li>div:nth-child(1){
        display:flex;
        justify-content:center;
    }
    img{
        width:1.2rem;
        height:1.64rem;
    }
</style>

