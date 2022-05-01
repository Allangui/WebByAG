<template>
    <div class="mainTopBar">
        <div class="flexLogo" >
            <img class="logo" src="../assets/logo.svg" alt="logo">
            <img class="logoName" src="../assets/logoName.svg" alt="logoName">
        </div>
        <Burger v-if="mq.s" @click="isMenuOpen? isMenuOpen=false : isMenuOpen=true" :propMenuOpen="isMenuOpen" />
        <nav v-else>
            <router-link :to="{hash: '#home'}">Home</router-link>
            <router-link :to="{hash: '#about'}">About</router-link>
            <router-link :to="{hash: '#projects'}">My Projects</router-link>
            <router-link :to="{hash: '#contact'}" >Contact</router-link>
        </nav>
        <Transition name="menu">
            <MenuMobile v-if="isMenuOpen & mq.s"  v-click-outside="onClickOutside"/>
        </Transition>
    </div>
</template>

<script>
import Burger from "./Burger.vue"
import MenuMobile from "./MenuMobile.vue"
import vClickOutside from "click-outside-vue3"

export default {
    inject:["mq"],
    components: {
    Burger,
    MenuMobile
    },
    data() {
        return {
            isMenuOpen:false,
        }
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    methods: {
      onClickOutside (event) {
          console.log(event)
        if( (event.y ) > 100){
            this.isMenuOpen=false
        }else if(event.targetTouches[0].clientY >100){
            this.isMenuOpen=false
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.mainTopBar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 5vw;
    width:100%;
    height: var(--topbarHeight);
    background-color:var(--lightest-navy);
    position: sticky;
    top:0;
    left:0;
    z-index: 90;
    .flexLogo{
        display: flex;
        align-items: center;
        column-gap: 20px;
        .logo{
            width:60px;
            height: auto;
            border:none;
            border-radius: 50%;
        }
        .logoName{
            width: clamp(120px , 10vw, 150px);
            height:auto;
            margin-top:5px;
        }
    }

    nav{
        display: flex;
        align-items: center;
        column-gap: 30px;
        padding:50px 0 50px 0;
        a{
            font-size: 1.3rem;
            color:var(--green);
            text-decoration: none;
            position: relative;
            padding:5px;
            &::after{
                content:'';
                position: absolute;
                top:100%;
                left: 50%;
                transform: translateX(-50%);
                transition:all .3s ease;
                width:0px;
                height:2px; 
                background-color: var(--green) ;
                overflow: hidden;
            }
            &:hover{
                &::after{
                    width: 50%;
                }
            }
            &:last-child{
                padding:10px;
                border:solid 1px var(--green);
                border-radius: 5px;
                transition: all .5s ease;
                &:hover{
                    background-color: var(--green-tint);
                    &:hover{
                        &::after{
                            width: 0;
                        }
                    }    
                }
            }
        }
    }
    .menu-enter-active,
    .menu-leave-active {
    transition: all 1s ease;
    }

    .menu-enter-from,
    .menu-leave-to {
    opacity: 0;
    transform: translate(100%,-100%) scale(-2,-1) skew(90deg, 45deg);
    
    }
}
</style>