<template>
  <div class="home-page">
    <div class="panel">
      <HeaderJumbotron />
    </div>
    <div class="panel d-flex align-center justify-center secondary" style="min-height: 110vh;">
      <h1>Some Content</h1>
    </div>
    <div class="panel d-flex align-center justify-center accent" style="min-height: 110vh;">
      <h1>Another Content</h1>
    </div>
    <div class="panel d-flex align-center justify-center info" style="min-height: 110vh;">
      <h1>Yet Another Section</h1>
    </div>
  </div>
</template>

<script>
import HeaderJumbotron from '../components/sections/HeaderJumbotron.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: 'Home',
  components: {
    HeaderJumbotron
    // HelloWorld
  },
  mounted(){
    console.log({gsap, ScrollTrigger})
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel) => {
      // gsap.from(panel, {
      //   scrollTrigger: {
      //     trigger: panel,
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: true,
      //     pin: true,
      //     markers: true,
      //     toggleActions: "restart none none none"
      //   },
      //   opacity: 0,
      //   duration: 1
      // })
    ScrollTrigger.create({
      trigger: panel,
      markers: true,
      showLabel: true,
      start: '60%',
      
      pin: true,
      pinSpacing: false,
      pinType: "start",
    })
    });
    ScrollTrigger.create({
      snap: 1 / 4 // snap whole page to the closest section!
    });
  }

}
</script>
