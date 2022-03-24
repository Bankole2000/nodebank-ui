<template>
  <div class="features">
    <v-container :style="{paddingTop: $vuetify.breakpoint.mdAndUp ? '50vh': '30vh'}" >
      <v-row :style="{marginBottom: $vuetify.breakpoint.mdAndUp ? '20vh': '0'}">
        <v-col cols="12" class="mb-6" v-if="$vuetify.breakpoint.mdAndUp">
          <h1 class="lined display-3" style="font-size: 56px !important; font-weight: 600 !important; line-height: 64px;">We are redefining what</h1>
          <h1 class="lined display-3 mt-4" style="font-size: 56px !important; font-weight: 600 !important; line-height: 64px;">it means to be a bank...</h1>
          <h1 class="lined mt-4">&nbsp;</h1>
        </v-col>
        <div v-else class="px-8 mb-6">
          <h1 class="lined mt-5" style="font-weight: 600; font-size: 32px; line-height: 40px">We are redefining</h1>
          <h1 class="lined mt-5" style="font-weight: 600; font-size: 32px; line-height: 40px">what it means to</h1>
          <h1 class="lined mt-5" style="font-weight: 600; font-size: 32px; line-height: 40px">be a bank...</h1>
          <h1 class="lined mt-5" style="font-weight: 600; font-size: 32px; line-height: 40px">&nbsp;</h1>
        </div>
        <v-col cols="12" md="4" v-for="(feature, i) in features" :key="i" :class="$vuetify.breakpoint.mdAndUp ? '': 'px-8'">
          <div>
            <v-img width="8vh" :src="require(`@/assets/icons/${feature.icon}`)"></v-img>
          </div>
          <div>
            <h2 class="mt-6 mb-6" style="font-size: 26px; line-height: 26px; font-weight: 600;">{{feature.title}}</h2>
            <p style="font-weight: 400 !important; font-size: 18px; line-height: 24px; letter: 2%;">{{feature.text}}</p>
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
          text: 'Going far and beyond in providing services that matter - nearby merchant recommendations - choosing to bank with us whould be about your wellbeing.'
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