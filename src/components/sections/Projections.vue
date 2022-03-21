<template>
  <div class="projections">
    <v-container>
      <v-row>
        <v-col cols="12">

    <div class="text-center">
      <h1 class="font-weight-medium mt-16" :class="$vuetify.breakpoint.mdAndUp ? 'display-3':'display-1'">Our Projections</h1>
      <h1 v-if="$vuetify.breakpoint.mdAndUp" class="lined display-3 font-weight-medium mt-4">&nbsp;</h1>
    </div>
        </v-col>
        <v-col cols="12" md="4" v-for="(projection, i) in projections" :key="i">
          <div class="text-center">
            <h1 :class="$vuetify.breakpoint.mdAndUp ? 'display-4':'display-2 font-weight-light'">{{projection.title}}</h1>
            <p class="font-weight-light headline" :class="$vuetify.breakpoint.mdAndUp ? 'headline':'subtitle-2'">{{projection.text}}</p>
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
      ]
    }
  }
}
</script>

<style>

</style>