<template>
  <v-app>
    <MobileNav v-if='!$vuetify.breakpoint.mdAndUp' />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MobileNav from './components/shared/MobileNav.vue';

export default {
  components: { MobileNav },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
