<template>
  <div id="country-catalog" class="h-screen flex justify-center items-start bg-gray-100 p-5">
    <div class="flex flex-col gap-5">

        <!-- Search & Sort -->
        <div class="grid grid-cols-2">

          <!-- Search -->
          <div class="flex justify-start items-center">
            <input
            type="text"
            placeholder="Search..."
            id="search-bar"
            class="focus:outline-none max-w-xl w-full p-3 shadow-md rounded-md">
          </div>

          <!-- Sort -->
          <div class="flex justify-end items-center">
            <select
              name=""
              id=""
              class="focus:outline-none max-w-sm w-full p-3 shadow-md rounded-md">
              <option value="" selected disabled>Sort (Country name)</option>
              <option value="asc">Asending</option>
              <option value="desc">Decending</option>
            </select>
          </div>
        </div>

        <!-- Catalog -->
        <ul class="grid grid-cols-5 gap-5">
          <li
            v-for="country in countries"
            :key="country"
            class="flex flex-col gap-3 bg-white p-5 shadow-md rounded-md cursor-pointer hover:scale-105 transition delay-75">

            <!-- Image -->
            <div class="select-none flex-shrink-0">
              <img
                class="w-full h-20 object-contain"
                :src="country.flags.png ?? ''"
                :alt="country.name.common ?? ''">
            </div>

            <!-- Official name -->
            <div class="text-start">
              <span class="font-semibold">Official Name: </span>
              <span>{{ country.name.official ?? "" }}</span>
            </div>

            <!-- cca2 -->
            <div class="text-start">
              <span class="font-semibold">cca2: </span>
              <span class="bg-yellow-200 px-3 py-1 rounded-xl">{{ country.cca2 ?? "" }}</span>
            </div>

            <!-- cca3 -->
            <div class="text-start">
              <span class="font-semibold">cca3: </span>
              <span class="bg-green-200 px-3 py-1 rounded-xl">{{ country.cca3 ?? "" }}</span>
            </div>

            <!-- Native name -->
            <div class="text-start">
              <span class="font-semibold">Native name: </span>
              <span v-for="native in country.name.nativeName" :key="native">
                {{ native.official ?? "" }}
              </span>
            </div>

            <!-- ALT spellings -->
            <div class="text-start">
              <span class="font-semibold">ALT Spellings: </span>
              <span>
                {{ country.altSpellings.join(", ") ?? "" }}
              </span>
            </div>

            <!-- idd -->
            <div class="text-start">
              <span class="font-semibold">IDD: </span>
              <span class="bg-red-200 px-3 py-1 rounded-xl">{{ country.idd.root ?? "" }}</span>
              <span class="bg-red-200 ml-1 px-3 py-1 rounded-xl">
                {{ country.idd.suffixes ?? "" }}
              </span>
            </div>
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