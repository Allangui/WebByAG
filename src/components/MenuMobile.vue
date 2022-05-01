<template>
    <div class="mainMenuMobile">
        <nav>
            <router-link :to="{hash: '#home'}">Home</router-link>
            <router-link :to="{hash: '#about'}">About</router-link>
            <router-link :to="{hash: '#projects'}">My Projects</router-link>
            <router-link :to="{hash: '#contact'}" >Contact</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        
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