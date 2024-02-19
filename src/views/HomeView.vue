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
    },

    props: {
      msg: String,
    },
    data() {
      return {
        fact: "",
      };
    },
    methods: {
      fetchData() {
        fetch('https://restcountries.com/v3.1/all', {
          method: "GET",
        })
        .then((response) => {
          var data = response.json();
          return data;
        })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.error(err);
        });
      },
    },
    beforeMount() {
      this.fetchData()
    },
  }

</script>
