<template>
    <div class="top">
        <div id="header">
            <div class="header_l" @click="handleToggle()">
                <a href="##" class="bar">
                    <i class="iconfont">&#xe63c;</i>
                    <h3>卖座网</h3>
                </a>
            </div>
            <div class="header_r">
                <ul>
                    <li>
                        <h3>北京</h3>
                        <i class="iconfont">&#xe612;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe60d;</i>
                    </li>
                </ul>
            </div>
        </div>
        <transition name="slide">
            <slidebar-com v-show="show_bar"></slidebar-com>
        </transition>
        <transition name="mask">
            <mask-com v-show="show_bar" @handleShow="hadlemask"></mask-com>
        </transition>
        
    </div>
</template>

<script>
    import slidebar from "./slidebar.vue";
    import mask from "./mask.vue";
    export default {
        components:{
           "slidebar-com":slidebar,
           "mask-com":mask,
        },
        data(){
            return{
                show_bar:false,
            }
        },
        methods:{
            handleToggle(){
                this.show_bar = !this.show_bar;
            },
            hadlemask(val){
                this.show_bar = val;
            }
        }
    }
</script>

<style scoped>
    #header{
        width:100%;
        height:1rem;
        background:#282828;
        position:fixed;
        top:0;
        left:0;
        display:flex;
        justify-content:space-between;
    }
    .bar{
        width:2.64rem;
        height:100%;
        display:flex;
        justify-content:space-between;
    }
    .bar>i,.bar>h3{
        line-height:1rem;
        text-align:center;
        color:#fff;
    }
    .bar>i{
        width:.96rem;
        border-right:2px solid #222;
        color:#999;
        font-size:.32rem;
    }
    .bar>h3{
        width:1.68rem;
        font-weight:normal;
    }

    .header_r{
        width:2.08rem;
        height:1rem;
    }
    .header_r>ul{
        width:2.08rem;
        height:1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .header_r>ul>li{
        color:#999;
        font-size:.32rem;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    .header_r>ul>li:nth-child(2) i{
        width:.96rem;
        text-align:center;
    }
</style>
