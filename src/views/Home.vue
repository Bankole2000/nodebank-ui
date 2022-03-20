<template>
  <div class="home-page">
    

    <div class="panel header " style="position: relative; z-index: 4;">
      <HeaderJumbotron />
    </div>
    <div class="panel features" style="min-height: 110vh; min-width: 100%; margin-top: -90vh; z-index: 3; ">
      <div style="min-height: 110vh; width: 100%" :style="{backgroundImage: `url(${require('@/assets/images/backgroundImages/lefthalfcircle.svg')}), url(${require('@/assets/images/backgroundImages/righthalfcircle.svg')})`, backgroundPosition: 'top 30vh left 0px, top 10vh right 0px'}" class="curved-bl-xl curved-br-xl nb-bg-purple-lt">

      <!-- <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1>
      <h1>Some Content</h1> -->
      <FeaturesBlock />
      </div>
    </div>
    <div class="panel d-flex align-center justify-center white create" style="min-height: 110vh; margin-top: 0vh; z-index: 2;">
      <div style="width: 100vw;">
        <v-container>
          <v-row style="padding-top: 20vh;">
            <v-col cols="7">
              <v-card rounded='lg' elevation="0">
                
                  <v-img
                  :aspect-ratio="1"
                    :src="require('@/assets/images/worryless.webp')"
                    class="rounded-lg"
                    height="100%"
                  >
                  <div style="height: 100%; width: 70%; position: relative;">
                    <div style="x-index: 2; position: absolute; bottom: -8vh; left: 80%; height: 25vh; background: white; width: 30vh; border-radius: 20px; transform: rotate(50deg); transform-origin: top left;">&nbsp;</div>
                    <div class="white pa-6 pb-0 clipped-one rounded-tr-xl elevated-light" style="z-index; 3; height: 16vh; position: absolute; bottom: 0;">
                      <h2>Create more, worry less</h2>
                      <p class="font-weight-light pr-16">We allow you focus more on your business, while we do the heavy lifting</p>
                    </div>
                  </div>
                  </v-img>
                
              </v-card>
            </v-col>
            <v-col cols="5">
              <v-card class="nb-bg-green-lt pa-8 rounded-lg" elevation="0">
                <div class="white elevated-light" style="display: flex; align-items: center; position: relative; width: 100%; border-radius: 10px;">
                  <div style="width: 50%" class="text-center px-4">Transfer was successful</div>
                  <div style="width: 50%; border-top-right-radius: 10px; border-bottom-right-radius: 10px;" class="text-center primary white--text py-8">$240.00</div>
                  <div style="position: absolute; top: 50%; right: 50%; transform: translate(50%, -50%)">
                    <v-btn class="secondary black--text" small fab>
                      <v-icon small style="border: 1px solid black; padding: 15px; border-radius: 50%;">mdi-check-outline</v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="d-flex align-center elevated-light white mt-8 px-8 py-6 rounded-lg">
                  <v-icon x-large>mdi-arrow-down-circle-outline</v-icon>
                  <div class="ml-4">
                    <p class="mb-0">Your payment is recieved!</p>
                    <p class="primary--text mb-0">&#8358; 500,000</p>
                  </div>
                </div>
                <p class="mb-0 mt-8 ml-2">Freedom to move your money anytime and anywhere.</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    
    <div class="panel d-flex align-center justify-center" style="min-height: 80vh;">
      &nbsp;
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
import FeaturesBlock from '../components/sections/FeaturesBlock.vue';
export default {
  name: 'Home',
  components: {
    HeaderJumbotron,
    FeaturesBlock
    // HelloWorld
  },
  mounted(){
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
      console.log({gsap, ScrollTrigger, tl})
      // gsap.utils.toArray('.panel').forEach((panel, i, panels) => {
      //   console.log({panel, i})
      //   ScrollTrigger.create({
      //   trigger: panel,
      //   start: '10vh 10%',
        
      //   endTrigger: panel,
      //   end: '90% 30%',
      //   pin: panels[i + 1],
      //   pinSpacing: false,
      //   markers: true,
      // })

      // })

      ScrollTrigger.create({
        trigger: '.header',
        start: '10vh 10%',
        scrub: true,
        endTrigger: '.header',
        end: '90% 30%',
        pin: '.features',
        pinSpacing: false,
        markers: true,
        onLeave: () => {
          ScrollTrigger.create({
        trigger: '.create',
        start: 'center bottom',
        scrub: true,
        showPin: true,
        endTrigger: '.features',
        end: 'bottom center',
        pin: true,
        pinSpacing: false,
        markers: true,
      })
        }
      })
      
      // ScrollTrigger.create({
      //   trigger: '.features',
      //   start: 'center top',
      //   showLabel: true,
      //   endTrigger: '.features',
      //   end: 'bottom center',
      //   pin: '.create',
      //   pinSpacing: false,
      //   markers: true,
      // })
    // // gsap.to('.features', {
    //   scrollTrigger: {
    //     trigger: '.features',
    //     start: 'center center',
    //     endTrigger: '.header',
        
    //     end: 'bottom top',
    //     scrub: true,
    //     pin: true,
    //     pinSpacing: false,
    //     markers: true,
    //     // toggleActions: 'restart none none none'
    //   },
    //   marginTop: '-10vh',
    //   // ease: 'power3.out',
    //   // duration: 1
    
    // })
    // tl.fromTo('.features', {
    //   marginTop: '-100vh',
    // }, {
    //   marginTop: '-10vh',
    // })
    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: ".header",
    //   start: "top top",
    //   endTrigger: '.create',
    //   end: "top bottom",
    //   // pin: '.features',
    //   markers: true,
    //   // pinSpacing: false,
    //   scrub: true
    // })
    // tl.from('.features', {
    //   scrollTrigger: {
    //     trigger: '.features',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     markers: true,
    //     scrub: true,
    //     pin: true,
    //     id: 'features'
    //   },
    //   opacity: 0,
    //   y: '-50vh',
    //   stagger: 0.2
    // })

    // gsap.utils.toArray(".panel").forEach((panel) => {
    //   // gsap.from(panel, {
    //   //   scrollTrigger: {
    //   //     trigger: panel,
    //   //     start: "top center",
    //   //     end: "bottom center",
    //   //     scrub: true,
    //   //     pin: true,
    //   //     markers: true,
    //   //     toggleActions: "restart none none none"
    //   //   },
    //   //   opacity: 0,
    //   //   duration: 1
    //   // })
    // ScrollTrigger.create({
    //   trigger: panel,
    //   markers: true,
    //   showLabel: true,
    //   start: '60% center',
      
      
    //   pin: true,
    //   pinSpacing: false,
    //   pinType: "start",
    // })
    // });
    // ScrollTrigger.create({
    //   snap: 1 / 4 // snap whole page to the closest section!
    // });
  }

}
</script>
