<template>
  <div class="footer">
     <div>
        <v-container v-if="$vuetify.breakpoint.mdAndUp">
          <v-row class="my-8">
            <v-col cols="12">
              <div class="nb-black-bg rounded-xl pa-16">
                <div class="d-flex align-start">
                  <div style="flex: 1;">

                  <v-img :src="require('@/assets/icons/logowhite.svg')" max-width="225"></v-img>
                  </div>
                  <div  style="flex: 1">
                    <div>
                      <p class="white--text" style="font-size: 18px; font-weight: 400; line-height: 21.28px !important;">Company links</p>
                    </div>
                    <div class="d-flex align-center">

                    <p class="mb-0 font-weight-light white--text" style="flex: 1; font-size: 16px; color: #A5A5A5 !important;">Fund NodBank</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1; font-size: 16px; color: #A5A5A5 !important;">Our Products</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1; font-size: 16px; color: #A5A5A5 !important;">The Team</p>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-center mt-4">
                  <div style="flex: 1;">
                    <p class="white--text mb-0 font-weight-light" style="font-size: 12px; font-weight: 400 !important">&copy; Copyright {{ new Date().getFullYear() }} NodBank</p>
                  </div>
                  <div class="d-flex align-center" style="flex: 1">
                    <p class="mb-0 font-weight-light white--text" style="flex: 1; font-size: 16px; color: #A5A5A5 !important;">Contact Us</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1; font-size: 16px; color: #A5A5A5 !important;">Terms of Use</p>
                    <p class="mb-0 font-weight-light white--text" style="flex: 1; font-size: 16px; color: #A5A5A5 !important;">Privacy</p>
                  </div>
                </div>

              </div>
            </v-col>
          </v-row>
        </v-container>
        <div v-else class="nb-black-bg px-8 pb-8 pt-12 ma-8 text-center" style="border-radius: 24px">
          <v-img :src="require('@/assets/icons/logowhite.svg')" max-width="179" class="mb-16 mx-auto"></v-img>
          <p class="text-center white--text mb-6" style="font-size: 16px; font-weight: 400 normal !important; line-height: 18px">Company Links</p>
          <div v-for="(link, i) in footerLinks" :key="i">
            <p class="mb-6 font-weight-light" style="font-size: 16px; font-weight: 400 normal !important; line-height: 18px; color: #A5A5A5;">{{link.text}}</p>
          </div>
          <div>
            <p class="white--text font-weight-light" style="font-size: 12px">&copy; Copyright {{ new Date().getFullYear() }} NodBank</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      footerLinks: [
        {
          text: 'Fund NodBank'
        }, 
        {
          text: 'Our Products'
        }, 
        {
          text: 'The Team'
        }, 
        {
          text: 'Contact Us'
        }, 
        {
          text: 'Terms of Use'
        }, 
        {
          text: 'Privacy'
        }, 
      ]
    }
  }
}
</script>

<style>

</style>