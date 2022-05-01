<template>
  <TopBar/>
  <div :class="mq.s ? 'containerMobile':'containerDesk'">
    <Home  id="home"/>
    <About id="about"/>
    <Projects id="projects"/>
    <Contact id="contact" />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Projects from "./pages/Projects.vue"
import Contact from "./pages/Contact.vue"

export default{
  inject:["mq"],
  components: {
    TopBar,
    Home,
    About,
    Projects,
    Contact,
  },
}

</script>

<style scoped lang="scss">

</style>

<style lang="scss">

#app {
    h1{
      font-size: clamp(1rem,2.5vw,2rem);
      font-weight:400;
      color: var(--green);
    }
    h2{
      font-size: clamp(1.4rem,4vw,3rem);
      font-weight:500;
      color: var(--lightest-slate);
      margin-bottom: 20px;
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      &::after{
        content:'';
        position: relative;
        display: block;
        top:0;
        left:10px;
        width:100%;
        height: 1px;
        background-color: var(--slate);
        opacity: .5;
      }
    }
    h3{
      font-size: clamp(1rem,2.5vw,1.4rem);
      font-weight:400;
      color: var(--white);
      padding:10px;
      text-align: center;
      letter-spacing: 5px;
      
    }
    .containerMobile{
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
    }
    .containerDesk{
      max-width: 70vw;
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
    }
  p{
    color:var(--light-Slate);
    letter-spacing: 1px;
    font-size: clamp(1rem,2vw,1.3rem);
  } 
}
</style>
