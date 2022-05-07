<template>
  <div class="mainCarousel">
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="{ clickable: true }"
      :effect="'coverflow'"
      :grab-cursor="true"
      :centered-slides="true"
      :slides-per-view="'auto'"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
    >
      <swiper-slide class="slide" v-for="data in datas" :key="data.id" >
          <h3>{{ data.name }}</h3>
          <div class="forBackImg">
            <img :src="data.img" alt="img" @mouseover="data.isHover= true" >
            <Transition name="content">
              <div v-show="data.isHover" @mouseleave="data.isHover= false" class="contentOnHover">
                <p>{{ data.description }} </p>
                <ul>
                  <li v-for="technology in data.technology" :key="technology.id">
                    {{ technology }}
                  </li>
                </ul>
                <div class="flexButton">
                  <button class="btnGithub"><a :href="data.urlGithub" target="_blank"><i class="fa-brands fa-github fa-xl fa-flip" style="--fa-animation-duration: 3s;"></i>Github</a></button>
                  <button class="btnWebsite"><a :href="data.urlWebsite" target="_blank">Go on Website<i class="fa-solid fa-arrow-right-from-bracket"></i></a></button>
                </div>
              </div>
            </Transition>
            </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script >
  import dataCarousel from '../dataCarousel.json'
  import { Pagination, EffectCoverflow } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/scss'
  import 'swiper/scss/pagination'
  import 'swiper/scss/effect-coverflow'

  export default ({
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        datas: dataCarousel,
      }
    },
    setup() {
      return {
        modules: [Pagination, EffectCoverflow]
      }
    },
  })
</script>
<style lang="scss">
:root {
    --swiper-pagination-color: var(--green);
    --swiper-pagination-bullet-size: 8px;
    --swiper-pagination-bullet-width: 15px;
    --swiper-pagination-bullet-height: 2px;
    --swiper-pagination-bullet-inactive-color: var(--light-slate);
    --swiper-pagination-bullet-inactive-opacity: 0.2;
    --swiper-pagination-bullet-opacity: 1;
    --swiper-pagination-bullet-horizontal-gap: 4px;
    --swiper-pagination-bullet-vertical-gap: 6px;
}
</style>
<style lang="scss" scoped>


  .swiper {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .slide{
      min-width: 325px;
      max-width: 500px;
      width: 75%;
      height: auto;
      background-color: var(--navy-shadow);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      .forBackImg{
        position: relative;
        img{
          display: block;
          width: 100%;
          min-height: 275px;
          height: 100%;
          object-fit: cover;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          
        }
        .content-enter-active,
        .content-leave-active {
          transition: opacity .3s ease;
        }

        .content-enter-from,
        .content-leave-to {
          opacity: 0;
        }
        .contentOnHover{
          position: absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          background-color: rgba(0,0,0,0.7);
          display: grid;
          grid-template-columns: 1;
          grid-template-rows: repeat(7 ,1fr);
          p{
            width:80%;
            margin:0 auto 10px;
            font-size: clamp(.9rem,2vw,1.2rem);
            font-weight: 400!important;
            color: var(--white)!important;
            grid-column: 1;
            grid-row: 3;
          }
          ul{
            width:80%;
            margin: 0 auto;
            grid-column: 1;
            grid-row: 4;
            display: flex;
            column-gap: 10px;
            align-items: center;
            justify-content: left;
            flex-wrap:wrap;
            row-gap: 10px;
            li{
              justify-self: center;
              color:var(--green);
              padding:5px 10px;
              border:solid 1px var(--green);
              
            }
          }
          .flexButton{
              width:90%;
              margin: 0 auto;
              grid-column: 1;
              grid-row: 6;
              display: flex;
              column-gap: 10px;
              align-items: center;
              justify-content: space-between;
              .btnGithub, .btnWebsite{
                height:40px;
                border-radius: 5px;
                border:none;
                background-color: var(--light-white);
                a{
                  font-size: 1rem;
                  font-weight: 700;
                  color:var(--lightest-navy);
                  text-decoration: none;
                  display: block;
                  width:100%;
                  height:100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                }
              }
              .btnGithub{
                width:30%;
                min-width: 90px;
              }
              .btnWebsite{
                width:70%;
                a{
                  justify-content: center;
                  column-gap: 10px;
                }
              }
          }
        }
      }
    }
  }
</style>