<template>
  <div class="home-page">
    

    <div class="panel header " style="position: relative; z-index: 4;">
      <HeaderJumbotron />
    </div>
    <div class="panel features" style="min-height: 110vh; min-width: 100%; margin-top: -90vh; z-index: 3; ">
      <div style="min-height: 110vh; width: 100%" :style="{backgroundImage: `url(${require('@/assets/images/backgroundImages/lefthalfcircle.svg')}), url(${require('@/assets/images/backgroundImages/righthalfcircle.svg')})`, backgroundPosition: 'top 30vh left 0px, top 10vh right 0px'}" class="curved-bl-xl curved-br-xl nb-bg-purple-lt">

      
      <FeaturesBlock />
      </div>
    </div>
    <div class="panel d-flex align-center justify-center white create" :style="{paddingTop: $vuetify.breakpoint.mdAndUp ? '0': '30vh'}" style="min-height: 120vh; z-index: 2;">
      <div style="width: 100vw;">
        <v-container>
          <v-row style="padding-top: 20vh;">
            <v-col cols="12" md="8">
              <v-card rounded='lg' elevation="0" :class="$vuetify.breakpoint.mdAndUp ? 'pr-12': 'px-4'">
                
                  <v-img
                  :aspect-ratio="1.3"
                    :src="require('@/assets/images/createmore.png')"
                    class="rounded-lg"
                    height="100%"
                  >
                  <div style="height: 100%; width: 70%; position: relative;" v-if="$vuetify.breakpoint.mdAndUp">
                    
                    <svg width="auto" height="16vh" viewBox="0 0 253 248" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; bottom: 0; left: 16vw;"><g><path d="M-1.44427 0H-594.422V290H222.155H401.971V248H220.612C193.142 248 168.212 231.933 156.864 206.918L89.6238 58.6892C73.4127 22.9522 37.7977 0 -1.44427 0Z" fill="#FFFFFF"></path></g></svg>
                    <div class="white pa-6 pb-0 clipped-one rounded-tr-xl elevated-light" style="z-index; 3; height: 16vh; position: absolute; bottom: 0;">
                      <h2>Create more, worry less</h2>
                      <p v-if="$vuetify.breakpoint.mdAndUp" class="font-weight-light pr-16 nb-altfont" style="font-family: Mazzard !important;">We allow you focus more on your business, while we do the heavy lifting</p>
                    </div>
                  </div>
                  <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template>
                  </v-img>
                
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="nb-bg-green-lt pa-8 rounded-lg elevated-light" elevation="0">
                <div class="white elevated-light" style="display: flex; align-items: center; position: relative; width: 100%; border-radius: 10px;">
                  <div style="width: 50%" class="text-center px-4">
                    <span style="font-size: 14px">Transfer was successful</span>
                  </div>
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
                    <p class="mb-0" style="font-size: 14px">Your payment is recieved!</p>
                    <p class="primary--text mb-0" style="font-size: 14px;">&#8358; 500,000</p>
                  </div>
                </div>
                <p class="mb-0 mt-8 ml-2">Freedom to move your money anytime and anywhere.</p>
              </v-card>
              <v-card elevation="0" class="mt-16" style="position: relative">
                <div style="position: absolute; top: 0; left: 0; width: 100%" class="rounded-lg pb-8 pt-10 nb-bg-green-lt elevated-light">
                  <div class="d-flex mb-12" :class="$vuetify.breakpoint.mdAndUp ? 'px-8':'px-4'">
                    <v-btn outlined color="grey lighten-1" class="text-capitalize font-weight-light">
                      <span>Cashflow</span>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn outlined color="grey lighten-1" class="text-capitalize font-weight-light"><v-icon left>mdi-filter-variant</v-icon> Last 7 Days</v-btn>
                  </div>
                  <v-img :src="require('@/assets/icons/chart.svg')">
                  <div class="d-flex justify-center">
                    <div class="white px-4 py-3 mt-2 rounded-lg">
                      <p class="mb-0">$560</p>
                    </div>
                  </div>
                  </v-img>
                  <div class="px-8">

                    <p class="nb-altfont mb-0">Get reports on your cashflow and monitor expenses</p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    
    <div class="panel" style="min-height: 80vh; background-color: none;">
      &nbsp;
    </div>
    <div class="panel white" :style="{marginTop: $vuetify.breakpoint.mdAndUp ? '-100px': '100px'}">
      <div class="d-flex align-center justify-center" style="min-height: 110vh; background-color: #F4F7F4" :style="{backgroundImage: `url(${require('@/assets/images/backgroundImages/purplegradient.svg')}), url(${require('@/assets/images/backgroundImages/greengradient.svg')})`, backgroundPosition: 'top left 20vw, top right 0px'}">

      <Projections />
      </div>
    </div>
    <div>
      <div>
        <Products />
        <CTA />
      </div>
    </div>
    <div>
      <Footer />
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
import Projections from '../components/sections/Projections.vue';
import Footer from '../components/sections/Footer.vue';
import CTA from '../components/sections/CTA.vue';
import Products from '../components/sections/Products.vue';
export default {
  name: 'Home',
  components: {
    HeaderJumbotron,
    FeaturesBlock,
    Projections,
    Footer,
    CTA,
    Products},
  mounted(){
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
      console.log({gsap, ScrollTrigger, tl})
      console.log({breakpoint: this.$vuetify.breakpoint})
    // if (this.$vuetify.breakpoint.mdAndUp) {
           ScrollTrigger.create({
        trigger: '.header',
        start: '10vh 10%',
        scrub: true,
        endTrigger: '.header',
        end: '90% 30%',
        pin: '.features',
        pinSpacing: false,
        // markers: true,
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
        // markers: true,
      })
        }
      })
 
    // } else {
    //    ScrollTrigger.create({
    //     trigger: '.header',
    //     start: '10vh 10%',
    //     scrub: true,
    //     endTrigger: '.header',
    //     end: '90% 30%',
    //     pin: '.features',
    //     pinSpacing: false,
    //   })
    // }
      
  }

}
</script>
