<template>
  <div class="options-container">
    <ul class="list-group d-grid gap-2">
      <li class="list-group-item btn mb-2" v-for="pokemon in pokemons" 
        :key="pokemon.id"
        @click="$emit( 'selection-pokemon', pokemon.id )">
          {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
  /* Pokemon Options */
  li {
      background: #f4a261 !important;
      border-top-width: thin !important;
      font-weight: bold;
      cursor: pointer;
      width: 25em;
  }

  li:hover {
      background: #b67d4f !important;
  }

  .options-container {
      font-family: Arial, Helvetica, sans-serif !important;
      display: flex;
      justify-content: center;
  }

  @media (max-width: 768px) {
    li {
      width: 15em;
    }
  }
</style>