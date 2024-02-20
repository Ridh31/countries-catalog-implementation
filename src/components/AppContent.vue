<template>
  <div id="country-catalog" class="h-screen flex justify-center items-start bg-gray-100 p-5">
    <div class="bg-white p-5 shadow-md rounded-md">
        <ul>
          <li v-for="(country, index) in countries" :key="country">
            <div>{{ index }}{{ country.cca2 }}</div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';

  export default {
    name: 'AppContent',
    props: {
      msg: String
    },
    data() {
      return {
        countries: {},
      };
    },
    methods: {
      fetchCountries: function() {
        fetch('https://restcountries.com/v3.1/all', {
          method: "GET",
        })
        .then((response) => {
          var data = response.json();
          return data;
        })
        .then((response) => {

          $.each(response, (index, countries) => {
            this.countries = countries
          });

          console.log(this.countries)
        })
        .catch((err) => {
          console.error(err);
        });
      },
    },
    mounted() {
      this.fetchCountries();
    }
  }

</script>