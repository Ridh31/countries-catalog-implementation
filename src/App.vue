<template>
  <nav class="divide-x-2 divide-gray-300 flex justify-center items-center bg-white p-5 shadow-md sticky top-0 z-30">

    <!-- Home -->
    <router-link to="/" class="flex justify-center items-center gap-1 font-bold px-2 hover:text-orange-400 transition delay-75">
      <svg class="w-4 h-4" viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
        <g transform="translate(0 -1028.4)">
          <rect height="5.9999" width="3" y="1031.4" x="17" fill="#c0392b"/>
          <path d="m12 3.0312l-9 8.9688v1.812 5.376 1.812h1 8 8 1v-1.812-5.376-1.812l-9-8.9688z" transform="translate(0 1028.4)" fill="#bdc3c7"/>
          <path fill="#95a5a6" d="m12 1032-9 8.9v1.9 0.1l9-9 9 9v-0.1-1.9l-9-8.9z"/>
          <g>
          <path d="m12 1029.4-11.314 11.3 1.4145 1.4 9.8995-9.9 9.899 9.9 1.415-1.4-11.314-11.3z" fill="#e74c3c"/>
          <path d="m14 9a2 2 0 1 1 -4 0 2 2 0 1 1 4 0z" transform="translate(0 1029.4)" fill="#3498db"/>
          <rect height="6" width="4" y="1043.4" x="10" fill="#e67e22"/>
          <path d="m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z" transform="translate(1.5 1029.4)" fill="#d35400"/>
          <path d="m12 1036.4c-1.105 0-2 0.9-2 2 0 0.1 0.021 0.3 0.062 0.5 0.222-0.9 1.006-1.5 1.938-1.5s1.716 0.6 1.938 1.5c0.041-0.2 0.062-0.4 0.062-0.5 0-1.1-0.895-2-2-2z" fill="#2980b9"/>
          <path d="m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z" transform="translate(1.5 1028.9)" fill="#f1c40f"/>
          <rect height="1" width="4" y="1042.4" x="10" fill="#d35400"/>
          </g>
        </g>
      </svg>
      <span>Home</span>
    </router-link>

    <!-- About -->
    <router-link to="/about" class="flex justify-center items-center gap-1 font-bold px-2 hover:text-blue-400 transition delay-75">
      <svg class="w-4 h-4 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M789.333333 853.333333H234.666667l-128 128V256c0-70.4 57.6-128 128-128h554.666666c70.4 0 128 57.6 128 128v469.333333c0 70.4-57.6 128-128 128z" fill="#2196F3" /><path d="M469.333333 426.666667h85.333334v234.666666h-85.333334z" fill="#FFFFFF" /><path d="M512 320m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFFFFF" />
      </svg>
      <span>About</span>
    </router-link>
  </nav>
  <router-view/>
</template>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
