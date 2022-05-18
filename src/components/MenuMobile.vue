<template>
    <div class="mainMenuMobile" >
        <nav>
            <router-link :to="{hash: '#home', name:'home' , params: { isFromNav: true }}" @click="$emit('linkClicked')">Home</router-link>
            <router-link :to="{hash: '#about', name:'about' , params: { isFromNav: true }}" @click="$emit('linkClicked')">About</router-link>
            <router-link :to="{hash: '#projects', name:'projects' , params: { isFromNav: true }}" @click="$emit('linkClicked')">My Projects</router-link>
            <router-link :to="{hash: '#contact', name:'contact' , params: { isFromNav: true }}" @click="$emit('linkClicked')">Contact</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    emits:['linkClicked']
}
</script>

<style lang="scss" scoped>
.mainMenuMobile{
    position: fixed;
    z-index:100;
    top:0;
    right:0;
    height:100vh;
    width:75%;
    background-color:var(--lightest-navy);
    opacity:.9;
    padding-top:var(--topbarHeight);
    nav{
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding:50px 0 50px 15%;
        a{
            font-size: 2rem;
            color:var(--green);
            text-decoration: none;
        }
    }
}
</style>