<template>
  <div class="pokemon-container mt-4 mb-4">
    <img v-if="!showPokemon" 
      :src="imgSrc"
      class="img-fluid hidden-pokemon"
      alt="pokemon">

    <img v-else
      :src="imgSrc" 
      class="img-fluid fade-in"
      alt="pokemon">
  </div>
</template>

<script>
    // Number, required

    export default {

      props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
      },

      computed: {
        imgSrc () {
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
      }
    }
</script>

<style scoped>
  /* Pokemon Picture */
  .pokemon-container {
    height: 200px;
    /* width: 400px; */
    margin: 0 auto;
    position: relative;
  }

  img {
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }

  .hidden-pokemon {
      filter: brightness(0);
  }
</style>