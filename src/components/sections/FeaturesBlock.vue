<template>
  <div class="features">
    <v-container :style="{paddingTop: $vuetify.breakpoint.mdAndUp ? '50vh': '30vh'}" >
      <v-row style="margin-bottom: 20vh;">
        <v-col cols="12" class="mb-6" v-if="$vuetify.breakpoint.mdAndUp">
          <h1 class="lined display-3 font-weight-medium">We are redefining what</h1>
          <h1 class="lined display-3 mt-4 font-weight-medium">it means to be a bank...</h1>
          <h1 class="lined mt-4">&nbsp;</h1>
        </v-col>
        <div v-else class="px-8">
          <h1 class="lined mt-4 display-1">We are redefining</h1>
          <h1 class="lined mt-4 display-1">what it means</h1>
          <h1 class="lined mt-4 display-1">to be a bank</h1>
          <h1 class="lined mt-4">&nbsp;</h1>
        </div>
        <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i" :class="$vuetify.breakpoint.mdAndUp ? '': 'px-8'">
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
          text: 'At every stage of your growth, Nodbank will serve as your partner.'
        },
        {
          icon: 'safe.svg', 
          title: 'Freedom for your money',
          text: 'Set your money free, NodBank makes money so interoperable that the value of money held with us is worth 10x vs other services.'
        }
      ]
    }
  }
}
</script>

<style>

</style>