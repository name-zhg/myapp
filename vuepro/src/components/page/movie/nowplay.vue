<template>
    <div class="nowplay wrapper" ref="wrapper">
        <ul class="content">
            <li v-for="(item,index) in movieMore" @click="handleGo(item.id)">
                <div>
                    <img :src="item.poster.origin">
                    <div class="desc">
                        <p>{{item.name}}</p>
                        <p>{{item.intro}}</p>
                        <p>
                            <span>{{item.cinemaCount}}家影院上映</span>
                            <span>{{item.watchCount}}人购票</span>
                        </p>
                    </div>
                </div>
                <div>{{item.grade}}<i class="iconfont">&#xe616;</i></div>
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
            updateMovie:"movie/updateMovie",
            detailsId:"movie/detailsId",
        }),
        handleGo(id){
            this.$router.push({name:"details",params:{id}}) //id传值
        }
    },
    computed:{
        ...Vuex.mapState({
            movieMore:state=>state.movie.movieMore
        })
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{click:true});
        console.log(scroll)
    },
    updated() {
        setTimeout(()=>{
            this.scroll.refresh();
        },100)
        this.scroll.on("scrollEnd",()=>{
            if( this.page<7 && !this.timer){
                this.timer = setTimeout(()=>{
                    this.updateMovie(this.page++);
                    this.timer = null;
                },3000)
            }
        })
    }
    // updated() {
       
    //     //当延迟100毫秒以后重新更新DOM的高度
    //     setTimeout(()=>{
    //         this.scroll.refresh();
    //     },100)
    //     //当用户滚动结束的时候 判断一个当前的页数  以及请求的状态
    //     this.scroll.on("scrollEnd",()=>{
    //         if( this.page<7 && !this.timer){
    //             //延迟3秒以后进行数据的请求
    //           this.timer = setTimeout(()=>{
    //               //将当前页数进行++
    //                 this.updateMovie(this.page++);
    //                 //当请求结束的时候将状态值改为空
    //                  this.timer = null
    //            },3000)
              
    //         }
    //     })
    // },
}
</script>

<style scoped>
    .wrapper{
    height:100%;
    overflow:hidden;
    }
    .nowplay{
        width:100%;
        padding-right:30px;
    }
    .nowplay>ul>li{
        height:2.48rem;
        padding:20px 0;
        display:flex;
        justify-content:space-between;
        border-bottom:2px dashed #ccc;
    }
    .nowplay>ul>li>div:nth-child(1){
        display:flex;
        justify-content:center;
    }
    img{
        width:1.2rem;
        height:1.64rem;
    }
</style>
