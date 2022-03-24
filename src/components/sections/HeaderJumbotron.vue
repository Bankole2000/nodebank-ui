<template>
  <div class="header-jumbotron">
    <div class="primary" :class="$vuetify.breakpoint.mdAndUp ? 'curved-bl-xl curved-br-xl':'curved-bl-lg curved-br-lg'" style="min-height: 110vh;">
      <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-container>
        <v-row class="pt-10 pb-8">
          <v-col cols="12">
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-img :src="require('@/assets/icons/logo.svg')" class="mb-2 mr-2">
                <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template></v-img>
                <h1 class="white--text nd-altfont mb-0" style="font-size: 2.4rem; font-family: Mazzard !important;">Nodbank</h1>
              </div>
              <div>
                <JoinWaitlistModal />
                <!-- <v-btn x-large class="secondary nb-black text-capitalize curved">
                  <span class="nb-black">Join Waitlist</span>
                </v-btn> -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col sm="12" md="6" class="pr-16">
            <div style="min-height: 70vh;" class="d-flex flex-column justify-space-between">
            <h1 class="white--text" style="font-size: 64px; line-height: 88px; font-weight: 600;">The People's Bank - banking tailored for you</h1>
            <p class="mt-0 pr-2" style="font-size: 18px; font-weight: regular; line-height: 24px; letter: 2%; font-family: Mazzard !important; color: #F1EBFB;">Imagine your bank recommending your next barber, helping you book appointments plus discount on your sessions, all these and more is being made possible. You’ll be the first to know when things are up and running.</p>
            <div class="d-flex align-start" v-if="!sent">
              <v-text-field class='white-input curved' @keydown.enter="joinWaitlist" v-model="email" placeholder="Enter your email" outlined>
                <template v-slot:append>
                  <v-slide-x-transition leave-absolute>
                    <v-progress-circular v-if="loading" size="24" color="white" indeterminate></v-progress-circular>
                  </v-slide-x-transition>
                </template>
              </v-text-field>
              <v-btn @click="joinWaitlist" depressed :loading='loading' :disabled='loading' class="secondary curved nb-black text-capitalize mt-1 ml-4" x-large>
                <span class="primary--text font-weight-medium">Join Waitlist</span>
              </v-btn>
            </div>
                <v-slide-y-transition leave-absolute>
                  <v-alert v-show="sent" color="secondary" text icon="mdi-check-outline" prominent>
                    <p class="font-weight-light mb-0">
                    <span class="font-weight-bold">You're on the waitlist!</span>
                    When we launch, You'll be the first to know. 👍
                    </p>
                  </v-alert>
                </v-slide-y-transition>
            </div>
          </v-col>
          <v-col sm="12" md="6" class="pl-16">
            <div style="height: 100%; position: relative">
              <v-img :src="require('@/assets/images/ladycropped.png')" style='position: absolute; bottom: 0; left: 50%; transform: translateX(-47%); z-index: 5; height: 100%;' ></v-img>
            <v-card style="height: 100%;" class="rounded-xl pa-0 d-flex align-end">
              <v-img
                :aspect-ratio="1"
                :src="require('@/assets/images/ladybackground.png')"
                class="rounded-xl"
              
                height="100%"
              >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template></v-img>
            </v-card>
            <div style="position: absolute; bottom: 5vh; right: -5vw; z-index: 6; min-height: 15vh;">
              <v-window v-model="step" style="min-height: 15vh;">
              <v-window-item :value="1" style="min-height: 15vh;">
                <v-img :src="require('@/assets/images/recommendations.svg')" class="mx-2"></v-img>
               
              </v-window-item>
              <v-window-item :value="2" style="min-height: 15vh;">
                <v-img :src="require('@/assets/images/welcome.svg')" class="mx-2"></v-img>
                
      </v-window-item>
              </v-window>
            </div>
            <div style="position: absolute; top: 70px; left: -5.5vw; min-height: 70vh; width: 125%;">
              <v-row>
                <v-col cols="6">
                  <v-img :src="require('@/assets/images/ladyCard1.svg')"></v-img>
                  <!-- <v-card min-height="200px" elevation="0" class='rounded-xl elevated-light pa-6'>
                    <v-card-title class="pa-0 mb-6">
                      <span style="font-size: 12px; font-weight: 600; line-height: 14.18px; letter: 2%; color: #A4A7B0;">Earning Summary</span>
                    </v-card-title>
                    <div class="d-flex align-start px-0">
                      <v-img :src="require('@/assets/icons/smallchart.svg')" height='64px' contain>
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular
                            indeterminate
                            color="primary lighten-2"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                      </v-img>
                      <div class="ml-n4">
                        <h2>&#8358;500,000</h2>
                        <p class="caption grey--text">Since the last 7 days</p>
                      </div>
                    </div>
                    <div class="d-flex px-4">
                      <v-divider class="mb-2"></v-divider>
                    </div>
                    <div class="pb-4 px-4">
                      <div class="d-flex align-center my-4">
                        <div style="flex: 15; height: 0.8vh; background-color: #F4F6F8"></div>
                        <div style="flex: 15"></div>
                        <div style="flex: 70; height: 0.8vh; background-color: #F4F6F8"></div>
                      </div>
                      <div class="d-flex align-center my-4">
                        <div style="flex: 25; height: 0.8vh; background-color: #F4F6F8"></div>
                        <div style="flex: 5"></div>
                        <div style="flex: 70; height: 0.8vh; background-color: #F4F6F8"></div>
                      </div>
                      <div class="d-flex align-center my-4">
                        <div style="flex: 15; height: 0.8vh; background-color: #F4F6F8"></div>
                        <div style="flex: 15"></div>
                        <div style="flex: 70; height: 0.8vh; background-color: #F4F6F8"></div>
                      </div>
                    </div>
                  </v-card> -->
                </v-col>
                <v-col cols="2"></v-col>
                <v-col cols="4" class="pr-8">
                 
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>   
            </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      </div>
      <!-- For Mobile -->
      <div v-else>
        <div class="px-8 py-8">
          <h1 class="text-left white--text mb-4 mt-8" style="font-size: 40px; font-weight: 600; line-height: 44px;">The People's Bank - banking tailored for you</h1>
         
          <p class="nd-altfont white--text mb-8 font-weight-light mt-2 text-left">Imagine your bank recommending your next barber, helping you book appointments plus discount on your sessions, all these and more is being made possible. You’ll be the first to know when things are up and running.</p>
        <div v-if="!sent">
          <v-text-field class='white-input curved' :disabled='loading' @keydown.enter="joinWaitlist" v-model="email" hide-details placeholder="Enter your email" outlined>
            <template v-slot:append>
              <v-slide-x-transition leave-absolute>
                <v-progress-circular v-if="loading" size="24" color="white" indeterminate></v-progress-circular>
              </v-slide-x-transition>
            </template>
          </v-text-field>
          <v-btn :loading='loading' @click="joinWaitlist" :disabled='loading' block class="secondary curved nb-black text-capitalize mt-4" x-large>
            <span class="nb-black font-weight-medium">Join Waitlist</span>
          </v-btn>
        </div>
        <v-slide-y-transition leave-absolute>
          <v-alert v-show="sent" color="secondary" text icon="mdi-check-outline" prominent>
            <p class="font-weight-light mb-0">
            <span class="font-weight-bold">You're on the waitlist!</span>
            When we launch, You'll be the first to know. 👍
            </p>
          </v-alert>
        </v-slide-y-transition>
          <div>
            <div style="position: relative;">
              <v-img :src="require('@/assets/images/ladycard2.svg')" max-width="180" style="position: absolute; top: 4vh; left: -4vw; z-index: 3;"></v-img>
              <v-img :src="require('@/assets/images/recommendationssmall.svg')" max-width="180" style="position: absolute; bottom: 2vh; right: -5vw; z-index: 8;"></v-img>
              <!-- <div style="position: absolute; top: -2vh; left: -3vw; z-index: 3;" class="elevated-light white rounded-lg px-3 pt-2 pb-1">
                <div class="d-flex align-center">
                  
                <span class="caption">Earnings Summary</span>
                </div>
                <div class="d-flex">
                  <v-img contain :src="require('@/assets/icons/smallchart.svg')" max-width="15vw" class="mr-2"></v-img>
                  <div class="ml-n4">
                    <h4>&#8358;500,000</h4>
                    <p class="caption grey--text mb-2">Since the last 7 days</p>
                  </div>
                </div>
              </div> -->
              <v-img :src="require('@/assets/images/ladycropped.png')" style='position: absolute; bottom: 0; left: 50%; transform: translateX(-48%); z-index: 5; height: 100%;' contain></v-img>
              <!-- <div style="position: absolute; bottom: -2vh; right: -3vw; z-index: 5;" class="elevated-light white rounded-lg px-3 pt-2 pb-1">
                <div class="d-flex align-center">
                  <v-icon small color="primary" class="mr-1">mdi-check-decagram-outline</v-icon>
                <span class="caption">Recommendations</span>
                </div>
                <div class="d-flex">
                  
                  <div>
                    
                    <p class="caption grey--text mb-2"><strong>12 Vendors</strong> with discounts near you</p>
                  </div>
                </div>
              </div> -->
              <v-card style="height: 100%;" class="rounded-xl pa-0 mt-12 d-flex align-end">
              <v-img
               :aspect-ratio="1"
                :src="require('@/assets/images/ladybackground.png')"
                class="rounded-xl"
                height="100%"
              >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template></v-img>
            </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import API from '@/api/'
import { mapActions } from 'vuex';
import JoinWaitlistModal from '../modals/JoinWaitlistModal.vue';
export default {
  components: { JoinWaitlistModal },
  data() {
    return {
      dialog: false,
      loading: false,
      sent: false,
      email: '',
      step: 1,
    };
  },
    methods: {
    ...mapActions({
      showToast: "ui/showToast",
    }),
    slideCards(){
        this.step > 1 ? this.step-- : this.step++;
    },
    async joinWaitlist() {
      this.loading = true;
      try {
        const {data} =  await API.Waitlist.addToWaitlist({email: this.email});
        console.log({data})
        if(!data.error){
         return this.showToast({
            show: true,
            message: "Added to waitlist",
            sclass: "success",
            timeout: 2000,
          }).then(() => {
            this.email = '';
            this.loading = false;
            this.sent = true;
          })
        }
      } catch (error) {
        console.log({error});
        this.showToast({
            show: true,
            message: error.response.data.error,
            sclass: "error",
            timeout: 3000,
          });
        this.loading = false;
        this.sent = false;
      }
    }

  },
  mounted() {
    setInterval(() => {
      
      this.slideCards();
    }, 2500);
  },
}
</script>

<style>

</style>