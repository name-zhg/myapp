<template>
    <div class="movie page">
        <!-- <ul>
            <li @click="handlemovie('1')">正在上映</li>
            <li @click="handlemovie('2')">即将上映</li>
            <li :class="{borda:true, l:true, r:borda_r}"></li>
        </ul>
        <keep-alive>
                <component :is="comName"></component>
        </keep-alive> -->

        <ul>
            <router-link :to="{name:'nowplay'}">正在上映</router-link>
            <router-link :to="{name:'coming'}">即将上映</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vuex from "vuex";
    // import nowplay from "./nowplay.vue";
    // import coming from "./coming.vue";
    export default {
        // components:{
        //     "nowplay-com":nowplay,
        //     "coming-com":coming,
        // },
        data(){
            return{
                borda_r:false,
                comName:"nowplay-com"
            }
        },
        methods:{
            handlemovie(val){
                if(val == 1){
                    this.borda_r = false;
                     this.comName = "nowplay-com"
                }else{
                    this.borda_r =true;
                     this.comName = "coming-com"
                }
            },
            ...Vuex.mapActions({
                nowPlaymovie:"movie/nowPlaymovie"
            }),
            ...Vuex.mapActions({
                comingmovie:"movie/comingmovie"
            })
        },
        created(){
            this.nowPlaymovie();
            this.comingmovie();
            if(this.$route.path =="/movie"){
                this.$router.push({name:"nowplay"})
            }
        }
    }
</script>

<style scoped>
    .movie{
        padding:1rem .3rem 0;
        background:#fff;
    }
    .movie>ul{
        width:100%;
        height:.9rem;
        display:flex;
        justify-content:space-between;
        background-color:#f9f9f9;
        position:relative;
    }
    .movie>ul>.borda{
        position:absolute;
        bottom:0;
        width:50%;
        background:#fe6e00;
        height:4px;
    }
    .movie>ul>.l{
        left:0;
    }
    .movie>ul>.r{
        left:50%;
    }
    .movie>ul>li{
        width:50%;
        line-height:.9rem;
        text-align:center;
    }

    .movie>ul>a{
        font-size:.32rem;
        width:50%;
        line-height:.9rem;
        text-align:center;

    }
    .movie>ul>.router-link-active{
        text-align:center;
        line-height:.9rem;
        color:#fe6e00;
        border-bottom:3px solid #fe6e00;
    }
</style>

