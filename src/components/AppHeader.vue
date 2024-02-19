<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

  export default {
    name: 'AppHeader',
    props: {
      msg: String
    }
  }

</script>