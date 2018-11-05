<template>
    <div class="home page">
        <banner-com></banner-com>
        <nowplay-com></nowplay-com>
        <upcoming-com></upcoming-com>
    </div>
</template>

<script>
import banner from "./banner.vue"
import nowplay from "./nowplay.vue"
import upcoming from "./upcoming.vue"
export default {
    components:{
        "banner-com":banner,
        "nowplay-com":nowplay,
        "upcoming-com":upcoming
    }
}
</script>

<style>

</style>
