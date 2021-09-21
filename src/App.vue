<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {Header},
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

*{
  margin: 0;
  padding: 0;
}

span, p, h1, h2, h3, div, a{
  font-family: 'Nunito Sans', sans-serif;
}

a {
  text-decoration: none !important;
  cursor: pointer;
}

#app {
  height: 100vh;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}

</style>
