<template>
  <div class="home-page">
    <HeaderJumbotron />
  </div>
</template>

<script>
import HeaderJumbotron from '../components/sections/HeaderJumbotron.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HeaderJumbotron
    // HelloWorld
  }
}
</script>
