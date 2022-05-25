<template>
    <div class="mainAbout" :class="{mainAboutDesk: mq.mPlus}"  >
        <h2 data-aos="fade-right" data-aos-duration="1500">A propos de moi</h2>
        <p class="pAbout pAbout1" data-aos="fade-right" data-aos-duration="1500">Je suis un passionné de programmation initialement industrielle mais depuis Juin 2021 s'est rajouté le coding et c'est de là qu'est partis mon aventure dans le monde du développement web  👌.</p>
        <p class="pAbout pAbout2" data-aos="fade-right" data-aos-duration="1750">A l'heure actuelle je suis technicien en electricité-automation dans une grande usine automobile de la marque aux 4 anneaux.</p>
        <p class="pAbout pAbout3" data-aos="fade-right" data-aos-duration="2000">C'est donc tout naturellement que j'ai décidé d'y consacrer une petite section en parrallèle dans ce portfolio.</p>
        
        <div class="choice" data-aos="fade-up" data-aos-duration="2000">
            <div class="flexBtn">
                <button @click="toggle=true" :class="{isLeftActive: toggle}">Slide to Dev</button>
                <button @click="toggle=false" :class="{isRightActive: !toggle}">Slide to Automation</button>
            </div>
            <div class="toAbsoluteContent">
                <Transition name="choiceLeft">
                    <div v-if="toggle" class="content">
                        <p>
                            Technologies avec lesquelles je travaille sur mes projets.
                        </p>
                        <ul>
                            <li class="progressContainer"><span class="progressName">HTML & CSS/SCSS</span><span class="progressBar dev1"></span></li>
                            <li class="progressContainer"><span class="progressName">Javascript (ES6+)</span><span class="progressBar dev2"></span></li>
                            <li class="progressContainer"><span class="progressName">Vue 3 + Vite</span><span class="progressBar dev3"></span></li>
                            <li class="progressContainer"><span class="progressName">UI Frameworks</span><span class="progressBar dev4"></span></li>
                            <li class="progressContainer"><span class="progressName">Github</span><span class="progressBar dev5"></span></li>
                            <li class="progressContainer"><span class="progressName">Wordpress</span><span class="progressBar dev6"></span></li>
                            <li class="progressContainer"><span class="progressName">...</span><span class="progressBar more"></span></li>

                        </ul>
                        <Vue3Lottie class="animation" animationLink="https://assets10.lottiefiles.com/packages/lf20_gssu2dkm.json"  />
                    </div>
                </Transition>
                <Transition name="choiceRight">
                    <div v-if="!toggle" class="content">
                        <p>
                            Ici, mon travail de technicien m'a permis d'acquérir nombreuses de ces compétences par le biais de formations professionnelles.
                        </p>
                        <ul>
                            <li class="progressContainer"><span class="progressName">Step 7</span><span class="progressBar aut1"></span></li>
                            <li class="progressContainer"><span class="progressName">TIA Portal</span><span class="progressBar aut2"></span></li>
                            <li class="progressContainer"><span class="progressName">HMI : WinCC / Sutron</span><span class="progressBar aut3"></span></li>
                            <li class="progressContainer"><span class="progressName">Robots : Fanuc / KUKKA / ABB</span><span class="progressBar aut4"></span></li>
                            <li class="progressContainer"><span class="progressName">SEW : MoviTools</span><span class="progressBar aut5"></span></li>
                            <li class="progressContainer"><span class="progressName">Caméra 3D : VMT IS</span><span class="progressBar aut6"></span></li>
                            <li class="progressContainer"><span class="progressName">...</span><span class="progressBar more"></span></li>
                        </ul>
                        <Vue3Lottie class="animation" animationLink="https://assets2.lottiefiles.com/packages/lf20_znCQsa.json" :speed="0.5" />
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        inject:["mq"],
        data() {
            return {
                toggle: true
            }
        },
    }
</script>

<style lang="scss" scoped>
.mainAbout{
    .pAbout{
        max-width: 90%;
        margin:15px auto 10px;
    }
    .pAbout1{
        margin-top:40px;
    }
    .pAbout3{
        margin-bottom: 50px;
    }
    .flexBtn{
        display: flex;
        width:100%;
        margin:0 auto;
        button{
            border:none;
            width:50%;
            color:var(--slate);
            padding:15px 0;
            transition: all 1s linear;
            opacity:.5;
            font-size: 1rem;
            letter-spacing: 2px;
            outline:transparent;
            cursor: pointer;
            &:first-child{
                background: linear-gradient(90deg, transparent , var(--green-tint));
            }
            &:last-child{
                background: linear-gradient(90deg, var(--green-tint) 70%,transparent);
            }
        }
        .isLeftActive,.isRightActive{
            background-color: var(--green-tint)!important;
            color: var(--green);
            opacity:1;
        }     
    }
    // TRANSITIONS
    .choiceLeft-enter-active,
    .choiceLeft-leave-active,
    .choiceRight-enter-active,
    .choiceRight-leave-active {
    transition: all 1s ease-in-out;
    }

    .choiceLeft-enter-from,
    .choiceLeft-leave-to{
        opacity: 0;
        transform: translateX(-100%);
    }
    .choiceRight-enter-from,
    .choiceRight-leave-to{
        opacity: 0;
        transform: translateX(100%);
    }   
    //END TRANSITIONS
    .toAbsoluteContent{
        overflow: hidden;
        position:relative;
        height: 550px;
        margin:25px auto ;
        max-width:90%;
        .content{
            position: absolute;
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            
            p{
                margin-top:15px;
                margin-bottom:25px;
            }
            ul{
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                
                .progressContainer{
                    position: relative;
                    width: 100%;
                    border-radius: 4px;
                    background-color: transparent;
                    margin-bottom: 0.5em;
                    .progressBar {
                        position: absolute;
                        bottom:-7px;
                        left: 0;
                        display: block;
                        border-radius: 4px;
                        height: 3px;
                            &.dev1 { width: 85%; background-color: var(--green-transparent)}
                            &.dev2 { width: 75%; background-color: var(--green-transparent)}
                            &.dev3 { width: 65%; background-color: var(--green-transparent)}
                            &.dev4 { width: 65%; background-color: var(--green-transparent)}
                            &.dev5 { width: 60%; background-color:  var(--green-transparent)}
                            &.dev6 { width: 50%; background-color:  var(--green-transparent)}
                            &.aut1 { width: 90%; background-color: var(--green-transparent)}
                            &.aut2 { width: 80%; background-color: var(--green-transparent)}
                            &.aut3 { width: 80%; background-color: var(--green-transparent)}
                            &.aut4 { width: 70%; background-color: var(--green-transparent)}
                            &.aut5 { width: 70%; background-color:  var(--green-transparent)}
                            &.aut6 { width: 70%; background-color:  var(--green-transparent)}
                    }
                    .progressName {
                        margin-left: 5px;
                        position: relative;
                        color: white; //#333
                        //font-weight: 600;
                    }
                
                }
            }
            .animation{
                height:200px;
                
            }
        }
    }
}
.mainAboutDesk{
    
    .toAbsoluteContent{
        height:clamp(300px , 30vw , 450px);
        margin-bottom: 50px;
        .content{
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 30% 70%;
            align-items: center;
            justify-content: space-between;
            width:100%;
            row-gap: 0;
            p{
                grid-column: span 2;
                grid-row: 1;
            }
            ul{
                grid-column: 1;
                grid-row: 2;
                
            }
            .animation{
                grid-column: 2;
                grid-row: span 2;
                width:30vw;
                height:auto;
                max-width: 500px;
            }
        }
    }
}
</style>