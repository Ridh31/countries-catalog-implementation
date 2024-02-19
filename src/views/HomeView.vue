<template>
  <div class="home">
    <div class="flex justify-center items-center">
      <img alt="Vue logo" src="../assets/images/logo.png">
    </div>
    <AppHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

  // @ is an alias to /src
  import AppHeader from '@/components/AppHeader.vue'

  export default {
    name: 'HomeView',
    components: {
      AppHeader
    }
  }

</script>
