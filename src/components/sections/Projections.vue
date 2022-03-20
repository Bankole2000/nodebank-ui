<template>
  <div class="projections">
    <v-container>
      <v-row>
        <v-col cols="12">

    <div class="text-center">
      <h1 class="display-3 font-weight-medium mt-16">Our Projections</h1>
      <h1 class="lined display-3 font-weight-medium mt-4">&nbsp;</h1>
    </div>
        </v-col>
        <v-col cols="12" md="4" v-for="(projection, i) in projections" :key="i">
          <div class="text-center">
            <h1 class="display-4">{{projection.title}}</h1>
            <p class="font-weight-light headline">{{projection.text}}</p>
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