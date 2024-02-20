<template>
  <div class="h-screen bg-gray-50 overflow-hidden">
    <div class="flex justify-center items-center">
      <AppHeader msg="Welcome to Your Vue.js App"/>
      <AppContent msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>

  // @ is an alias to /src
  import AppHeader from '@/components/AppHeader.vue'
  import AppContent from '@/components/AppContent.vue'

  export default {
    name: 'HomeView',
    components: {
      AppHeader,
      AppContent
    },
  }

</script>
