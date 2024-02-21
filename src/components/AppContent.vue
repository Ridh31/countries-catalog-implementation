<template>
  <div id="country-catalog" class="h-screen flex justify-center items-start bg-gray-100 p-5">
    <div class="flex flex-col gap-5">

      <!-- Search & Sort -->
      <div class="grid grid-cols-2">

        <!-- Search -->
        <div class="flex justify-start items-center">
          <input type="text" placeholder="Search..." id="search-bar"
            class="focus:outline-none max-w-xl w-full p-3 shadow-md rounded-md">
        </div>

        <!-- Sort -->
        <div class="flex justify-end items-center">
          <select name="" id="" class="focus:outline-none max-w-sm w-full p-3 shadow-md rounded-md">
            <option value="" selected disabled>Sort (Country name)</option>
            <option value="asc">Asending</option>
            <option value="desc">Decending</option>
          </select>
        </div>
      </div>

      <!-- Catalog -->
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        <li v-for="country in countries" :key="country"
          class="flip-card">
          <div class="flip-card-inner flex flex-col gap-3 bg-white p-5 shadow-md rounded-md cursor-pointer">

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

            <!-- idd -->
            <div class="flex gap-1 text-start">
              <span class="select-none font-semibold">International Direct Dialing: </span>
              <span class="bg-gray-200 px-3 py-0.5 rounded-xl">{{ country.idd.root ?? "" }}</span>
              <span class="bg-gray-200 ml-1 px-3 py-0.5 rounded-xl line-clamp-1">
                {{ String(country.idd.suffixes).split(",").join(", ") ?? "" }}
              </span>
            </div>
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

<style>

.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}

.flip-card:focus {
    outline: 0;
}

.flip-card:hover .flip-card-inner,
.flip-card:focus .flip-card-inner{
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
}

.flip-card-front {
  z-index: 2;
}

.flip-card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

</style>