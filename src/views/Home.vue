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
    <div class="panel d-flex align-center justify-center white create" style="min-height: 120vh; margin-top: 0vh; z-index: 2;">
      <div style="width: 100vw;">
        <v-container>
          <v-row style="padding-top: 20vh;">
            <v-col cols="7">
              <v-card rounded='lg' elevation="0" class="pr-12">
                
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
              <v-card elevation="0" class="mt-16" style="position: relative">
                <div style="position: absolute; top: 0; left: 0; width: 100%" class="rounded-lg pb-8 pt-10 nb-bg-green-lt">
                  <div class="px-8 d-flex mb-12">
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
    <div class="panel white" style="margin-top: -100px">
      <div class="d-flex align-center justify-center" style="min-height: 110vh; background-color: #F4F7F4" :style="{backgroundImage: `url(${require('@/assets/images/backgroundImages/purplegradient.svg')}), url(${require('@/assets/images/backgroundImages/greengradient.svg')})`, backgroundPosition: 'top left 20vw, top right 0px'}">

      <Projections />
      </div>
    </div>
    <div>
      <div>
        <v-container>
          <v-row>
            <v-col cols="12" class="py-12">
              <v-card height="30vh" elevation="0" class="rounded-xl pa-16" :style="{ backgroundImage: `url(${require('@/assets/images/backgroundImages/purplegradientdown.svg')}), url(${require('@/assets/images/backgroundImages/greengradient.svg')}), url(${require('@/assets/images/backgroundImages/yellowgradient.svg')})`, backgroundPosition: 'top left 0, top right -10vw, center left 0'}">
                <div style="width: 100%; background-color: none; height: 100%; position: relative;" >
                  <div class="rounded-lg elevated-light pa-16" style="width: 100%; background-color: white; position: absolute; bottom: 0;">
                    <h1 class="text-center px-16 mb-16">We've created products that are solving problems for over 50,000+ people</h1>
                    <div class="mb-4">
                      <v-img :src="require('@/assets/icons/nodcheckoutlogo.svg')" max-width="250px"></v-img>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>

          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between pa-16 pb-12 rounded-xl" style="background-color: #F4F7F4">
                <div style="flex: 2">
                  <h1 class="mb-0">Be the first to know when we launch</h1>
                </div>
                <div style="flex: 1;">
                  &nbsp;
                </div>
                <div class='d-flex align-center' style="flex: 3;">
                   <v-text-field class='curved' placeholder="Enter your email" hide-details outlined></v-text-field>
              
              <v-btn class="primary white--text curved nb-black text-capitalize mt-1 ml-4" x-large>
                <span class="font-weight-medium">Join Waitlist</span>
              </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div>
      <div>
        <v-container>
          <v-row class="my-8">
            <v-col cols="12">
              <div class="nb-black-bg rounded-xl pa-16">
                <div class="d-flex align-center">
                  <div style="flex: 1;">

                  <v-img :src="require('@/assets/icons/logowhite.svg')" max-width="250"></v-img>
                  </div>
                  <div class="d-flex align-center" style="flex: 1">
                    <p class="mb-0 font-weight-light white--text" style="flex: 1">Fund NodBank</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1">Our Products</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1">The Team</p>
                  </div>
                </div>
                <div class="d-flex align-center mt-8">
                  <div style="flex: 1;">

                    <p class="white--text mb-0 font-weight-light subtitle-2">&copy; Copyright {{ new Date().getFullYear() }} NodBank</p>
                  </div>
                  <div class="d-flex align-center" style="flex: 1">
                    <p class="mb-0 font-weight-light white--text" style="flex: 1">Contact Us</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1">Terms of Use</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1">Privacy</p>
                  </div>
                </div>

              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
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
export default {
  name: 'Home',
  components: {
    HeaderJumbotron,
    FeaturesBlock
    // HelloWorld
  ,
    Projections},
  mounted(){
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
      console.log({gsap, ScrollTrigger, tl})

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
      
  }

}
</script>
