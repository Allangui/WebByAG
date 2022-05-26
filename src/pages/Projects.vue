<template>
    <div class="mainProjects" :class="{mainProjectsDesk: mq.mPlus}" >
        <h2 data-aos="fade-right" data-aos-duration="1000">Mes réalisations</h2>
        <p data-aos="fade-right" data-aos-duration="1000">Voici quelques-unes de mes réalisations, nombre d'entre elles proviennent de challenges tirés de <a> Frontend Mentor </a> qui m'a beaucoup servi pour me forger une certaine expérience sur divers aspects du développement web. 
            <br><span>Encore de nombreux projets sont à venir ! 😉</span>
        </p>
        <div :class="!mq.mPlus?'toOverflowCarousel':null">
            <MyCarousel data-aos="flip-up" data-aos-duration="1500"/>
        </div>
    </div>
</template>

<script>
import MyCarousel from "../components/myCarousel.vue"
    export default {
        inject:["mq"],
        components: {
          MyCarousel,
        },
    }
</script>

<style lang="scss" scoped>
.mainProjects{
    margin-bottom:100px;
    p{
        margin:30px auto;
        max-width: 90%;
    }
    .toOverflowCarousel{
        overflow: hidden;
    }
}
.mainProjectsDesk{
    p{
        margin:50px auto;
    }
}


</style>