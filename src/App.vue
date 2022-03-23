<template>
  <v-app>
    <MobileNav v-if='!$vuetify.breakpoint.mdAndUp' />
    <v-main>
      <router-view/>
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import MobileNav from './components/shared/MobileNav.vue';
import Snackbar from './components/shared/Snackbar.vue';

export default {
  components: { MobileNav, Snackbar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
