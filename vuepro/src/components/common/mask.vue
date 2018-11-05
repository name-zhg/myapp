<template>
    <div class="mask" @click="handleShow()"></div>
</template>

<script>
export default {
    methods:{
        handleShow(){
            this.$emit("handleShow",false)
        }
    }
}
</script>

<style>
    .mask{
        width:100%;
        height:100%;
        background:rgba(0,0,0,.5);
        position:absolute;
        left:0;
        top:1rem;
        z-index:5;
    }
    .mask-enter-active{
        animation:maskEnter 300ms;
    }
    .mask-leave-active{
        animation:maskLeave 300ms;
    }
    @keyframes maskEnter{
        0%{
            opacity:0;
        }
        100%{
            opacity:.5;
        }
    }
    @keyframes maskLeave{
        0%{
            opacity:.5;
        }
        100%{
            opacity:0
        }
    }
</style>
