<template>
  <div class="call-to-action">
    <div>
      <v-container v-if="$vuetify.breakpoint.mdAndUp">
        <v-row>
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between pa-16 pb-12 rounded-xl" style="background-color: #F4F7F4">
                <div style="flex: 2">
                  <h1 class="mb-0">Be the first to know when we launch</h1>
                </div>
                <div style="flex: 1;">
                  &nbsp;
                </div>
                <div class='d-flex align-center' v-if="!sent" style="flex: 3;">
                  <v-text-field class='curved' @keydown.enter="joinWaitlist" v-model="email" :disabled='loading' placeholder="Enter your email" hide-details outlined>
                    <template v-slot:append>
                      <v-slide-x-transition leave-absolute>
                        <v-progress-circular v-if="loading" size="24" color="primary" indeterminate></v-progress-circular>
                      </v-slide-x-transition>
                    </template>
                  </v-text-field>
                  <v-btn @click="joinWaitlist" :loading='loading' :disabled='loading' class="primary white--text curved nb-black text-capitalize mt-1 ml-4" x-large>
                    <span class="font-weight-medium">Join Waitlist</span>
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
              </div>
            </v-col>
          </v-row>
      </v-container>
      <div v-else style="background-color: #F4F7F4" class="pt-10 pb-6">
        <div class="px-8">
          <h2 class="mb-0 text-center mb-4">Be the first to know when we launch</h2>
        </div>
        <div class="px-8" v-if="!sent">
          <v-text-field class='curved' :disabled='loading' v-model="email" @keydown.enter="joinWaitlist" placeholder="Enter your email" hide-details outlined>
            <template v-slot:append>
            <v-slide-x-transition leave-absolute>
              <v-progress-circular v-if="loading" size="24" color="primary" indeterminate></v-progress-circular>
            </v-slide-x-transition>
          </template>
          </v-text-field>
          <v-btn @click="joinWaitlist" :loading='loading' :disabled='loading' block class="primary white--text curved nb-black text-capitalize my-4" x-large>
            <span class="font-weight-medium">Join Waitlist</span>
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
      </div>
    </div>
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
}
</script>

<style>

</style>