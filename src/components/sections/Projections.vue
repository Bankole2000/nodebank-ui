<template>
  <div class="projections">
    <v-container>
      <v-row>
        <v-col cols="12">

    <div class="text-center">
      <h1 class="font-weight-medium my-16" :class="$vuetify.breakpoint.mdAndUp ? 'display-3':'display-1'">Our Projections</h1>
      
    </div>
        </v-col>
        <v-col cols="12" md="4" v-for="(projection, i) in projections" :key="i">
          <div class="text-center">
            <h1 :class="$vuetify.breakpoint.mdAndUp ? 'display-4':'display-2 font-weight-light'" class="mb-4 pb-0" :style="styles">{{projection.title}}</h1>
            <p class="px-8 mb-16" :style="fontStyles.fontStyles.bodyText">{{projection.text}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import  fontStyles from "@/utils/customStyles";
export default {
  data(){
    return {
      projections: [
        {
          title: '2M+',
          text: 'Users in the next 14 months'
        }, 
        {
          title: '$700m',
          text: 'Worth of transactions in the next 18 months'
        },
        {
          title: '6+',
          text: 'Countries enjoying our banking services within a year'
        }
      ], 
      fontStyles
    }
  },
  computed: {
    styles(){
      if(this.$vuetify.breakpoint.mdAndUp){
        return {
          fontWeight: '400 regular !important',
          fontSize: '104px !important', 
          lineHeight: '105.21px'
        }
      }
      return {
        fontWeight: '400 normal !important',
          fontSize: '80px !important', 
          lineHeight: '80.86px'
      }
    }
  }, 
  mounted(){
    console.log({fontStyles})
  }
}
</script>

<style>

</style>