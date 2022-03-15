<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from './pages/PokemonPage'

export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
  @font-face { 
    font-family: Pokemon;
    src: local('Pokemon'),
    url(./fonts/PokemonSolid.ttf) format('truetype');
  } 

  #app {
    font-family: 'Pokemon', Helvetica, Arial;
    text-align: center;
    margin-top: 60px;
  }

  body {
    background-image: url('/img/pexels-pokeball.jpg');
  }
</style>
