<script setup></script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>
<script>
  export default {
    mounted() {
        fetch('http://localhost:5000/api')
        .then(response => response.json())
        .then(data => setMsg(data.message))
        .catch(error => console.error('Error fetching data:', error));
    },
    data() {
      return {
        message: 'Hello from Vue!'
      };
    }
  };
</script>

<style scoped></style>
