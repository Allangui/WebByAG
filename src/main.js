import { createApp } from 'vue'
import App from './App.vue'
import router from'./router'
import { Vue3Mq } from 'vue3-mq'
import Vue3Lottie from 'vue3-lottie'
import AOS from 'aos'
//   FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

//   IMPORT GLOBAL STYLE

import 'vue3-lottie/dist/style.css'
import 'aos/dist/aos.css'

//  USING IMPORTS 

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);
AOS.init()

app.use(Vue3Mq,{
    breakpoints:{
        s:0,
        m:768,
        xl:1200
    }
})
app.use(Vue3Lottie)
app.use(router)
app.mount('#app')
