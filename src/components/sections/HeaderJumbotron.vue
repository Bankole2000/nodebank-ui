<template>
  <div class="header-jumbotron">
    <div class="primary curved-bl-xl curved-br-xl" style="min-height: 110vh;">
      <v-container>
        <v-row class="pt-10 pb-8">
          <v-col cols="12">
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-img :src="require('@/assets/icons/logo.svg')" class="mb-2 mr-2"></v-img>
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
              ></v-img>
            </v-card>
            <div style="position: absolute; top: 70px; left: -40px; min-height: 70vh; width: 125%;">
              <v-row>
                <v-col cols="5">
                  <v-card height="200px" class='rounded-xl'>
                  </v-card>
                </v-col>
                <v-col cols="2"></v-col>
                <v-col cols="4" class="pr-8">
                  

                  <v-card height="20vh" class="rounded-xl" style="margin-top: 40vh;">
                    <v-responsive :aspect-ratio="1">

                    Some content
                    </v-responsive>
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