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
                <div class='d-flex align-center' style="flex: 3;">
                  <v-text-field class='curved' placeholder="Enter your email" hide-details outlined></v-text-field>
                  <v-btn class="primary white--text curved nb-black text-capitalize mt-1 ml-4" x-large>
                    <span class="font-weight-medium">Join Waitlist</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
      </v-container>
      <div v-else style="background-color: #F4F7F4" class="pt-6 pb-2">
        <div class="px-8">
          <h3 class="mb-0 text-center mb-4">Be the first to know when we launch</h3>
        </div>
        <div class="px-8">
          <v-text-field dense class='curved' placeholder="Enter your email" hide-details outlined></v-text-field>
          <v-btn block class="primary white--text curved nb-black text-capitalize my-4" large>
                <span class="font-weight-medium">Join Waitlist</span>
              </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>