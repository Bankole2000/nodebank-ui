<template>
  <div class="mobile-nav">
    <v-app-bar app color="primary" elevate-on-scroll dark>
      <v-app-bar-nav-icon x-large @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 75%;" class="d-flex align-center justify-center pl-0">
        <v-img class="mr-2" :src="require('@/assets/icons/logo.svg')" :aspect-ratio="1" max-width="30" contain></v-img>
        <p class="mt-1 mb-0" style="font-size: 2.5rem; font-family: Mazzard">Nodbank</p>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer class="primary" v-model="drawer" width="80vw" fixed temporary>
      <v-list-item>
        <div class="d-flex align-center justify-center" style="width: 100%">
                <v-img style="max-width: 30px" :src="require('@/assets/icons/logo.svg')" class="mb-1 mr-2" >
                <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary lighten-2"
                  ></v-progress-circular>
                </v-row>
              </template></v-img>
                <h1 class="white--text mb-0" style="font-size: 2.4rem; font-family: Mazzard !important;">Nodbank</h1>
              </div>
      </v-list-item>

      <v-divider></v-divider>
      <div class="pa-8" style="width: 100%;">
        <JoinWaitlistModal />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import JoinWaitlistModal from '../modals/JoinWaitlistModal.vue';
export default {
  components: { JoinWaitlistModal },
  data: () => ({
    drawer: false,
    group: 'home'
  })
};
</script>

<style>

</style>