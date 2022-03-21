<template>
  <div class="join-waitlist-modal">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn x-large v-bind="attrs" v-on="on" :block='!$vuetify.breakpoint.mdAndUp' class="secondary nb-black text-capitalize curved">
                  <span class="nb-black">Join Waitlist</span>
                </v-btn>
        <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn> -->
      </template>

      <v-card class="rounded-xl">
        <v-card-title class="headline primary white--text d-flex">
          Join the Waitlist
          <v-spacer></v-spacer>
          <v-btn color="white" @click="dialog = false" icon><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text class="pt-4">
          <p style="font-family: Mazzard !important;" class="title font-weight-light">Be the first to know when we launch</p>
          <v-text-field class='curved' placeholder="Enter your email" hide-details outlined></v-text-field>
          <v-btn block class="orange darken-2 white--text curved nb-black text-capitalize my-4" large>
            <v-icon left>mdi-key</v-icon>
            <span class="font-weight-medium">Get Early Access</span>
          </v-btn>
        </v-card-text>

        <!-- <v-divider></v-divider> -->

        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            I accept
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>

</style>