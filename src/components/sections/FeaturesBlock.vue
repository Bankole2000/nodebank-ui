<template>
  <div class="features">
    <v-container style="padding-top: 50vh;">
      <v-row style="margin-bottom: 20vh;">
        <v-col cols="12" class="mb-6">
          <h1 class="lined display-3 font-weight-medium">We are redefining what</h1>
          <h1 class="lined display-3 mt-4 font-weight-medium">it means to be a bank...</h1>
          <h1 class="lined mt-4">&nbsp;</h1>
        </v-col>
        <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i">
          <div>
            <v-img width="8vh" :src="require(`@/assets/icons/${feature.icon}`)"></v-img>
          </div>
          <div>
            <h2 class="mt-3 mb-3">{{feature.title}}</h2>
            <p class="font-weight-light">{{feature.text}}</p>
          </div>
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      features: [
        {
          icon: 'hand.svg', 
          title: 'Beyond Savings & transfers',
          text: 'Going far and beyond in providing services that matter - nearby merchante recommendations - choosing to bank with us whould be about your wellbeing.'
        }, 
        {
          icon: 'head.svg', 
          title: 'Growing with you',
          text: 'Going far and beyond in providing services that matter - nearby merchante recommendations - choosing to bank with us whould be about your wellbeing.'
        },
        {
          icon: 'safe.svg', 
          title: 'Freedom for your money',
          text: 'Going far and beyond in providing services that matter - nearby merchante recommendations - choosing to bank with us whould be about your wellbeing.'
        }
      ]
    }
  }
}
</script>

<style>

</style>