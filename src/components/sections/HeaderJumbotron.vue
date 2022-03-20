<template>
  <div class="header-jumbotron">
    <div class="primary curved-bl-xl curved-br-xl" style="min-height: 110vh;">
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
                <h1 class="white--text nd-altfont mb-0" style="font-size: 2.4rem;">Nodbank</h1>
              </div>
              <div>
                <v-btn x-large class="secondary nb-black text-capitalize curved">
                  <span class="nb-black">Join Waitlist</span>
                </v-btn>
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
            <div class="d-flex align-start">
              <v-text-field class='white-input curved' placeholder="Enter your email" outlined></v-text-field>
              
              <v-btn class="secondary curved nb-black text-capitalize mt-1 ml-4" x-large>
                <span class="nb-black font-weight-medium">Join Waitlist</span>
              </v-btn>
            </div>
            </div>
          </v-col>
          <v-col sm="12" md="6" class="pl-16">
            <div style="height: 100%; position: relative">
            <v-card style="height: 100%;" class="rounded-xl pa-0 d-flex align-end">
              <v-img
               :aspect-ratio="1"
                :src="require('@/assets/images/home-image.webp')"
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
                  

                  <v-card min-height="20vh" elevation="0" class="rounded-xl elevated-light" style="margin-top: 40vh;">
                    <v-card-title>
                      <span class="subtitle-2 font-weight-light grey--text">Recommendations</span>
                    </v-card-title>
                    <div class="px-4 pb-1">
                      <div style="position: relative;" class="mb-4">
                        <v-img :src="require('@/assets/icons/tag.svg')"></v-img>
                        <v-img :src="require('@/assets/icons/star.svg')" style="position: absolute; top: -10px; left: 60%;"></v-img>
                        <v-img :src="require('@/assets/icons/star.svg')" style="position: absolute; bottom: -10px; left: 30%;"></v-img>
                      </div>
                      <p class="caption grey--text text-center">There are <strong>12 vendors</strong> new you with discounts on your first purchase!</p>
                    </div>
                    
                  </v-card>
                  
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>   
            </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>