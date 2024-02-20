<template>
  <div class="h-screen bg-gray-100 overflow-hidden">
    <div class="flex justify-center items-center">
      <AppHeader/>
      <AppContent/>
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
