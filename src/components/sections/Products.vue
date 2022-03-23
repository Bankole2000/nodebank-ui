<template>
  <div class="products-section">
    <div>
      <v-container v-if="$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col cols="12" class="py-12">
              <v-card height="30vh" elevation="0" class="rounded-xl pa-16" :style="{ backgroundImage: `url(${require('@/assets/images/backgroundImages/purplegradientdown.svg')}), url(${require('@/assets/images/backgroundImages/greengradient.svg')}), url(${require('@/assets/images/backgroundImages/yellowgradient.svg')})`, backgroundPosition: 'top left 0, top right -10vw, center left 0'}">
                <div style="width: 100%; background-color: none; height: 100%; position: relative;" >
                  <div class="rounded-lg elevated-light pa-16" style="width: 100%; background-color: white; position: absolute; bottom: 0;">
                    <h1 class="text-center px-16 mb-16">We've created products that are solving problems for over 300,000+ people</h1>
                    <v-row justify="center">
                      <v-col cols="4" v-for="i in 5" :key="i">
                        <div class="mb-4">
                          <v-img :src="require('@/assets/icons/nodcheckoutlogo.svg')" max-width="250px"></v-img>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>

          </v-row>
          
        </v-container>
        <div v-else class="ma-4">
          <v-card elevation="0" class="py-8 elevated-light">
            <h2 class="text-center px-4 mb-4">We've created products that are solving problems for over 300,000+ people</h2>
            <div class="text-center d-flex align-center justify-center" v-for="i in 5" :key="i">
                      <v-img class="mt-4 mb-4" :src="require('@/assets/icons/nodcheckoutlogo.svg')" max-width="220px"></v-img>
                    </div>
          </v-card>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>