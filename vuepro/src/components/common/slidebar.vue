<template>
    <div class="bar">
        <ul>
            <li v-for="(item,index) in bar">
                <router-link :to="item.name">{{item.title}}<i class=iconfont>&#xe616;</i></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vuex from "vuex";
    export default {
        computed:{
            ...Vuex.mapState({
                bar:state=>state.bar
            })
        }
    }
</script>

<style scoped>
    .bar{
        width:75%;
        height:100%;
        position:absolute;
        top:1rem;
        left:0;
        background:#282828;
        z-index:10;
    }
    .bar>ul{
        width:100%;
    }
    .bar>ul>li{
        width:100%;
        line-height:1.02rem;
        border-bottom:2px dotted #333;
        padding:0 .32rem;
        font-size:.28rem;
    }
    .bar>ul>li>a{
        color:#9a9a9a;
    }
    .bar>ul>li>a>i{
        float:right;
        color:#9a9a9a;
    }
    .slide-enter-active{
        animation:slideEnter 300ms;
    }
    .slide-leave-active{
        animation:slideLeave 300ms;
    }
    @keyframes slideEnter{
        0%{
            transform:translateX(-100%)
        }
        100%{
            transform:translateX(0%)
        }
    }
    @keyframes slideLeave{
        0%{
            transform:translateX(0%)
        }
        100%{
            transform:translate(-100%)
        }
    }

</style>


