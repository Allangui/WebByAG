<template>
    <div class="mainProjects" :class="{mainProjectsDesk: mq.mPlus}" >
        <h2 data-aos="fade-right" data-aos-duration="1500">Mes réalisations</h2>
        <p data-aos="fade-right" data-aos-duration="1500">Voici quelques une de mes réalisations, nombreuses d'entre elles proviennent de challenges tiré de <a> Frontend Mentor </a> qui m'a beaucoup servis pour me forger une certaine expériences sur divers aspects du developpement web. 
        <span>Encore de nombreux projets sont à venir ! 😉</span>
        </p>
        <MyCarousel data-aos="flip-down" data-aos-duration="2000"/>
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
}
.mainProjectsDesk{
    p{
        margin:50px auto;
    }
}


</style>