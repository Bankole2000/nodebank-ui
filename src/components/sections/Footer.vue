<template>
  <div class="footer">
     <div>
        <v-container v-if="$vuetify.breakpoint.mdAndUp">
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
        <div v-else style='width: 100vw;' class="nb-black-bg px-8 py-8">
          <v-img :src="require('@/assets/icons/logowhite.svg')" max-width="150" class="mb-8"></v-img>
          <div v-for="(link, i) in footerLinks" :key="i">
            <p class="white--text font-weight-light">{{link.text}}</p>
          </div>
          <div>
            <p class="white--text font-weight-light subtitle-2">&copy; Copyright {{ new Date().getFullYear() }} NodBank</p>
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