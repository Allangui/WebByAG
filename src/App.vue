<template>
  <TopBar/>
  <div :class="mq.s ? 'containerMobile':'containerDesk'">
    <Home  id="home" class="section"/>
    <About id="about" class="section"/>
    <Projects id="projects" class="section"/>
    <Contact id="contact" class="section" />
    <NavSocial v-if="mq.mPlus"/>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue"
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Projects from "./pages/Projects.vue"
import Contact from "./pages/Contact.vue"
import NavSocial from"./components/NavSocial.vue"

export default{
  inject:["mq"],
  components: {
    TopBar,
    Home,
    About,
    Projects,
    Contact,
    NavSocial
  },
  data () {
    return {
      sectionObserver: null
    }
  },
  mounted () {
    this.observeSections()
  },
  methods: {
    observeSections() {
      try {
        this.sectionObserver.disconnect()
      } catch (error) {}

      const options = {
        rootMargin: '0px 0px',
        threshold: 0.5
      }
      this.sectionObserver = new IntersectionObserver(this.sectionObserverHandler, options)
    
      // Observe each section
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        this.sectionObserver.observe(section)
      })
    },
    sectionObserverHandler (entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          // Push sectionId to router here 
          this.$router.push({ name: sectionId, hash: `#${sectionId}`, params:{isFromNav:false} })
        }
      }
    }
  }
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
      max-width: 75vw;
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