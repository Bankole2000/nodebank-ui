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
          <v-col sm="12" md="6">
            <div style="min-height: 70vh;" class="d-flex flex-column justify-space-between">
            <h1 class="font-weight-bold white--text" style="font-size: 4.5rem; line-height: 5.5rem">The People's Bank - banking tailored for you</h1>
            <p class="nd-altfont white--text font-weight-light title mt-6">Imagine your bank recommending your next barber, helping you book appointments plus discount on your sessions, all these and more is being made possible. You’ll be the first to know when things are up and running.</p>
            <div class="d-flex align-start" v-if="!sent">
              <v-text-field class='white-input curved' @keydown.enter="joinWaitlist" v-model="email" placeholder="Enter your email" outlined>
                <template v-slot:append>
                  <v-slide-x-transition leave-absolute>
                    <v-progress-circular v-if="loading" size="24" color="white" indeterminate></v-progress-circular>
                  </v-slide-x-transition>
                </template>
              </v-text-field>
              
              <v-btn @click="joinWaitlist" :loading='loading' :disabled='loading' class="secondary curved nb-black text-capitalize mt-1 ml-4" x-large>
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
            </div>
          </v-col>
          <v-col sm="12" md="6" class="pl-16">
            <div style="height: 100%; position: relative">
              <v-img :src="require('@/assets/images/ladycropped.png')" style='position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); z-index: 5; height: 100%;' contain></v-img>
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
               <v-card elevation="0" min-height="15vh" width="15vw" class="rounded-xl elevated-light mx-4" style="margin-top: 40vh;">
                  <v-card-title class="mb-4">
                    <span class="subtitle-2 font-weight-light grey--text">Recommendations</span>
                  </v-card-title>
                  <div class="px-4 pb-1">
                    <v-alert text color="orange">
                      <div class="d-flex align-center justify-space-between">
                        <v-icon v-for="i in 5" :key="i" color="orange">mdi-star</v-icon>
                      </div>
                    </v-alert>
                    <!-- <div style="position: relative;" class="mb-4">
                      <v-img :src="require('@/assets/icons/tag.svg')"></v-img>
                      <v-img :src="require('@/assets/icons/star.svg')" style="position: absolute; top: -10px; left: 60%;"></v-img>
                      <v-img :src="require('@/assets/icons/star.svg')" style="position: absolute; bottom: -10px; left: 30%;"></v-img>
                    </div> -->
                    <p class="caption grey--text text-center">You have <strong>4 vendors</strong> for your auto insurance renewal, compare their offers here.</p>
                  </div>
                </v-card>
      </v-window-item>
       <v-window-item :value="2" style="min-height: 15vh;">
               <v-card elevation="0" min-height="15vh" width="15vw" class="rounded-xl elevated-light mx-4" style="margin-top: 40vh;">
                  <v-card-title class="mb-0 pb-2">
                    <span class="subtitle-2 font-weight-light grey--text">Welcome back,</span>
                    <p class="mb-0">Josephine B.</p>
                  </v-card-title>
                  <div class="px-4 pb-1">
                    <v-alert text color="primary">
                      <div class="text-center">
                        <div class="d-flex justify-center">

                        <v-img :src="require('@/assets/images/confetti.svg')" class="mb-1" max-width="20%"></v-img>
                        </div>
                        <p class="mb-0 caption font-weight-medium">It's your daughter's birthday today and we have a gift for her.</p>
                      </div>
                    </v-alert>
                    <!-- <div style="position: relative;" class="mb-4">
                      <v-img :src="require('@/assets/icons/tag.svg')"></v-img>
                      <v-img :src="require('@/assets/icons/star.svg')" style="position: absolute; top: -10px; left: 60%;"></v-img>
                      <v-img :src="require('@/assets/icons/star.svg')" style="position: absolute; bottom: -10px; left: 30%;"></v-img>
                    </div> -->
                   
                  </div>
                </v-card>
      </v-window-item>
              </v-window>
            </div>
            <div style="position: absolute; top: 70px; left: -40px; min-height: 70vh; width: 125%;">
              <v-row>
                <v-col cols="5">
                  <v-card min-height="200px" elevation="0" class='rounded-xl elevated-light'>
                    <v-card-title>
                      <span class="subtitle-2 font-weight-light grey--text">Earning Summary</span>
                    </v-card-title>
                    <div class="d-flex align-start px-4">
                      <v-img :src="require('@/assets/icons/smallchart.svg')" max-width="100">
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
                      <v-divider></v-divider>
                    </div>
                  </v-card>
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
          <h1 class="text-center white--text mb-2">The People's Bank</h1>
          <h1 class="text-center white--text font-weight-light">Banking Tailored <br /> for you</h1>
          <p class="nd-altfont white--text font-weight-light mt-2 text-center">Imagine your bank recommending your next barber, helping you book appointments plus discount on your sessions, all these and more is being made possible. You’ll be the first to know when things are up and running.</p>
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
              <div style="position: absolute; top: -2vh; left: -3vw; z-index: 3;" class="elevated-light white rounded-lg px-3 pt-2 pb-1">
                <div class="d-flex align-center">
                  <!-- <v-icon small color="primary" class="mr-1">mdi-chart-bell-curve</v-icon> -->
                <span class="caption">Earnings Summary</span>
                </div>
                <div class="d-flex">
                  <v-img contain :src="require('@/assets/icons/smallchart.svg')" max-width="15vw" class="mr-2"></v-img>
                  <div class="ml-n4">
                    <h4>&#8358;500,000</h4>
                    <p class="caption grey--text mb-2">Since the last 7 days</p>
                  </div>
                </div>
              </div>
              <v-img :src="require('@/assets/images/ladycropped.png')" style='position: absolute; bottom: 0; left: 50%; transform: translateX(-48%); z-index: 5; height: 100%;' contain></v-img>
              <div style="position: absolute; bottom: -2vh; right: -3vw; z-index: 5;" class="elevated-light white rounded-lg px-3 pt-2 pb-1">
                <div class="d-flex align-center">
                  <v-icon small color="primary" class="mr-1">mdi-check-decagram-outline</v-icon>
                <span class="caption">Recommendations</span>
                </div>
                <div class="d-flex">
                  <!-- <v-img contain :src="require('@/assets/icons/smallchart.svg')" max-width="15vw" class="mr-2"></v-img> -->
                  <div>
                    <!-- <h4>&#8358;500,000</h4> -->
                    <p class="caption grey--text mb-2"><strong>12 Vendors</strong> with discounts near you</p>
                  </div>
                </div>
              </div>
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