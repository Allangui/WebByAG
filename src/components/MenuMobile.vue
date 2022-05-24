<template>
    <div class="mainMenuMobile" :style="mq.isLandscape?'overflow:scroll;':null">
        <nav>
            <router-link :class="whichRouteActive =='home'?'routeActive': null" :to="{hash: '#home', name:'home' , params: { isFromNav: true }}" @click="$emit('linkClicked')">Home</router-link>
            <router-link :class="whichRouteActive =='about'?'routeActive': null" :to="{hash: '#about', name:'about' , params: { isFromNav: true }}" @click="$emit('linkClicked')">About</router-link>
            <router-link :class="whichRouteActive =='projects'?'routeActive': null" :to="{hash: '#projects', name:'projects' , params: { isFromNav: true }}" @click="$emit('linkClicked')">Projects</router-link>
            <router-link :class="whichRouteActive =='contact'?'routeActive': null" :to="{hash: '#contact', name:'contact' , params: { isFromNav: true }}" @click="$emit('linkClicked')">Contact</router-link>
        </nav>
        <NavSocial/>
    </div>
</template>

<script>
import NavSocial from "./NavSocial.vue"
export default {
    inject:["mq"],
    components:{
        NavSocial
    },
    emits:['linkClicked'],
    props: ["whichRouteActive"]
}
</script>

<style lang="scss" scoped>
.mainMenuMobile{
    position: fixed;
    z-index:100;
    top:0;
    right:0;
    height:100%;
    width:75%;
    background-color:var(--lightest-navy);
    opacity:.9;
    padding-top:var(--topbarHeight);
    nav{
        display: flex;
        flex-direction: column;
        row-gap: clamp(20px ,7vw , 30px);
        padding:60px 0px 50px 15%;
        a{
            font-size: clamp(1.6rem , 7vw , 2.5rem);
            text-align: right;
            padding:10px 30px;
            letter-spacing: 5px;
            color:var(--green);
            text-decoration: none;
            background-color: rgba(#fff, .1);
        }
        .routeActive{
            color: var(--white);
            background-color: rgba(#64ffda, .4);
        }
    }
}
</style>