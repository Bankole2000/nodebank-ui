<template>
  <div class="join-waitlist-modal">
    <v-dialog persistent v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  x-large v-bind="attrs" v-on="on" :block='!$vuetify.breakpoint.mdAndUp' class="secondary nb-black text-capitalize curved">
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
          <v-btn :disabled='loading' color="white" @click="dialog = false" icon><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text class="pt-4">
          <p style="font-family: Mazzard !important;" class="title font-weight-light">Be the first to know when we launch</p>
          <div v-if="!sent">
          <v-text-field class='curved' autofocus @keydown.enter="joinWaitlist" :disabled='loading' v-model="email" ref="email" placeholder="Enter your email" hide-details outlined>
            <template v-slot:append>
              <v-slide-x-transition leave-absolute>
                <v-progress-circular v-if="loading" size="24" color="primary" indeterminate></v-progress-circular>
              </v-slide-x-transition>
            </template>
          </v-text-field>
          <v-btn @click="joinWaitlist" :loading='loading' :disabled='loading' block class="orange darken-2 white--text curved nb-black text-capitalize my-4" large>
            <v-icon left>mdi-key</v-icon>
            <span class="font-weight-medium">Get Early Access</span>
          </v-btn>
          </div>
          <v-slide-y-transition leave-absolute>
            <v-alert v-show="sent" color="success" text icon="mdi-check-outline" prominent>
              <p class="font-weight-light mb-0">
              <span class="font-weight-bold">You're on the waitlist!</span>
              When we launch, You'll be the first to know. 👍
              </p>
            </v-alert>
          </v-slide-y-transition>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from '@/api/'
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      sent: false,
      email: '',
    };
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.email = '';
        this.sent = false;
      }
    }
  },
  methods: {
    ...mapActions({
      showToast: "ui/showToast",
    }),
    async joinWaitlist() {
      this.loading = true;
      try {
        const {data} =  await API.Waitlist.addToWaitlist({email: this.email});
        console.log({data})
        if(!data.error){
         return this.showToast({
            show: true,
            message: "Added to waitlist",
            sclass: "success",
            timeout: 2000,
          }).then(() => {
            this.email = '';
            this.loading = false;
            this.sent = true;
          })
        }
      } catch (error) {
        console.log({error});
        this.showToast({
            show: true,
            message: error.response.data.error,
            sclass: "error",
            timeout: 3000,
          });
        this.loading = false;
        this.sent = false;
      }
    }
  },

};
</script>

<style>

</style>