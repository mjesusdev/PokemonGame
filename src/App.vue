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
    font-family: chubbo;
    src: local('Chubbo'),
    url(./assets/fonts/chubbo/Chubbo-Bold.ttf) format('truetype');
  } 

  #app {
    font-family: 'Chubbo', Helvetica, Arial;
    text-align: center;
    margin-top: 60px;
  }

  body {
    background-image: url('/img/pexels-pokeball.jpg');
  }
</style>
