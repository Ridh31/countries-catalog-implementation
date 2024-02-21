<template>
  <div id="country-catalog" class="flex justify-center items-start bg-gray-100 p-5 overflow-auto">
    <div class="flex flex-col gap-5">

      <!-- Search & Sort -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

        <!-- Search -->
        <div class="flex justify-start items-center">
          <input type="text" placeholder="Search..." id="search-bar"
            class="focus:outline-none max-w-xl w-full p-3 shadow-md rounded-md">
        </div>

        <!-- Sort -->
        <div class="flex justify-end items-center">
          <select name="" id="" class="focus:outline-none max-w-sm w-52 md:w-full p-3 shadow-md rounded-md">
            <option value="" selected disabled>Sort (Country name)</option>
            <option value="asc">Asending</option>
            <option value="desc">Decending</option>
          </select>
        </div>
      </div>

      <!-- Catalog -->
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        <li v-for="country in countries" :key="country"
          class="flex flex-col gap-3 bg-gradient-to-r from-white hover:from-blue-100 to-white hover:to-cyan-100 p-5 shadow-md rounded-md cursor-pointer hover:scale-105 transition delay-75">

          <!-- Image -->
          <div class="select-none border border-gray-200 flex-shrink-0 rounded-sm hover:scale-95 transition delay-75">
            <img class="object-cover h-48 w-full" :src="country.flags.png ?? ''" :alt="country.name.common ?? ''">
          </div>

          <!-- Official name -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold whitespace-nowrap">Official Name: </span>
            <span class="text-red-400 line-clamp-1">{{ country.name.official ?? "" }}</span>
          </div>

          <!-- cca2 -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold whitespace-nowrap">CCA2: </span>
            <span class="bg-blue-200 px-3 py-0.5 rounded-xl">{{ country.cca2 ?? "" }}</span>
          </div>

          <!-- cca3 -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold whitespace-nowrap">CCA3: </span>
            <span class="bg-green-200 px-3 py-0.5 rounded-xl">{{ country.cca3 ?? "" }}</span>
          </div>

          <!-- Native name -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold whitespace-nowrap">Native name: </span>
            <span v-for="native in country.name.nativeName" :key="native" class="line-clamp-1">
              {{ native.official ?? "" }}
            </span>
          </div>

          <!-- ALT spellings -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold whitespace-nowrap">ALT Spellings: </span>
            <span class="line-clamp-1">
              {{ country.altSpellings.join(", ") ?? "" }}
            </span>
          </div>

          <!-- International Direct Dialing -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold">IDD: </span>
            <span class="bg-gray-200 px-3 py-0.5 rounded-xl">{{ country.idd.root ?? "" }}</span>
            <span class="flex bg-gray-200 ml-1 px-3 py-0.5 rounded-xl line-clamp-1">
              {{ String(country.idd.suffixes).split(",").join(", ") ?? "" }}
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
      countries: [],
      page: 1,
      perPage: 25,
      pages: [],
    }
  },
  methods: {
    fetchCountries() {
      fetch('https://restcountries.com/v3.1/all', {
        method: "GET",
      })
        .then((response) => {
          var data = response.json();
          return data;
        })
        .then((response) => {
          this.countries = response;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
  },
  mounted() {
    this.fetchCountries();
  }
}

</script>