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
        <li v-for="(country, index) in countries" :key="country" @click="displayModal(index)"
          class="flex flex-col gap-3 hover:border-2 hover:border-sky-300 bg-white p-5 shadow-md rounded-md cursor-pointer hover:scale-105 transition delay-75">

          <!-- Image -->
          <div class="select-none border border-gray-200 flex-shrink-0 rounded-sm">
            <img class="object-cover h-48 w-full" :src="country.flags.png ?? ''" :alt="country.name.common ?? ''">
          </div>

          <!-- Official name -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold text-sm whitespace-nowrap">Official Name: </span>
            <span class="text-red-400 line-clamp-1 text-sm">{{ country.name.official ?? "" }}</span>
          </div>

          <!-- cca2 -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold text-sm whitespace-nowrap">CCA2: </span>
            <span class="bg-blue-200 px-3 py-0.5 text-sm rounded-xl">{{ country.cca2 ?? "" }}</span>
          </div>

          <!-- cca3 -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold text-sm whitespace-nowrap">CCA3: </span>
            <span class="bg-green-200 px-3 py-0.5 text-sm rounded-xl">{{ country.cca3 ?? "" }}</span>
          </div>

          <!-- Native name -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold text-sm whitespace-nowrap">Native name: </span>
            <span v-for="native in country.name.nativeName" :key="native" class="line-clamp-1 text-sm">
              {{ native.official ?? "" }}
            </span>
          </div>

          <!-- ALT spellings -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold text-sm whitespace-nowrap">ALT Spellings: </span>
            <span class="line-clamp-1 text-sm">
              {{ country.altSpellings.join(", ") ?? "" }}
            </span>
          </div>

          <!-- International Direct Dialing -->
          <div class="flex gap-1 text-start">
            <span class="select-none font-semibold text-sm">IDD: </span>
            <span class="bg-gray-200 px-3 py-0.5 rounded-xl">{{ country.idd.root ?? "" }}</span>
            <span class="flex bg-gray-200 ml-1 px-3 py-0.5 rounded-xl">
              <span class="line-clamp-1 text-sm">{{ String(country.idd.suffixes).split(",").join(", ") ?? "" }}</span>
            </span>
          </div>
        </li>
      </ul>

      <!-- Modal -->
      <div class="fixed z-10 overflow-y-auto top-auto w-full left-0 hidden" id="modal">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75"/>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            
            <!-- Modal header -->
            <div class="grid grid-cols-2 border-b border-gray-300 p-5">
              <div class="flex justify-start items-center font-bold text-sm text-gray-800">Country</div>

              <!-- Close icon -->
              <div class="flex justify-end items-center cursor-pointer hover:text-red-500" @click="toggleModal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            <!-- Modal content -->
            <div class="flex flex-col gap-3 p-5">

              <!-- cca2 -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">Name: </span>
                <span>{{ details.name ?? "" }}</span>
              </div>

              <!-- cca2 -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">CCA2: </span>
                <span>{{ details.cca2 ?? "" }}</span>
              </div>

              <!-- cca3 -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">CCA3: </span>
                <span>{{ details.cca3 ?? "" }}</span>
              </div>

              <!-- ccn3 -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">CCA2: </span>
                <span>{{ details.ccn3 ?? "" }}</span>
              </div>

              <!-- Language -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">Languages: </span>
                <span>{{ details.languages ?? "" }}</span>
              </div>

              <!-- Region -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">Region: </span>
                <span>{{ details.region ?? "" }}</span>
              </div>

              <!-- Currencies -->
              <div class="flex gap-1 text-start text-xs">
                <span class="select-none font-semibold whitespace-nowrap">Region: </span>
                <span>{{ details.currencies ?? "" }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      details: {},
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
    displayModal(index) {
      this.toggleModal()
      this.details = this.countries[index];

      console.log(this.details)
    },
    toggleModal() {
      document.getElementById('modal').classList.toggle('hidden')
    }
  },
  mounted() {
    this.fetchCountries();
  }
}

</script>