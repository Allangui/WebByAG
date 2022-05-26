<template>
    <div class="mainHome" data-aos="zoom-out" data-aos-duration="1500" :class="{mainHomeDesk: mq.mPlus}">
        <h1>Hello ! Je me présente,</h1>
        <span class="name">Allan Guillotin.</span>
        <AnimBienvenue/>
        <p>Celui-ci aura pour but de présenter qui je suis, ce que je fais et avec quoi je le fais. Mais aussi de mettre en avant certains de mes projets réalisés. <br><strong>Bonne visite ! 😀</strong></p>
        <AnimName/>
    </div>
</template>

<script>
import AnimBienvenue from '../components/AnimBienvenue.vue'
import AnimName from '../components/AnimName.vue'
    export default {
    inject: ["mq"],
    components: {
        AnimBienvenue,
        AnimName
    },
    data() {
        return {
            playAnimation: true,
        };
    },
    components: { AnimBienvenue, AnimName }
}
</script>

<style lang="scss" scoped>
.mainHome{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    margin-top: 75px;
    margin-bottom:50px;
    
    .name{
        font-size: clamp(2rem,5vw,5rem);
        color: var(--lightest-slate);
        font-weight: 700;
        
    }
    p{
        max-width: 100%;
        strong{
            display:inline-block;
            margin-top:20px;
        }
    }
}
.mainHomeDesk{
    margin-bottom:150px;
    margin-top:0;
    p{
        max-width: 80%;
    }
    .myDynamicName{
        margin:100px auto 25px;
    }
}

</style>