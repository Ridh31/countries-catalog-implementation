<template>
  <div class="h-screen flex justify-center items-start bg-gray-100 p-5">
    <div class="bg-white p-5 shadow-md rounded-md">
      <table class="w-96">
        <thead class="p-5">
          <tr>
            <th>Flag</th>
          </tr>
        </thead>
      <tbody>
      </tbody>
      </table>
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

            $.each(response, (index, country) => {

                console.log(country);
            });
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