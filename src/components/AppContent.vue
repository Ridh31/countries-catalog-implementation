<template>
  <div class="">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

  export default {
    name: 'AppContent',
    props: {
      msg: String
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