<template>
  <div id="country-catalog" class="h-screen flex justify-center items-start bg-gray-100 p-5">
    <div>
        <ul class="grid grid-cols-7 gap-3">
          <li v-for="country in countries" :key="country" class="bg-white p-5 shadow-md rounded-md">
            <div class="select-none flex-shrink-0">
              <img
                class="w-full h-20 object-contain"
                :src="country.flags.png ?? ''"
                :alt="country.name.common ?? ''">
            </div>
            <div>{{ country.name.common ?? "" }}</div>
          </li>
        </ul>
    </div>
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
        countries: []
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
            this.countries = response;
            console.log(response)
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