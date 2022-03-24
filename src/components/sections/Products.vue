<template>
  <div class="products-section">
    <div>
      <v-container v-if="$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col cols="12" class="py-12">
              <v-card height="30vh" elevation="0" class="rounded-xl pa-16" :style="{ backgroundImage: `url(${require('@/assets/images/backgroundImages/purplegradientdown.svg')}), url(${require('@/assets/images/backgroundImages/greengradient.svg')}), url(${require('@/assets/images/backgroundImages/yellowgradient.svg')})`, backgroundPosition: 'top left 0, top right -10vw, center left 0'}">
                <div style="width: 100%; background-color: none; height: 100%; position: relative;" >
                  <div class="rounded-lg elevated-light pa-16" style="width: 100%; background-color: white; position: absolute; bottom: 0;">
                    <h1 class="text-center px-16 mb-16" :style="styles && styles.titleFont">We've created products that are solving problems for over 300,000+ people</h1>
                    <v-row justify="center" align="center">
                      <v-col cols="4" v-for="(product, i) in products" :key="i">
                        <div class="mb-4">
                          <v-img @click="goToLink(product.link)" :src="require(`@/assets/icons/${product.image}`)" max-width="250px" contain></v-img>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>

          </v-row>
          
        </v-container>
        <div v-else class="ma-8">
          <v-card elevation="0" class="py-8 elevated-light">
            <h2 class="text-center px-8 mb-4" style="font-size: 24px; line-height: 32px; letter: 2%; font-weight: 600 !important;">We've created products that are solving problems for over 300,000+ people</h2>
            <div class="text-center d-flex align-center justify-center" v-for="(product, i) in products" :key="i">
                      <v-img class="mt-4 mb-8" @click="goToLink(product.link)" :src="require(`@/assets/icons/${product.image}`)" max-width="220px" contain></v-img>
                    </div>
          </v-card>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      products: [
        {
          name: 'NodCheckout',
          image: 'nodcheckoutlogo.svg',
          link: 'http://nodcheckout.com/',
        }, 
     {
          name: 'NodCredit',
          image: 'nodcreditlogo.svg',
          link: 'http://nodcredit.com/',
        }, 
        {
          name: 'NodTransfer',
          image: 'nodtransferlogo.svg',
          link: 'http://nodtransfer.com/',
        }, 
      ]
    }
  }, 
  computed: {
    styles(){
      if(this.$vuetify.breakpoint.mdAndUp){
        return {
          titleFont: {
            fontWeight: '600 !important',
            fontSize: '32px !important',
            lineHeight: '48px',
            letter: '2%'
          }
        }
      }
      return {
        titleFont: {
            fontWeight: '600 !important',
            fontSize: '24px !important',
            lineHeight: '32px',
            letter: '2%'
          }
      }
    }
  },
  methods: {
    goToLink(link){
      window.location.replace(link)
    }
  }

}
</script>

<style>

</style>